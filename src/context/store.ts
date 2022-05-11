import { combineReducers } from "redux";
import ThunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from "@context/app/appReducer";





const rootReducer = combineReducers({
    app: appReducer
})



export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(ThunkMiddleware)
})

export type AppRootState = ReturnType<typeof rootReducer>




// @ts-ignore
window.store = store