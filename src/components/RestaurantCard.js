import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} =props;
    const{ name, avgRating ,cuisines,cloudinaryImageId,costForTwo,deliveryTime} = resData?.info;
   return(
    <div className="res-card">
        <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/> 
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>${costForTwo/100}</h4>
        <h4>{deliveryTime}miniutes</h4>
    </div>
   ); 
};

export default RestaurantCard;