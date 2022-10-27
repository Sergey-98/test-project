import React, {useState} from 'react';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import Menu from 'components/Menu/Menu';
import classes from './MainPage.module.css';
import { Context } from 'components/Context/Context';

export default function MainPage() {
  const [context, setContext] = useState(false);
  return (
    <Context.Provider value={[context, setContext]}>
      <div className={classes.main_page}>
        <Header />
        <Menu />
        <Main />
      </div>
    </Context.Provider>
    // <div className={classes.main_page}>
    //   <Header />
    //   <Menu />
    //   <Main />
    // </div>
  );
}
