import {createSlice} from '@reduxjs/toolkit'

export const coinSlice = createSlice({
    name:'coins',
    initialState: {
        list:[],
        length:50,
        reverse: false,
        isLoading: false
    },
    reducers:{
        getCoinsFetch : (state)=>{
            state.isLoading = true;
        },
        getCoinsSuccess : (state,action)=>{
            state.isLoading = false
            if(state.reverse){
                state.list = action.payload.reverse()
            }else{
                state.list = action.payload
            }
            
        },
        getCoinsFail: (state)=>{
            state.isLoading = false
        },
        increaseLength:(state)=>{
            state.length +=50
        },
        reverseList:(state)=>{
            state.reverse = !state.reverse

        }

    }
})
export const selectlength = (state)=> state.coins.length
export const selectCoinsList = (state)=> state.coins.list
export const selectReverse = (state)=> state.coins.reverse
export const {getCoinsFetch,getCoinsSuccess,getCoinsFail,increaseLength,reverseList} = coinSlice.actions;
export default coinSlice.reducer