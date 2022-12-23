import { createContext } from "react";
import '../Styles/CartWidget.css';
import { Layout } from "../Components/Layout";

export const CartContext = createContext([]) 

export function CartProvider(props) {

    const value = {}
    return(
        <Layout>
            <CartContext.Provider value={value} {...props}/>
            {console.log(CartContext.Provider)}
        </Layout>
    )
}