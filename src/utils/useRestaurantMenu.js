import { useEffect, useState } from "react";
import { MENU_URL } from "./Constants";
import resMenu from "./MockMenu";

const useRestaurantMenu = (resId) =>{
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        try {
            const response = await fetch(MENU_URL + resId);
            if (!response.ok) {
                throw new Error("API request failed");
            }

            const json = await response.json();
            

            const menuData =
                json?.data?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.itemCards ||
                resMenu;

            setResInfo(menuData);
        } catch (error) {
            console.error("Error fetching data, using mock data:", error);
            setResInfo(resMenu);

        }
    };
    return resInfo;
};
export default useRestaurantMenu;