
import Shimmer from './shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurentMenu = () => {
    
    const { resId }= useParams();

    const resInfo = useRestaurantMenu(resId);

   const [showIndex,setShowIndex] = useState();
    
    if (resInfo === null) return  <Shimmer/>;

   const {name,cuisines,costForTwoMessage } =
   resInfo?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info || {};

   const {itemCards}=
   resInfo?.data?.cards[7].groupedCard?.cardGroupMap?.REGULAR?.
   cards?.[2]?.card?.card?.itemCards || [];

    console.log(itemCards);

    const categories = resInfo?.data?.cards[7].groupedCard?.cardGroupMap?.REGULAR?.
    cards?.[2]?.card?.card?.itemCards.filter((c)=>
        c.card?.["card"]?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

  return(
    <div className="text-center">
        <h1 className='font-bold my-5 text-2xl'>{ name}</h1>
        <p className='font-bold text-lg'>{cuisines.join(",")}- {costForTwoMessage}</p>

    {cuisines.map((category) => (
        <RestaurantCategory 
        key={category?.card?.card?.tittle} 
        data={category?.card?.card}
        setShowIndex={()=>setShowIndex(index)}
        />
  ))}
    </div>
  );
};

export default RestaurentMenu;