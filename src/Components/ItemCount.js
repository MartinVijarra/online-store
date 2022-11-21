import { useState } from "react"
import '../StyleComponents/ItemCount.css'

export function ItemCount() {
    const [count, setCount] = useState(0)
    
    const stock = 5
    const incrementar = () => setCount(count + 1)
    const restar = () => setCount(count - 1)

    return (
        <div className="count-wrap">
            <div className="counter">     
                <button onClick={restar} className="operadores" disabled={count <= 0}>-</button>
                <h5>{count}</h5>
                <button onClick={incrementar} className="operadores" disabled={count >= stock}>+</button>
            </div>
            
            <button className="btn-agregar" disabled={count <= 0} >ADD TO CART 🛒</button>
        </div>
    )
}