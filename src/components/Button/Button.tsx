import { PropsWithChildren } from "react";

interface ButtonParamertsStructure {
  className?: string;
  onClick?: () => void | Promise<void>;
}

const Button = ({
  children,
  className,
  onClick,
}: PropsWithChildren<ButtonParamertsStructure>) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

export default Button;
