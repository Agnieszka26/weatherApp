import {FunctionComponent} from "react";

import cn from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  backgroundColor:"red" | "green" | "thistle";
}

const Button: FunctionComponent<ButtonProps> = ({
  text,

  backgroundColor,
}) => {
  return (
    <>
      <button className={cn(styles.button, styles[`hasColor-${backgroundColor}`])}>{text}</button>
    </>
  );
};

export default Button;
