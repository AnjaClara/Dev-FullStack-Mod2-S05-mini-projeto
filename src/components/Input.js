import React from "react";
import PropTypes from 'prop-types';

function Input(props){

  return(
    <input placeholder={props.propPT} className="inputMain" type="text"></input>
  );
}

Input.propTypes = {
  propPT: PropTypes.string.isRequired,
  propEN: PropTypes.string.isRequired
}

export default Input;