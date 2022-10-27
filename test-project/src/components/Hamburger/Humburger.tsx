import React, { useState } from 'react';
import './Humburger.css';

export default function Humburger() {
  const [isBurger, setBurgerState] = useState(false);
  const changeButton = () => {
    if (!isBurger) {
      setBurgerState(true);
    } else {
      setBurgerState(false);
    }
  };
  return (
    <div className={isBurger ? 'b_hamburger is_active' : 'b_hamburger'} onClick={changeButton}>
      <span className="h_line line1"></span>
      <span className="h_line line2"></span>
      <span className="h_line line3"></span>
    </div>
  );
}
