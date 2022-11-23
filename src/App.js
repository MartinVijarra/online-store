import './App.css'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
// import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { Layout } from './Components/Layout';

export function App() {
    return (
        <Layout>
            <ItemListContainer />
            {/* <ItemDetailContainer /> */}
        </Layout>
    )
}
