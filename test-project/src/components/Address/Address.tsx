import React, { useContext, useState } from 'react';
import classes from './Address.module.css';
import UInput from 'components/UI/UInput/UInput';
import UButton from 'components/UI/UButton/UButton';
import ic_loop from '../../assets/svg/ic_loop.svg';
import { getData } from 'API/getService';
import { Context } from 'components/Context/Context';
import { PropsAddress } from 'types/types';
import OneAddress from 'components/OneAddress/OneAddress';

export default function Address() {
  const { value } = useContext(Context);
  const [data, setData] = useState<PropsAddress[]>();
  const changeSearchValue = async () => {
    const data = await getData(value);
    setData(data.suggestions);
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
      <section className={classes.main_block__address_block}>
        <h2 className={classes.main_block__address_block__title}>Адреса</h2>
        {data?.map((elem: PropsAddress, id: number): React.ReactNode => {
          return <OneAddress value={elem.value} key={id} />;
        })}
      </section>
    </main>
  );
}
