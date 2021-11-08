import { useContext } from "react";
import { AccordeonContext } from "../Context";
import { Button } from "./Button";
import { Header } from "./Header";
import { Content } from "./Content";
export const Accordeon = () => {
  const { style } = useContext(AccordeonContext);
  return (
    <div style={style.wrapper}>
      <Header
        renderElement={() => <Button>button like material ui button</Button>}
      >
        <h1>Header of accordeon</h1>
      </Header>
      <Content renderElement={() => <span>Do you want see answer?</span>}>
        some text for first card
      </Content>
      <Content renderElement={() => <span>Do you want see answer?</span>}>
        some text for second card
      </Content>
      <Content renderElement={() => <span>Do you want see answer?</span>}>
        some text for third card
      </Content>
    </div>
  );
};
