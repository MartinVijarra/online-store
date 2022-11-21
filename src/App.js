import './App.css'
import { NavBar } from './Components/NavBar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { Footer } from './Components/Footer';
// import { Routes } from 'react-router-dom';

export function App() {
    return (
        <>
            <NavBar />
            <ItemListContainer />
            <Footer />
        </>
    )
}
