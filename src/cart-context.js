import {createContext} from "react";
const CartContext=createContext({
    tems:4,logger:()=>{}
    })
    const CartProvider=({children})>{
         return(
             <CartContext.Provider>
             {children}
             </CartContext.Provider>
         )
    }
    export {CartContext};
