'use client'

import useFetch from "@/components/useFetch"
import { useEffect, useState } from "react";

export default function Item(id) {
  const { state, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);
  const [ item, setItem ] = useState(null)

  useEffect(() => {
    setItem(state)
    console.log(item)
  })

  return (
    <div>
      {loading && <span className="loader absolute"></span>}
      {item?.map(itemDetail => {
        <div key={itemDetail.id}>
          <img src={itemDetail.image} alt="image" />
        </div>
      })}
    </div>
  )
}
