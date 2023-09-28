"use client";

import useFetch from "./useFetch";
import "@/Animations/loader.css";
import Link from "next/link";

export default function Products() {
  const { state, loading } = useFetch("https://fakestoreapi.com/products");

  return (
    <section className="w-full py-5 bg-gray-100">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {loading && <span className="loader absolute"></span>}
        {state?.map((product) => (
          <Link href={"/ItemDetail"} className="w-64 h-full flex m-auto items-center bg-white rounded-xl hover:shadow-xl" key={product.id}>
            <div className="w-full h-full py-8 flex flex-col justify-center">
              <img
                src={product.image}
                className="h-72 w-full p-5 md:py-4 cursor-pointer"
                alt="image"
              />
              <h4 className="w-full px-3 font-bold truncate cursor-pointer">
                {product.title}
              </h4>
              <p className="truncate text-sm text-slate-500 px-3 italic">
                {product.description}
              </p>
              <p className="px-4 font-bold text-orange-400">${product.price}</p>
              <button className="p-2 m-3 cursor-pointer bg-orange-500 rounded-xl text-white tracking-widest font-bold text-sm hover:bg-orange-400">
                COMPRAR AHORA
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
