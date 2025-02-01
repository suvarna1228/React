import React, { useState } from 'react'
import { useEffect } from 'react';
import Shimmer from './shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constants';

const MOCK_RESTAURANT_DATA = {
    name: "Mock Restaurant",
    cuisines: ["Mock Indian", "Mock Chinese"],
    costForTwoMessage: "₹500 for two",
    menuItems: [
        { name: "Mock Biriyani", price: 250 },
        { name: "Mock Burger", price: 150 },
        { name: "Mock Diet Coke", price: 50 }
    ]
};

const RestaurentMenu = () => {
    const[resInfo,setResInfo]= useState(null);
    const {resId}= useParams();

    console.log(params)

    useEffect(()=>{
     fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        try {
            const response = await fetch(`${MENU_URL}${resId}&submitAction=ENTER`);

            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
        const json = await data.json();

        console.log(json);

        setResInfo(json.data || {});
    }catch (error) {
        console.error("Error fetching data, using mock data:", error);

        setResInfo(MOCK_RESTAURANT_DATA);
    }
};
    
    if (resInfo === null) return  <Shimmer/>;

   const { name , cusines , costForTwoMessage } =
   resInfo?.cards[0].card?.card?.info;

   const {itemCards}=
   resInfo?.cards[2].groupedCard?.cardsGroupMap?.REGULAR?.
   cards[1].card?.card;

    console.log(itemCards);
  return(
    <div className="menu">
        <h1>{name}</h1>
        <h2>{cusines.join(",")}- {costForTwoMessage}</h2>
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