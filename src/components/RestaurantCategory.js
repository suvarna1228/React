import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,  index }) => {
  const[showIndex,setShowIndex]=useState(false)
  const handleClick = () => {
    
    setShowIndex(showIndex === index ? null : index); // Toggle category index
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
        <div className="flex justify-between cursor-pointer w-full p-4" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
      </div>

      {showIndex === index && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
