import React from 'react'
import PropTypes from "prop-types";

export const RequiredRule = ({isValidationRule,message,max,min}) => {
   
  return (
    <div>
    </div>
  )
}

RequiredRule.propTypes = {

    isValidationRule: PropTypes.bool,
    message: PropTypes.string,
    max:PropTypes.number,
    min:PropTypes.number
  };
  
  RequiredRule.defaultProps = {
    isValidationRule: true,
    min:0
  };
  