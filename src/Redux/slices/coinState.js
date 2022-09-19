import {createSlice} from '@reduxjs/toolkit'

export const coinSlice = createSlice({
    name:'coins',
    initialState: {
        list:[],
        length:50,
        isLoading: false
    },
    reducers:{
        getCoinsFetch : (state)=>{
            state.isLoading = true;
        },
        getCoinsSuccess : (state,action)=>{
            state.isLoading = false
            state.list = action.payload
        },
        getCoinsFail: (state)=>{
            state.isLoading = false
        }

    }
})
export const selectlength = (state)=> state.coins.length
export const selectCoinsList = (state)=> state.coins.list
export const {getCoinsFetch,getCoinsSuccess,getCoinsFail} = coinSlice.actions;
export default coinSlice.reducer