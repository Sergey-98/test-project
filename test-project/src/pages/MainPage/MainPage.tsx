import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header/Header';
import Menu from 'components/Menu/Menu';
import AppRouter from 'components/AppRouter';
import classes from './MainPage.module.css';
import { Context } from 'components/Context/Context';

export default function MainPage() {
  const [isBurger, setIsBurger] = useState(false);
  return (
    <Context.Provider value={{ isBurger, setIsBurger }}>
      <div className={classes.main_page}>
        <Header />
        <BrowserRouter>
          <Menu />
          <AppRouter />
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}
