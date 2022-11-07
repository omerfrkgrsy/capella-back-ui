import authSlice from "../reducers/authSlice";
import authService from "../../services/authService";
import tokenService from "../../services/tokenService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authActions=authSlice.actions;

export const loginUser=(user)=>{
    return async(dispatch,getState)=>{
        if(!getState().isAuthenticated){
            var response = await authService.loginUser(user);
            tokenService.setToken(response.accessToken);

            dispatch(authActions.setIsAuthenticated(true));
            dispatch(authActions.setToken(response.accessToken));
            
        }
    }
}

export const fetchCategory = createAsyncThunk('auth/getCategory', 
    async ({id}) => {
        var response = await authService.getCategory(id);
        return response;
    }
)
