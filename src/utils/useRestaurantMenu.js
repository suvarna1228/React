import { useEffect, useState } from "react";

const useRestaurantMenu = (apiUrl) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        if (!apiUrl) return;

        const fetchMenu = async () => {
            const response = await fetch(apiUrl);
            const json = await response.json();
            console.log("Menu Data:", json?.data);
            setResInfo(json?.data);
        };

        fetchMenu();
    }, [apiUrl]); 

    return resInfo;
};

export default useRestaurantMenu;
