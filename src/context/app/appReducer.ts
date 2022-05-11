
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";






//reduser





const initialState = {
    color: false
}


const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        chengeColorAction(state, action: PayloadAction<{ value: boolean }>) {
           state.color = action.payload.value
        },

       
    },
    extraReducers: (builder) => {
      
    }
})


export const appReducer = slice.reducer

export const {chengeColorAction} = slice.actions
