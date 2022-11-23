import './App.css'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
// import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { Footer } from './Components/Footer';
import { Layout } from './Components/Layout';

export function App() {
    return (
        <Layout>
            <ItemListContainer />
            {/* <ItemDetailContainer /> */}
            <Footer />
        </Layout>
    )
}
