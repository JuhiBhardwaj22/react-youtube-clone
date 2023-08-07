import { createSlice } from "@reduxjs/toolkit";

const appSlice =createSlice({
    name:'appSlice',
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleMenu:(state) =>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeTogglemenu:(state) =>{
            state.isMenuOpen = false
        }
    }
})

export const {toggleMenu,closeTogglemenu} = appSlice.actions;
export default  appSlice.reducer;