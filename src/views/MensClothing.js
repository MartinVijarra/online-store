import { useState, useEffect } from "react"
import { Layout } from "../Components/Layout"
import { Men } from "../Components/Products"
import { Link } from 'react-router-dom';

export function MensClothing() {
  useEffect(() => {
    Men(setMensCloth)
  }, [])
  const [MensCloth, setMensCloth] = useState(null)
  console.log(MensCloth)

  return(
    <Layout>
      <div className='jewerly-container'>
        {MensCloth == null ? <span className="loader"></span> : 
          MensCloth.map((productMen) => {
            return(             
              <div className="card" key={productMen.id}>
                 <div className="card2">
                    <div className="card-container">
                      <img src={productMen.image} className="img-product" alt="imagen"/>
                      <h4 className="product-title">{productMen.title}</h4>
                      <p className="product-info">{productMen.description}</p>
                      <h5 className="product-price">Price: ${productMen.price}</h5>
                      <Link to={`/itemdetail/${productMen.id}`}><button className="btn-buy">GET NOW</button></Link>
                    </div>
                  </div>
              </div>
              )
          })
      }
      </div>
    </Layout>
  )
}
