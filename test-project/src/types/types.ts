export type Props = {
  src?: string;
  text?: string;
  isNone?: boolean;
};
export type PropsButton = {
  children?: React.ReactNode;
  placeholder?: React.ReactNode;
  onClick?: () => void;
  className: string;
};

export type PropsAddress = {
  value?: string;
};

export type Address = {
  suggestions: PropsAddress[];
};
