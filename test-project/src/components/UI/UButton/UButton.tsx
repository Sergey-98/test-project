import React from 'react';
import classes from './UButton.module.css';
import { PropsButton } from 'types/types';

export default function UButton(props: PropsButton) {
  return <button className={[classes.myBtn, props.className].join(' ')}>{props.children}</button>;
}
