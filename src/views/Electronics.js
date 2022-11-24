import { ElectronicsProducts } from '../Components/Products';
import { useEffect, useState } from 'react';
import { Layout } from '../Components/Layout';
import "../Styles/ViewsStyle/Electronics.css"

export function Electronics() {

    const [electronics, setElectronics] = useState(null)
    
    useEffect(() => {
      ElectronicsProducts(setElectronics)
    }, [])

    return(
        <Layout>
          <div className='electronics-container'>
            {electronics == null ? <span className="loader"></span> : 
              electronics.map((productElectronics) => {
                return(             
                    <div className="card" key={productElectronics.id}>
                        <div className="card2">
                            <div className="card-container">
                              <img src={productElectronics.image} className="img-product" alt="imagen"/>
                              <h4 className="product-title">{productElectronics.title}</h4>
                              <p className="product-info">{productElectronics.description}</p>
                              <h5 className="product-price">Price: ${productElectronics.price}</h5>
                              <button className="btn-buy">GET NOW</button>
                            </div>
                        </div>
                    </div>
                  )
              })
            }
          </div>
        </Layout> 
)}
