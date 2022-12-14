import React, { useState } from 'react';
import classes from './SettingsLinks.module.css';
import { Props } from 'types/types';
import NavLink from 'components/NavLink/NavLink';
import ic_settings_profile from '../../assets/svg/ic_settings_profile.svg';
import ic_settings_finance from '../../assets/svg/ic_settings_finance.svg';
import ic_settings_after from '../../assets/svg/ic_settings_after.svg';

export default function SettingsLinks(props: Props) {
  const [isOpenSetting, setOpenSetting] = useState(true);
  const changeOpen = () => {
    if (isOpenSetting) {
      setOpenSetting(false);
    } else {
      setOpenSetting(true);
    }
  };
  const photos = [ic_settings_profile, ic_settings_finance];
  const linksTitle = ['Настройки профиля', 'Управление финансами'];
  return (
    <li className={classes.settings__setting_link}>
      <div className={classes.settings__setting_link} onClick={changeOpen}>
        <img src={props.src} alt="icon" className={classes.settings__setting_link_icon} />
        <span className={classes.settings__setting_link_text}>{props.text}</span>
        <img
          src={ic_settings_after}
          alt="settings more"
          className={
            isOpenSetting
              ? classes.settings__setting_link_subicon
              : classes.settings__setting_link_subicon_rotate
          }
        />
      </div>
      <ul className={classes.subsettings__list}>
        {photos.map((elem: string, id: number): React.ReactNode => {
          return <NavLink src={elem} text={linksTitle[id]} key={id} isNone={!isOpenSetting} />;
        })}
      </ul>
    </li>
  );
}
