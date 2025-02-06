
import Shimmer from './shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurentMenu = () => {
    
    const { resId }= useParams();

    const resInfo = useRestaurantMenu(resId);


    
    if (resInfo === null) return  <Shimmer/>;

   const {name,cuisines,costForTwoMessage } =
   resInfo?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info;

   const {itemCards}=
   resInfo?.data?.cards[7].groupedCard?.cardGroupMap?.REGULAR?.
   cards[2]?.card?.itemCards?.card?.info;

    console.log(itemCards);

  return(
    <div className="menu">
        <h1>{ name}</h1>
        <p>{cuisines.join(",")}- {costForTwoMessage}</p>
        <ul>
            {itemCards.map((item) => (
                <li key={item.card.info.name}>
                    {item.card.info.name}
                    {item.card.info.price/100}||
                    {item.card.info.defaultprice/100}</li>
                ))}
            <li>{itemCards[0].card.info.name}</li>
            <li>{itemCards[1].card.info.name}</li>
            <li>{itemCards[2].card.info.name}</li>
            <li>{itemCards[3].card.info.name}</li>
        </ul>
    </div>
  );
};

export default RestaurentMenu;