import { useState, useEffect } from "react"
import '../../Styles/Item.css'
import { allProducts } from "../Products"

export function Item() {

    useEffect(() => {
        allProducts(setCard)
    }, [])
    const [card, setCard] = useState(null)

    console.log(card)

    return(
    <>
        {card == null ? <span className="loader"></span> :                
            <div className="card">
                <div className="card2">
                    <img src={card.image} className="img-product" alt="imagen"/>
                    <h4>{card.title}</h4>
                </div>
            </div>
        }
    </> 
    )
}