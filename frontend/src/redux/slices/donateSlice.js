import { createSlice } from "@reduxjs/toolkit";
const donationInfoName = "donate info";

let donationInfoFromStorage = localStorage.getItem(donationInfoName);
try {
  donationInfoFromStorage =
    donationInfoFromStorage && JSON.parse(donationInfoFromStorage)
      ? JSON.parse(donationInfoFromStorage)
      : [];
} catch (err) {
  donationInfoFromStorage = [];
}

const initialState = {
  donationInfo: donationInfoFromStorage,
};

const donate = createSlice({
  name: "donate",
  initialState,
  reducers: {
    addDonateInfo: (state, { payload }) => {
      state.donationInfo = payload;
      localStorage.setItem(donationInfoName, JSON.stringify(payload));
    },
    emptyDonate: (state) => {
      state.donationInfo = [];
      localStorage.setItem(donationInfoName, []);
    },
  },
});

export const { addDonateInfo, emptyDonate } = donate.actions;

export default donate.reducer;
