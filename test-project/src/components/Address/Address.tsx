import React, { useState } from 'react';
import classes from './Address.module.css';
import UInput from 'components/UI/UInput/UInput';
import UButton from 'components/UI/UButton/UButton';
import ic_loop from '../../assets/svg/ic_loop.svg';
import { getData } from 'API/getService';

export default function Address() {
  const [searchString, setSearchString] = useState('');
  const changeSearchValue = async () => {
    const data = await getData('Саратов');
    console.log(data);
    // setSearchString(Search);
  };
  return (
    <main className={classes.main__block}>
      <h2 className={classes.main__title}>Поиск адресов</h2>
      <h3 className={classes.main__subtitle}>Введите интересующий вас адрес</h3>
      <div className={classes.main__input_button_container}>
        <UInput placeholder="Введите интересующий вас адрес" />
        <UButton className={classes.main__btn} onClick={changeSearchValue}>
          <img src={ic_loop} alt="seach-loop=icon" className={classes.main__seach_icon}></img>
          <p>Поиск</p>
        </UButton>
      </div>
    </main>
  );
}
