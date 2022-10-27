import React, { SetStateAction } from "react";
type Props = [
    context: boolean,
    setContext?: SetStateAction<boolean>
]
export const Context = React.createContext<Partial<Props | never[]>>([]);