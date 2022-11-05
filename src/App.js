import React, { useState } from "react";
import { TextBox } from "./app/views/components/Theme/Forms/TextBox";
import { Form } from "./app/views/components/Theme/Forms/Form";
import { useDispatch,useSelector } from "react-redux";
import { loginUser } from "./app/store/actions/authActions";

function Index() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
  const token = useSelector((state)=>state.auth.token)
  const [formData, setFormData] = useState({});

  const signUser = (event) => {
    event.preventDefault();
    console.log(isAuthenticated);
    console.log(token);
    
    dispatch(loginUser(formData));
  };
  return (
    <div>
      <div className="flex col-3 p-5">
        <Form formData={formData}>
          <TextBox
            name="username"
            label="UserName"
            onChange={(data) => setFormData({ ...formData, ...data })}
          ></TextBox>
          <TextBox
            name="password"
            label="Pasword"
            type="password"
            onChange={(data) => setFormData({ ...formData, ...data })}
          ></TextBox>
           <button
          onClick={(e)=>{signUser(e)}}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Button
        </button>
        </Form>
      </div>
    </div>
  );
}

export default Index;
