import { Carrito } from "./CartWidget"
import { Link } from "react-router-dom"
import '../Styles/NavBar.css';

export function NavBar() {
    return (
      <header className="nav-container">
        <nav>
          <div className="border-box">
            <h1 className="logo"> OnlineStore </h1>
          </div>

          <div className="nav-list">
              <ul>
                <Link to="/" className="btn-nav">Man</Link>
                <Link to="/" className="btn-nav">Woman</Link>
                <Link to="/" className="btn-nav">Jewerly</Link>
                <Link to="/" className="btn-nav">Electronics</Link>
              </ul>
          </div>

          <div className="cart-container">
            <button className="cart-btn"> {<Carrito />} </button>
          </div>
        </nav>
      </header> 
    );
}
