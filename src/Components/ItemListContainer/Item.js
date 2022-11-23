import { useState, useEffect } from "react"
import '../../Styles/Item.css'
import { allProducts } from "../Products"

export function Item() {

    useEffect(() => {
        allProducts(setCard)
    }, [])
    const [card, setCard] = useState(null)

    return(
    <>
        {card == null ? <span className="loader"></span> : 
        card.map((productCard) => {
        return(
            <div className="card" key={productCard.id}>
                <div className="card2">
                    <div className="card-container">
                        <img src={productCard.image} className="img-product" alt="imagen"/>
                        <h4 className="product-title">{productCard.title}</h4>
                        <p className="product-info">{productCard.description}</p>
                        <h5 className="product-price">Price: ${productCard.price}</h5>
                        <button className="btn-buy">GET NOW</button>
                    </div>
                </div>
            </div>
        )})}
    </> 
    )
}