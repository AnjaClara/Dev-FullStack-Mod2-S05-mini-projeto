import React from "react";
import PropTypes from 'prop-types';

function Button (props){

  return(
    <>
    <button className="send">{props.prop}</button>
    </>
  );
}

Button.propTypes = {
  prop: PropTypes.string.isRequired,
  propUS: PropTypes.string.isRequired,
  propNumber: PropTypes.number.isRequired,
  propBoolean: PropTypes.bool
}

export default Button;