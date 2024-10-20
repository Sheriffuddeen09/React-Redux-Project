
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        name:"Sheriffuddeen"
    },
    {
        id: "2",
        name:"Olawale"
    },
    {
        id: "3",
        name:"Wale"
    }
    ]

    export const usersSlice = createSlice({
        name:"users",
        initialState,
        reducers:{

        }
    })

    export const selectAllUsers = (state) => state.users
    export default usersSlice.reducer