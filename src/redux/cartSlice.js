import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartList:[],
    status: 'idle',
    error: null
}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action) =>{  
            state.cartList.push({...action.payload, quantity: 1})
        },
        delItem: (state, action) =>{
            state.cartList =state.cartList.filter(item => item.id !== action.payload)
        },
        clearCart:(state)=>{
            state.cartList = []
        },
        setLoading:(state)=>{
            state.status="loading"
        },
        setError:(state, action)=>{
            state.status="failed"
            state.error= action.payload
        },
        setLoaded:(state)=>{
            state.status="succeeded"
        }

    },
})
export const {addToCart, delItem, clearCart, setError,setLoaded,setLoading}=cartSlice.actions
export default cartSlice.reducer;