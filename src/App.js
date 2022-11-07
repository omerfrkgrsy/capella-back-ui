import React from "react";
import {  useSelector,useDispatch } from "react-redux";
import { BrowserRouter,Route} from "react-router-dom";
import AppRouter from "./app/router/AppRouter";
import {loginUser,fetchCategory} from "./app/store/actions/authActions";
import Navbar from "./app/views/Navbar/Navbar";
function Index() {
  const dispatch = useDispatch();
  
  const category = useSelector((state) => state.auth.category);
  const token = useSelector((state)=>state.auth.token) 

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const signUser = (event) => {
    event.preventDefault();

    dispatch(loginUser({username:"string",password:"string"}));
    dispatch(fetchCategory({ id: 1 }));
  }; 

  return (
    <div>
      

      <BrowserRouter>
      <Navbar></Navbar>
        <AppRouter isAuthenticated={isAuthenticated}></AppRouter>
      </BrowserRouter> 
    </div>
  );
}

export default Index;
