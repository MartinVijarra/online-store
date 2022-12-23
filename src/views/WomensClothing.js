import { useState, useEffect } from "react"
import { Layout } from "../Components/Layout"
import { Woman } from "../Components/Products"
import { Link } from 'react-router-dom';

export function WomanClothing() {
  useEffect(() => {
    Woman(setWomanCloth)
  }, [])
  const [WomanCloth, setWomanCloth] = useState(null)

  return(
    <Layout>
      <div className='jewerly-container'>
        {WomanCloth == null ? <span className="loader"></span> : 
          WomanCloth.map((productWoman) => {
            return(             
              <div className="card" key={productWoman.id}>
                 <div className="card2">
                    <div className="card-container">
                      <img src={productWoman.image} className="img-product" alt="imagen"/>
                      <h4 className="product-title">{productWoman.title}</h4>
                      <p className="product-info">{productWoman.description}</p>
                      <h5 className="product-price">Price: ${productWoman.price}</h5>
                      <Link to={`/itemdetail/${productWoman.id}`}><button className="btn-buy">GET NOW</button></Link>
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
