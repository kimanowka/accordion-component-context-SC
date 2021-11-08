import styled, { css } from "styled-components";
interface FooterProps {
  children: React.ReactNode;
  main: boolean;
}

const FooterWrapper = styled.div<{ main: boolean }>`
  background-color: "black";
`;

export const Footer = ({ children, main }: FooterProps) => {
  return <FooterWrapper main>{children}</FooterWrapper>;
};
