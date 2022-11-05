import React from 'react'
import PropTypes from "prop-types";

export const StringLengthRule = ({isValidationRule,message}) => {
   
  return (
    <div>
    </div>
  )
}

StringLengthRule.propTypes = {

    isValidationRule: PropTypes.bool,
    message: PropTypes.string,
  };
  
  StringLengthRule.defaultProps = {
    isValidationRule: true
  };
  