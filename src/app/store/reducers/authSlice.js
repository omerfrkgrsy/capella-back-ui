import { createSlice } from '@reduxjs/toolkit'
import tokenService from '../../services/tokenService';
import { fetchCategory } from '../actions/authActions';

const initialState = {
  user: {},
  token:null,
  isAuthenticated:false,
  category:{}
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state,action) => {
      state.user.value = action.payload;
    },
    setToken: (state,action) => {
      state.token = action.payload;
    },
    setIsAuthenticated: (state,action) => {
      state.isAuthenticated = action.payload;
    },
  }
})

export default authSlice;