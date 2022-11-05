import React, {  useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import "./TextBox.scss";
import * as yup from "yup";
export const TextBox = ({
  primary,
  label,
  type,
  name,
  size,
  placeholder,
  disabled,
  value,
  onChange,
  children,
  ...props
}) => {
  const getSizeCss = () => {
    switch (size) {
      case "small":
        return "text-sm";
      case "medium":
        return "text-md";
      case "large":
        return "text-lg";
      default:
        return "text-md";
    }
  };
  const schema = useRef(0);
  const firstRender = useRef(true);

  useEffect(() => {
    let objectYup={};
    objectYup = {
      [name]: getYupStringRuleObject(children),
    };
    schema.current = yup.object().shape(objectYup);
  });

  const getYupStringRuleObject = (rules) => {
    let requiredSchema;
    let min2Schema;
    let max2Schema;
    rules=[]
    rules.forEach(element => {
        var max = element.props.max;
        var min = element.props.min;
        switch (element.type.name) { 
            case "RequiredRule":
                requiredSchema = yup.string().required(element.props.message);
                break;
            case "StringLengthRule":
                min>0 ? min2Schema = yup.string().min(min,element.props.message):max2Schema = yup.string().max(max,element.props.message);
                break;
            default:{
                break;
            }        
        }
    });

    const mySchema =  yup.string()
    .concat(requiredSchema)
    .concat(min2Schema)
    .concat(max2Schema);
    return mySchema;
    
  };
  const [isValid, setIsValid]=useState(true);
  const [inputValue, setInputValue] = useState(value);
  const [errors, setErrors] = useState([]);
  useEffect(()=>{
    
    if(!firstRender.current){
      
      setErrors([]);
      setIsValid(true);
      schema.current.validate({[name]:inputValue},{ abortEarly: false}).catch(function (err) {
        
        let errors =err.inner.map((x)=>{
          return x.errors;
        });
        errors=errors[0];
        setErrors(errors);
        console.log(errors);
        setIsValid(false);
      });
    }
    firstRender.current=false;
  },[inputValue,name]);

  const onInputChange = (event) =>{
    setInputValue(event.target.value);
    if(onChange){

      onChange({[name]:event.target.value});
    }
  }

  return (
    <div>
    <div className="mb-3 col-12">
      <div>
        <label
          htmlFor={ name }
          className={[
            isValid ? "text-label" : "text-label-error",
            getSizeCss(),
          ].join(" ")}
        >
          {label}
        </label>
        <input
          type={type}
          id={name}
          value={inputValue}
          {...props}
          className={[
            isValid && !disabled
              ? "text-input"
              : !isValid
              ? "text-input-error error"
              : "text-input-disabled",
            getSizeCss(),
          ].join(" ")}
          placeholder={isValid ? (placeholder ?? label):""}
          disabled={disabled}
          readOnly={disabled}
          onChange={(e) => onInputChange(e)}
        />
        
      </div>
      <div>
    {errors.map((element,i)=>{
      
      return (<p key={i} className={["text-label-valid-error text-xs ml-2 mt-1 error"].join(" ")}>
        {element}
    </p>)
    })}
    </div>
       
    </div>
    
    </div>
  );
};

TextBox.propTypes = {
  
  primary: PropTypes.bool,

  type: PropTypes.oneOf(["text", "email", "password"]),

  label: PropTypes.string.isRequired,

  placeholder: PropTypes.string,

  size: PropTypes.oneOf(["small", "medium", "large"]),

  onChange: PropTypes.func,

  disabled: PropTypes.bool,

  value: PropTypes.string

};

TextBox.defaultProps = {
  primary: false,
  type: "text",
  size: "small",
  onChange: undefined,
  disabled: false,
  value:""
};
