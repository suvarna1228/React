import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import cartReducer from "./CartSlice";

const AppStore = configureStore(
    {
     reducer:{
        cart:cartReducer,
     },
    }
);

export default AppStore;