import { useContext } from "react";
import { AccordeonContext } from "../Context";
interface HeaderProps {
  children: React.ReactNode;
  renderElement: () => JSX.Element;
}

export const Header = ({ children, renderElement }: HeaderProps) => {
  const { style } = useContext(AccordeonContext);

  return (
    <div style={style.header}>
      {renderElement()}
      {children}
    </div>
  );
};
