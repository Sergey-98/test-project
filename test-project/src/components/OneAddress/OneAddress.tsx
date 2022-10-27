import React from 'react';
import classes from './OneAddress.module.css';
import { PropsAddress } from 'types/types';

export default function OneAddress(props: PropsAddress) {
  console.log(props);
  return <span className={classes.one_address_block}>{props.value}</span>;
}
