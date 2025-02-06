import RestaurantCard from "./RestaurantCard";
import {useState, useEffect } from "react";
import { SWIGGY_URL } from "../utils/Constants";
import Shimmer from "./shimmer";
import resList from "../utils/mockData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body=() => {
  const [listofRestaurents, setListofRestaurents] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);  
   const [searchText,setSearchText]= useState("");

console.log("body rendered")

   useEffect(()=>{
    fetchData();
   },[]);

   const fetchData = async () => {
    try {
        const response = await fetch(SWIGGY_URL);
        const json = await response.json();
        console.log(json);  // This will help you inspect the structure

        const restaurantData = json?.data?.cards?.[2]?.gridElements?.infoWithStyle?.restaurants || resList;
        setListofRestaurents(restaurantData);
        setFilteredRestaurant(restaurantData);
    } catch (error) {
        console.error("Error fetching data, using mock data:", error);
        setListofRestaurents(resList);
        setFilteredRestaurant(resList);
    }
};

   const onlineStatus = useOnlineStatus();

   if(onlineStatus === false){
    return(
      <h1>
        no oo internet
      </h1>
      )
   }


   
  // conditional rendering
 
    // let listofRestaurents =[
    //     {
    //         info: {
    //             id: "651016",
    //             name: "Pizza Hut",
    //             cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/e2331886-84ca-4740-a3dd-e9c6bdb3c5f8_651016.jpg",
    //             costForTwo: "₹350 for two",
    //             cuisines: ["Pizzas"],
    //             avgRating: 4.3,
    //             deliveryTime: 22,
    //         },
    //     },
    //     {
    //         info: {
    //             id: "252303",
    //             name: "Domino's Pizza",
    //             cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/3b57debf-56bd-4d42-af43-1fe37d487629_252303.JPG",
    //             costForTwo: "₹400 for two",
    //             cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    //             avgRating: 4.1,
    //             deliveryTime: 25,
    //         },
    //     },
    //     {
    //         info: {
    //             id: "688719",
    //             name: "Chinese Wok",
    //             cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
    //             costForTwo: "₹250 for two",
    //             cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
    //             avgRating: 4.1,
    //             deliveryTime: 33,
    //         },
    //     },
    // ];
    return !Array.isArray(listofRestaurents) || listofRestaurents.length === 0 ? ( 
    <Shimmer/>
  ) :(
        <div className="body">
            <div className="filter">
              <div className="search">
                <input 
                type="text" 
                className="search-box" 
                value={searchText} 
                onChange={(e)=>{
                  setSearchText(e.target.value);
                }}/>
                
                <button
                   onClick={()=>{
                    console.log(searchText);

                    const filteredRestaurant=listofRestaurents.filter((res)=>
                      res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                   
                  setFilteredRestaurant(filteredRestaurant);
                   }}>
                    
                    search
                   </button>
              </div>


                <button className="filter-btn"
                 onClick={()=>{
                    const filterdList = listofRestaurents.filter(
                      (res)=>res.info.avgRating>4.1
                    );
                   setFilteredRestaurant(filterdList);
                }}>
                     Top Rated Restaurants
                </button>
            </div>

                <div className="res-container">
                 {filteredRestaurant.map((restaurant) => (
                   <Link
                   key={restaurant.info.id}
                   to={"/restaurants/" + restaurant.info.id}>
                    <RestaurantCard  resData={restaurant}/>
                   </Link>
                   
                 ))}
                </div>
            
        </div>
    );
};

export default Body;