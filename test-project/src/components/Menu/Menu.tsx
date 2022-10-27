import React, { useContext } from 'react';
import NavLink from 'components/NavLink/NavLink';
import SettingsLinks from '../SettingsLinks/SettingsLinks';
import './Menu.css';
import { Context } from '../Context/Context';
import ic_main from '../../assets/svg/ic_main.svg';
import ic_search from '../../assets/svg/ic-search.svg';
import ic_tables from '../../assets/svg/ic_tables.svg';
import ic_tablet from '../../assets/svg/ic_tablet.svg';
import ic_maps from '../../assets/svg/ic_maps.svg';
import ic_viget from '../../assets/svg/ic_viget.svg';
import ic_settings from '../../assets/svg/ic_settings.svg';
import ic_exit from '../../assets/svg/ic_exit.svg';
import { NavLink as Link } from 'react-router-dom';

export default function Menu() {
  const { isBurger } = useContext(Context);
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
    <aside className={isBurger ? 'menu__block active' : 'menu__block'}>
      <h3 className="menu__title">Меню</h3>
      <nav className="menu__nav">
        <ul className="menu__list">
          {photos.map((elem: string, id: number): React.ReactNode => {
            return linksTitle[id] === 'Настройки' ? (
              <SettingsLinks src={elem} text={linksTitle[id]} key={id} />
            ) : linksTitle[id] === 'Главная' ? (
              <Link to="/" key={id}>
                <NavLink src={elem} text={linksTitle[id]} key={id} isNone={false} />
              </Link>
            ) : linksTitle[id] === 'Поиск адресов' ? (
              <Link to="/address" key={id}>
                <NavLink src={elem} text={linksTitle[id]} key={id} isNone={false} />
              </Link>
            ) : (
              <NavLink src={elem} text={linksTitle[id]} key={id} isNone={false} />
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
