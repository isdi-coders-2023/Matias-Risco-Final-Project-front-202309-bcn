import { PropsWithChildren } from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonParamertsStructure {
  className?: string;
  onClick?: () => void | Promise<void>;
  disable?: boolean | undefined;
}

const Button = ({
  children,
  className,
  onClick,
  disable,
}: PropsWithChildren<ButtonParamertsStructure>) => (
  <ButtonStyled
    className={`button ${className}`}
    onClick={onClick}
    disabled={disable}
  >
    {children}
  </ButtonStyled>
);

export default Button;
