import {CDN_URL} from "../utils/Constants";

const ItemList = ({items}) => {
  
  return (
    <div>
    {items.map(item => 
    <div
     key={item.card.info.id}
     className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
     >
      <div className="w-9/12">
        <div className="py-2">
          <span>{item.info.name} </span>
          <span>
            -$
            {item.info.price
            ?item.info.price/100
            :item.info.defaultPrice/100}
          </span>
        </div>
        <p className="text-xs">{item.info.description}</p>
      </div>
      <div className="w-3/12 p-4">
        <div className="absolute">
        <button className="p-2 bg-white shadow-lg bg-black text-white ">Add</button>
        <img src={CDN_URL+item.info.imageId} className="w-full"/>
        </div>

     </div>
       </div>)}
    </div>
  )
};

export default ItemList;