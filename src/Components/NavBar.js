import { Link } from "react-router-dom"
import { ShoppingCartOutlined } from '@ant-design/icons';
import '../Styles/NavBar.css';
import '../Styles/CartWidget.css';

export function NavBar() {
    return (
      <header className="nav-container">
        <nav>
          <div className="border-box">
            <Link className="link" to="/"><h1 className="logo"> OnlineStore </h1></Link>
          </div>

          <div className="nav-list">
              <ul>
                <Link to="/men'sclothing" className="btn-nav">Man</Link>
                <Link to="/women'sclothing" className="btn-nav">Woman</Link>
                <Link to="/jewerly" className="btn-nav">Jewerely</Link>
                <Link to="/electronics" className="btn-nav">Electronics</Link>
              </ul>
          </div>

          <div className="cart-container">
            <Link to="/cart"><button className="cart-btn"> {<ShoppingCartOutlined className='cart'/>} </button></Link>
          </div>
        </nav>
      </header> 
    );
}
