import { useState, useEffect } from "react"
import '../StyleComponents/Item.css'
import { allProducts } from "./Products"

export function Item() {

    useEffect(() => {
        allProducts(setCard)
    }, [])
    const [card, setCard] = useState(null)

    console.log(card)

    return(
        <div className="card">
            <div className="card2">
            {/* <img src={card.image} className="img-product" alt="imagen"/> */}
            </div>
        </div>
    )
}