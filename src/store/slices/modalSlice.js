import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isOpen: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        open(state, action){
           state.isOpen = true
        }, 
        close(state){
             return  !state.isOpen
        }
    }
})

export const modalActions = modalSlice.actions
export default modalSlice