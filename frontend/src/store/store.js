import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogReducer";

const store = configureStore({
    reducer: blogReducer
})
export default store

