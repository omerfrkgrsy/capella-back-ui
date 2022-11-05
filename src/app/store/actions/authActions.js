import authSlice from "../reducers/authSlice";
import authService from "../../services/authService";

export const authActions=authSlice.actions;

export const loginUser=(user)=>{
    return async(dispatch,getState)=>{
        if(!getState().isAuthenticated){
            var response = await authService.loginUser(user);
            dispatch(authActions.setIsAuthenticated(true));
            dispatch(authActions.setToken(response.data.accessToken));
            
        }
    }
}