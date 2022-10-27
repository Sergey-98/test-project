import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/svg/ic_logo.svg';
import person from '../../assets/svg/ic_person.svg';
import Humburger from 'components/Hamburger/Humburger';

export default function Header() {
  return (
    <header className={classes.header__block}>
      <Humburger />
      <div className={classes.header__logo}>
        <img src={logo} alt="logo" className={classes.header__logo_img} />
        <span className={classes.header__logo_text}>Wrench CRM</span>
      </div>
      <div className={classes.header__personal_data}>
        <img src={person} alt="logo" className={classes.header__personal_data_img} />
        <span className={classes.header__personal_data_text}>Имя Фамилия</span>
      </div>
    </header>
  );
}
