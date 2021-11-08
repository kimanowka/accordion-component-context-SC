import { useContext } from "react";
import styled, { css } from "styled-components";
import { AccordeonContext } from "../Context";
interface ButtonProps {
  children: React.ReactNode;
}

export const ButtonEl = styled.button<{ main?: boolean; secondary?: boolean }>`
  ${(props) =>
    props.main &&
    css`
      color: red;
      border: none;
      padding: 10px;
      border-radius: 3px;
      cursor: pointer;
    `}

  ${(props) =>
    props.secondary &&
    css`
      color: black;
      padding: 10px;
      border-radius: 3px;
      cursor: pointer;
      border: 3px solid black;
    `}
`;

export const Button = ({ children }: ButtonProps) => {
  const { main, secondary } = useContext(AccordeonContext);
  return (
    <ButtonEl main={main} secondary={secondary}>
      {children}
    </ButtonEl>
  );
};
