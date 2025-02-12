import Shimmer from './shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';
import { MENU_URL } from '../utils/Constants';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const apiUrl = MENU_URL + resId + "&catalog_qa=undefined";
    const resInfo = useRestaurantMenu(apiUrl);

    const [showIndex, setShowIndex] = useState(0);

    // Show loading shimmer if data is not yet available
    if (!resInfo) return <Shimmer />;

    // Extract restaurant details
    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards?.find((c) => c?.card?.card?.info)?.card?.card?.info || {};

    const cuisinesText = Array.isArray(cuisines) ? cuisines.join(", ") : "No cuisines available";

    // Extract categories (menu sections)
    const categories =
        resInfo?.cards?.find((c) => c?.groupedCard?.cardGroupMap?.REGULAR)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) || [];

    console.log("Categories:", categories);

    return (
        <div className="text-center">
            <h1 className='font-bold my-5 text-2xl'>{name}</h1>
            <p className='font-bold text-lg'>
                {cuisinesText} - {costForTwoMessage}
            </p>

            {categories.length > 0 ? (
                categories.map((category, index) => (
                    <RestaurantCategory
                        key={category?.card?.card?.title}
                        data={category?.card?.card}
                        showItems={index ===1? true:false }
                        setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                    />
                ))
            ) : (
                <p>No menu items available.</p>
            )}
        </div>
    );
};

export default RestaurantMenu;
