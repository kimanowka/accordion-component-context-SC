import React from "react";

interface Props {
  children: React.ReactNode;
}
export interface AccordeonContextProps {
  style: {
    header: {};
    wrapper: {};
    content: {};
    title: {};
  };
  main?: boolean;
  secondary?: boolean;
}
export const AccordeonContext = React.createContext<AccordeonContextProps>({
  style: {
    header: {},
    wrapper: {},
    content: {},
    title: {},
  },
  main: true,
  secondary: false,
});

export const AccordeonContextProvider = ({ children }: Props) => {
  const style = {
    header: {
      color: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "24px",
    },
    wrapper: {
      color: "black",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      height: "100px",
      backgroundColor: "#660708",
      color: "#161a1d",
      padding: "10px",
      marginBottom: "3px",
      alignItems: "center",
      width: "350px",
      justifyContent: "space-between",
      borderRadius: "10px",
    },
    title: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "24px",
    },
  };
  const main = false;
  const secondary = true;
  return (
    <AccordeonContext.Provider value={{ style, main, secondary }}>
      {children}
    </AccordeonContext.Provider>
  );
};
