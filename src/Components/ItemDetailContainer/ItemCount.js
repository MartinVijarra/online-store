import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import '../../Styles/ItemCount.css'
import { productDetail } from "../Products"

export function ItemCount() {

    const params = useParams()
    const [stock, setStock] = useState(null)
    const [counter, setCounter] = useState(0)

    const incrementar = () => setCounter(counter + 1)
    const restar = () => setCounter(counter - 1)

    useEffect(() => {
        productDetail(params.id, setStock)
    }, [])

    return (
        stock == null ? "0" : 
        <div className="count-wrap" key={stock.id}>
            <div className="counter">     
                <button  className="operadores" onClick={restar} disabled={counter <= 0}>-</button>
                <h5>{counter}</h5>
                <button className="operadores" onClick={incrementar} disabled={counter === stock.rating.count}>+</button>
            </div>
            
            <button className="btn-agregar" disabled={counter <= 0} >ADD TO CART 🛒</button>
        </div>
    )
}