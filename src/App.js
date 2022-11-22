import './App.css'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { Footer } from './Components/Footer';
import { Layout } from './Components/Layout';

export function App() {
    return (
        <Layout>
            <ItemListContainer />
            <Footer />
        </Layout>
    )
}
