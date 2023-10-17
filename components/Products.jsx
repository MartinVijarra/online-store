"use client";

import useFetch from "./useFetch";
import "@/Animations/loader.css";
import { ShoppingOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Products() {
  const { state } = useFetch(
    "https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326&limit=40"
  );
  const results = state.results;

  return (
    <section className="w-full py-24 bg-gray-100">

      {/* Lista de productos y mapping de API */}
      <article className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {results?.map((product) => (
          <div className="w-64 h-full flex m-auto items-center bg-white rounded-xl border-2" key={product.id}>
            <div className="w-full h-full py-8 flex flex-col justify-center">
              {/* Imagen de producto */}
              <img src={product.thumbnail} className="p-5 md:py-4 cursor-pointer" alt={product.title}/>

              {/* Título del producto */}
              <h4 className="w-full px-3 font-bold text-gray-800 truncate cursor-pointer">
                {product.title}
              </h4>

              {/* Precio original tachado*/}
              <p className="text-xs text-gray-500 line-through px-4">
                {product.original_price}
              </p>

              <div className="flex items-center justify-between">
                {/* Precio del producto */}
                <p className="px-4 text-lg font-bold text-orange-400">
                  ${product.price}
                </p>

                {/* Ícono de comprar */}
                <Link href={`/itemdetailcontainer/${product.id}`} className="mx-4 w-9 flex justify-center border rounded-full text-orange-400 hover:bg-orange-400 hover:text-white">
                  <ShoppingOutlined className="text-xl p-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
