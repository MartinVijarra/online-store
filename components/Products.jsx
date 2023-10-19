"use client";

import useFetch from "./useFetch";
import "@/Animations/loader.css";
import { ShoppingOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useMemo } from "react";

export default function Products() {
  const { state } = useFetch(
    "https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326&limit=12"
  );
  const results = useMemo(() => state.results, [state.results]);

  return (
    <section className="w-full py-20 bg-gray-100">

      {/* Lista de productos y mapping de API */}
      <article className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {results?.map((product) => (
          <div className="w-64 h-full flex m-auto items-center bg-white rounded-xl border-2" key={product.id}>
            <div className="w-full h-full py-2 flex flex-col justify-center">
              {/* Imagen de producto */}
              <img src={product.thumbnail} className="p-5 md:py-4 cursor-pointer" alt={product.title}/>

              {/* Título del producto */}
              <h4 className="w-full px-3 font-bold text-gray-800 truncate cursor-pointer">
                {product.title}
              </h4>

              <div className="flex flex-col">
                {/* Precio original tachado*/}
                <p className="mx-2 text-xs text-gray-500 line-through px-4">
                  {product.original_price}
                </p>

                {/* Precio del producto */}
                <p className="mx-4 mb-2 text-lg font-bold text-orange-400">
                  ${product.price}
                </p>
              </div>

                {/* Ícono de comprar */}
                <Link href={`/itemdetailcontainer/${product.id}`} className="w-full flex justify-center text-white">
                  <button className="w-full mx-2 py-1 bg-gradient-to-r from-orange-400 to-deep-orange-300 hover:bg-gradient-to-l rounded">
                    COMPRAR AHORA <ShoppingOutlined className="text-xl" />
                  </button>
                </Link>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
