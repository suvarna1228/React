import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import {CDN_URL} from "../utils/Constants";
const ItemList = ({items}) => {
 const dispatch = useDispatch();
  const handleAddItem=(item)=>{
    //dispatch
    dispatch(addItem(item))
  }
  return (
    <div>
    {items.map(item => (
        <div
          key={item.card.info.id}
          className="w-6/12 mx-auto my-4 shadow-lg  p-5  border-gray-200 border-b-2 text-left   flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name} </span>
              <span>
                - $
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs ">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4 relative">
            <img src={CDN_URL + item.card.info.imageId} className="w-full" alt={item.card.info.name} />
            <button className="absolute bottom-2 left-1/2 
            transform -translate-x-1/2 p-2 
            shadow-lg bg-black text-white"
            onClick={()=>handleAddItem(item)}>
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;