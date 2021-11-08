import ReactDOM from "react-dom";
import { App } from "./App";
import { AccordeonContextProvider } from "./Context";

ReactDOM.render(
  <AccordeonContextProvider>
    <App />
  </AccordeonContextProvider>,
  document.getElementById("root")
);
