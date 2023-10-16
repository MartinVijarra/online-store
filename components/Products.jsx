"use client";

import useFetch from "./useFetch";
import { useRouter } from "next/navigation";
import "@/Animations/loader.css";
import { ShoppingOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Products() {

  const { state, loading } = useFetch("https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326&limit=40")
  const results = state.results;
  const router = useRouter();

  return (
    <section className="w-full py-24 bg-gray-100">

      {/* Spinner de carga de datos */}
      {loading && (
        <div className="absolute w-full h-screen flex justify-center items-center" role="status">
          <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-orange-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
        </div>
      )}

      {/* Lista de productos y mapping de API */}
      <article className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {results?.map((product) => (
          <div className="w-64 h-full flex m-auto items-center bg-white rounded-xl hover:border-2" key={product.id}>
            <div className="w-full h-full py-8 flex flex-col justify-center">
              
              {/* Imagen de producto */}
              <img src={product.thumbnail} className="p-5 md:py-4 cursor-pointer" alt={product.title}/>

              {/* Título del producto */}
              <h4 className="w-full px-3 font-bold text-gray-800 truncate cursor-pointer">
                {product.title}
              </h4>

              {/* Precio original tachado*/}
              <p className="text-xs text-gray-500 line-through px-4">
                $ {product.original_price}
              </p>

              <div className="flex items-center justify-between">
                
                {/* Precio del producto */}
                <p className="px-4 text-lg font-bold text-orange-400">
                  $ {product.price}
                </p>

                {/* Ícono de comprar */}
                <button onClick={() => {router.push(`/itemdetailcontainer/${product.id}`)}} className="p-1 mx-4 w-9 flex justify-center rounded-full border hover:bg-orange-400 hover:text-white">
                  <ShoppingOutlined className="text-xl p-0 m-0" />
                </button>
                
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
