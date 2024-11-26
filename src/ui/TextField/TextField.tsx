import { FC, InputHTMLAttributes } from "react";
import classes from "./TextField.module.scss";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export const TextField: FC<TextFieldProps> = ({
  placeholder,
  type = "text",
  ...rest
}) => {
  return (
    <input
      type={type}
      {...rest}
      placeholder={placeholder}
      className={classes.textField}
    />
  );
};
