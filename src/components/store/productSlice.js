import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    isLoading: false,
    error: null
}

export const getProducts = createAsyncThunk(
    "productList/getProducts",
    async () => {
        const { data } = await axios.get(
            "https://fakestoreapi.com/products"
        );

        console.log('data====> ', data)
        return data;

    });

const productSlice = createSlice({
    name: "productList", initialState,
    reducers: {

    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        },
        [getProducts.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});



export default productSlice.reducer;