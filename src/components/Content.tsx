import { useState, useContext } from "react";
import { AccordeonContext } from "../Context";

interface ContentProps {
  children: React.ReactNode;
  renderElement: () => JSX.Element;
}

export const Content = ({ children, renderElement }: ContentProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleChangeVisible = () => {
    setVisible((prev) => !prev);
  };
  const { style } = useContext(AccordeonContext);

  return (
    <div style={style.content}>
      <div style={style.title}>
        {renderElement()}
        <button type="button" onClick={handleChangeVisible}>
          {visible ? "-" : "+"}
        </button>
      </div>
      <div>{visible && children}</div>
    </div>
  );
};
