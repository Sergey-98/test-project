import React, { Dispatch, SetStateAction } from 'react';
type Props = { isBurger: boolean; setIsBurger: Dispatch<SetStateAction<boolean>> };
export const Context = React.createContext<Props>({
  isBurger: false,
  setIsBurger: () => {},
});
