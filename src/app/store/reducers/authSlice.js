import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  token:null,
  isAuthenticated:false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state,action) => {
      state.user.value = action.payload;
    },
    
    setToken: (state,action) => {
      console.log(state)
      state.token = action.payload;
    },
    setIsAuthenticated: (state,action) => {
      state.isAuthenticated = action.payload;
    }
  },
})

export default authSlice;