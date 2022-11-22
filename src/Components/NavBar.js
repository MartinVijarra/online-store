import { Carrito } from "./CartWidget"
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
                <li className="btn-nav">Man</li>
                <li className="btn-nav">Woman</li>
                <li className="btn-nav">Jewerly</li>
                <li className="btn-nav">Electronics</li>
              </ul>
          </div>

          <div className="cart-container">
            <button className="cart-btn"> {<Carrito />} </button>
          </div>
        </nav>
      </header> 
    );
}
