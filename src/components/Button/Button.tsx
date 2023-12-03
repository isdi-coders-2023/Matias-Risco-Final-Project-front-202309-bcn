import { PropsWithChildren } from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonParamertsStructure {
  className?: string;
  onClick?: () => void | Promise<void>;
}

const Button = ({
  children,
  className,
  onClick,
}: PropsWithChildren<ButtonParamertsStructure>) => (
  <ButtonStyled className={`button ${className}`} onClick={onClick}>
    {children}
  </ButtonStyled>
);

export default Button;
