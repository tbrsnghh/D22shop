import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState={
    items: [],
    status: 'start',
    error: null,
}

//Get products from API by async() >> async thunk 
const url = 'https://66a07b337053166bcabb89f5.mockapi.io/Products';
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const res = await axios.get(url);
    
    console.log(res)
    return res.data;
});

const productsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchProducts.pending, (state)=>{
            state.status = 'loading'
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.items = action.payload;
        })
        .addCase(fetchProducts.rejected, (state,action)=>{
            state.status = 'failed';
            console.log("res: ")
            state.error = action.error.message;
        })
    }
});
export const {}=productsSlice.actions
export default productsSlice.reducer;


