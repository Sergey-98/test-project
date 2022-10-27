import React, { useState, useContext } from 'react';
import classes from './UInput.module.css';
import { Context } from 'components/Context/Context';

export default function UInput(props: { placeholder: string }) {
  const [inputValue, setInputValue] = useState('');
  const { setValue } = useContext(Context);
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setValue(inputValue);
  };
  return (
    <div className={classes.myInput_wrapper}>
      <input
        aria-label="searchPanel"
        className={classes.myInput}
        {...props}
        value={inputValue}
        onChange={inputHandler}
      />
      <div className={classes.myInput_close}></div>
    </div>
  );
}
