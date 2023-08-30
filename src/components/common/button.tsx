import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = "purple", ...props }) => {
  const defaultClasses =
    "btn py-2 px-4 rounded-full bg-purple hover:bg-opacity-75 focus:outline-none active:scale-95";

  const classes = `${defaultClasses} ${variant}`;

  return <button className={classes} {...props} />;
};

export default Button;
