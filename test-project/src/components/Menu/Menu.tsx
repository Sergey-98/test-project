import React from 'react';
import NavLink from 'components/NavLink/NavLink';
import SettingsLinks from '../SettingsLinks/SettingsLinks';
import classes from './Menu.module.css';
import ic_main from '../../assets/svg/ic_main.svg';
import ic_search from '../../assets/svg/ic-search.svg';
import ic_tables from '../../assets/svg/ic_tables.svg';
import ic_tablet from '../../assets/svg/ic_tablet.svg';
import ic_maps from '../../assets/svg/ic_maps.svg';
import ic_viget from '../../assets/svg/ic_viget.svg';
import ic_settings from '../../assets/svg/ic_settings.svg';
import ic_exit from '../../assets/svg/ic_exit.svg';

export default function Menu() {
  const photos = [
    ic_main,
    ic_search,
    ic_tables,
    ic_tablet,
    ic_maps,
    ic_viget,
    ic_settings,
    ic_exit,
  ];
  const linksTitle = [
    'Главная',
    'Поиск адресов',
    'Таблицы',
    'Календарь',
    'Карты',
    'Виджеты',
    'Настройки',
    'Выход',
  ];

  return (
    <aside className={classes.menu__block}>
      <h3 className={classes.menu__title}>Меню</h3>
      <nav className={classes.menu__nav}>
        <ul className={classes.menu__list}>
          {photos.map((elem: string, id: number): React.ReactNode => {
            return linksTitle[id] === 'Настройки' ? (
              <SettingsLinks src={elem} text={linksTitle[id]} key={id} />
            ) : (
              <NavLink src={elem} text={linksTitle[id]} key={id} />
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
