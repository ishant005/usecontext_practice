import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {CartContext} from "./cart-context";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
      <CartContext.Provider
      value={{items:6,logger:()=>console.log("logging....")}}>
          <App />
     </CartContext.Provider>
   
  </StrictMode>,
  rootElement
);
