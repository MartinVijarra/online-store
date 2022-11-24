import { JewerlyProducts } from '../Components/Products';
import { useEffect, useState } from 'react';
import { Layout } from '../Components/Layout';
import { Link } from 'react-router-dom';
import "../Styles/ViewsStyle/Jewerly.css"

export function Jewerly() {

    const [jewerly, setJewerly] = useState(null)
    
    useEffect(() => {
        JewerlyProducts(setJewerly)
    }, [])

    return(
        <Layout>
            <div className='jewerly-container'>
                {jewerly == null ? <span className="loader"></span> : 
                    jewerly.map((productJewerly) => {
                        return(             
                            <div className="card" key={productJewerly.id}>
                                <div className="card2">
                                    <div className="card-container">
                                        <img src={productJewerly.image} className="img-product" alt="imagen"/>
                                        <h4 className="product-title">{productJewerly.title}</h4>
                                        <p className="product-info">{productJewerly.description}</p>
                                        <h5 className="product-price">Price: ${productJewerly.price}</h5>
                                        <Link to={`/itemdetail/${productJewerly.id}`}><button className="btn-buy">GET NOW</button></Link>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    )
                }
            </div>
        </Layout> 
)}