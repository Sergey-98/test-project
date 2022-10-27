import React, { Dispatch, SetStateAction } from 'react';
type Props = {
  isBurger: boolean;
  setIsBurger: Dispatch<SetStateAction<boolean>>;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};
export const Context = React.createContext<Props>({
  isBurger: false,
  setIsBurger: () => {},
  value: '',
  setValue: () => {},
});
