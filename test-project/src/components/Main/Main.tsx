import React from 'react';
import classes from './Main.module.css';
import UInput from 'components/UI/UInput/UInput';
import UButton from 'components/UI/UButton/UButton';

export default function Main() {
  return (
    <main className={classes.main__block}>
      <h2 className={classes.main__title}>Поиск адресов</h2>
      <h3 className={classes.main__subtitle}>Введите интересующий вас адрес</h3>
      <div className={classes.main__input_button_container}>
        <UInput placeholder="Введите интересующий вас адрес" />
        <UButton>Поиск</UButton>
      </div>
    </main>
  );
}
