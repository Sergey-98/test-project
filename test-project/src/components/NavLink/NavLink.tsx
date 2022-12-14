import React from 'react';
import classes from './NavLink.module.css';
import { Props } from 'types/types';

export default function NavLink(props: Props) {
  return (
    <li className={!props.isNone ? classes.nav__nav_link : classes.none}>
      <img src={props.src} alt="icon" className={classes.nav__nav_link_icon} />
      <span className={classes.nav__nav_link_text}>{props.text}</span>
    </li>
  );
}
