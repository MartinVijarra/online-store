import { useState, useEffect } from "react"
import { allProducts } from "../Components/Products"

export function MensClothing() {
  useEffect(() => {
    allProducts(setMensCloth)
  }, [])
  const [MensCloth, setMensCloth] = useState(null)

}
