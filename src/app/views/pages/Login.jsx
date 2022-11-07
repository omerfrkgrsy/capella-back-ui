import {React,useState} from 'react'
import { TextBox } from "../components/Theme/Forms/TextBox";
import { Form } from "../components/Theme/Forms/Form";
import { useDispatch,useSelector } from "react-redux";
import { loginUser } from "../../store/actions/authActions";

export default function Login() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});
  
    const signUser = (event) => {
      event.preventDefault();
      
      dispatch(loginUser(formData));
    };
  return (
    <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        
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
  )
}
