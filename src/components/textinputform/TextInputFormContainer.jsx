import { useState } from 'react';
import TextInputForm from './TextInputForm';

import { useNavigate } from "react-router-dom"

function TextInputFormContainer() {
  const [inputType, setInputType] = useState('password');
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Submitted value ", value);
    navigate("/play", { state: { value } });
  }

  function handleTextInputChange(event) {
    setValue(event.target.value);
  }

  function handleShowHideClick() {
    console.log('Show/Hide button clicked');
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
  }

  return (
    <TextInputForm
      type={inputType}
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
    />
  );
}

export default TextInputFormContainer;
