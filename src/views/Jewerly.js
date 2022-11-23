import { useEffect, useState } from 'react';
import { Jewerly } from '../Components/Products';

export function JewerlyProducts() {

    const [jewelery, setJewerly] = useState(null)
    
    useEffect(() => {
        Jewerly(setJewerly)
    }, [])

    return(
        <>
        {jewelery == null ? <span className="loader"></span> : 
            jewelery.map((productJewetly) => {
                return(
                    <div className="card" key={productJewetly.id}>
                        <div className="card2">
                            <div className="card-container">
                                <img src={productJewetly.image} className="img-product" alt="imagen"/>
                                <h4 className="product-title">{productJewetly.title}</h4>
                                <p className="product-info">{productJewetly.description}</p>
                                <h5 className="product-price">Price: ${productJewetly.price}</h5>
                                <button className="btn-buy">GET NOW</button>
                            </div>
                        </div>
                    </div>
                )
        }
        )}
        </> 
)}