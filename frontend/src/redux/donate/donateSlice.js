import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    type: "",
    name: "",
    email: "",
    amount: 0,
  },
];

const donate = createSlice({
    name: 'Donate',
    initialState,
    reducers: {
        
    }
})

export default donate.reducer;