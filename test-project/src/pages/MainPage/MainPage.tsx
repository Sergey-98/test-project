import React from 'react';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import Menu from 'components/Menu/Menu';
import classes from './MainPage.module.css';

export default function MainPage() {
  return (
    <div className={classes.main_page}>
      <Header />
      <Menu />
      <Main />
    </div>
  );
}
