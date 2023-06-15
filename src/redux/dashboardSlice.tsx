import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  upcomingleave: [],
  upcomingPublicHoliday: [],
  celebration: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUpcomingLeave: (state, action) => {
      state.upcomingleave = action.payload;
    },
    setupcomingPublicHoliday: (state, action) => {
      state.upcomingPublicHoliday = action.payload;
    },
    setCelebration: (state, action) => {
      state.celebration = action.payload;
    },
    
  },
});

// Action creators are generated for each case reducer function

export default counterSlice.reducer;
