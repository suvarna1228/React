import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
name:'cart',
initialState:{
    items:[]
},
reducers:{
    addItem:(state,action)=>{
        state.items.push(action.payload);
    },
    ramoveItem:(state)=>{
        state.items.pop();
    },
    clearCart:(state)=>{
        state.items.length = 0;
    },
},
});

export const{addItem,ramoveItem,clearCart}=CartSlice.actions
export default CartSlice.reducer;
