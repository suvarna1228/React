import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
   const cartItems=useSelector((store)=>store.cart.items);

   const dispatch = useDispatch();

   const handleClearCart=()=>{
       dispatch(clearCart())
   };
    return (
    <div className="text-center m-10 font-bold p-5">
        <h1  className="text-2xl font-bold">Cart</h1>
        <div className="border-black">
            <button className=" p-2 m-3 bg-black
             text-white rounded-lg"
             onClick={handleClearCart}
             >
                Clear Cart
            </button>
            {cartItems.length===0 && <h1>Your cart is empty please add something</h1>}
            <ItemList items={cartItems}></ItemList>
        </div>
    </div>
        
    );
};

export default Cart;