import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { HYDRATE } from "next-redux-wrapper"

const initialState = {
  data: null,
}
const fetchExperts = createAsyncThunk("users/fetchExperts", async () => {
  const response = await axios.get(
    "https://coursalytics.com/api/search/experts"
  )
  return response.data
})

export const expertsSlice = createSlice({
  name: "experts",
  initialState,
  reducers: {
    getExp: (state, action) => {
      const response = axios.get("https://coursalytics.com/api/search/experts")
      return response.data
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", action.payload)
      return {
        ...state,
        ...action.payload,
      }
    },
  },
})

export const { increment, decrement, incrementByAmount } = expertsSlice.actions

export default expertsSlice.reducer
