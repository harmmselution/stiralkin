import { ButtonHTMLAttributes, FC, memo, ReactNode } from "react";
import classes from "./Button.module.scss";
import classNames from "classnames";

type variant = "sm" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: variant;
  animated: boolean;
}

export const Button: FC<ButtonProps> = memo(
  ({ children, variant, animated, className, ...rest }) => {
    return (
      <button
        className={classNames(
          classes.button,
          {
            [classes[variant]]: variant,
            [classes.animated]: animated,
          },
          className,
        )}
        {...rest}
      >
        {children}
        <span className={classes.btnFlashWrapper}>
          <span className={classes.btnFlash}></span>
        </span>
      </button>
    );
  },
);
