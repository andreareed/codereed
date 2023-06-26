import React from "react";
import "./Button.scss";

export type Props = {
  children?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      <span className="button__children">{children}</span>
    </button>
  );
};

export default Button;
