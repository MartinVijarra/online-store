import './App.css'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { Layout } from './Components/Layout';
import { CartContext } from './Context/cartContext';

export function App() {
    return (
        <CartContext.Provider value={[]}>
            <Layout>
                <ItemListContainer />
            </Layout>
        </CartContext.Provider>
    )
}
