// Reducer (libraryreducer.js)
import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("login"));
const books = JSON.parse(localStorage.getItem("books"));
const shelves = JSON.parse(localStorage.getItem("shelves"))
const author = JSON.parse(localStorage.getItem("author"))

export const librarySlice = createSlice({
    name: "library",
    initialState: {
        user: user,
    },
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("login", JSON.stringify(action.payload));
        },
        logOut: (state) => {
            // state.user = null;
            localStorage.setItem("login", JSON.stringify(state.user = null))
        },


    },
});

export const { loginUser, logOut, } =
    librarySlice.actions;
export default librarySlice.reducer;
