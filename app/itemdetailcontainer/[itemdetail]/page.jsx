"use client";

import useFetch from "@/components/useFetch";
import { useEffect, useState } from "react";

export default function ItemDetail({ params }) {
  const { state, loading } = useFetch(`https://api.mercadolibre.com/items/${params.itemdetail}`)
  const [description, setDescription] = useState("");
  const [counter, setCounter] = useState(0);
  const stock = state.initial_quantity

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${params.itemdetail}/description`)
      .then((res) => res.json())
      .then((res) => setDescription(res));
  }, []);

  const sumar = () => {
    setCounter(counter + 1);
  }

  const restar = () => {
    setCounter(counter - 1);
  }

  return (
    <div className="py-24 flex justify-center items-center">
      {/* Spinner de carga de datos */}
      {loading && (
        <div
          className="absolute h-screen flex justify-center items-center"
          role="status"
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-orange-400"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}

      <section className="w-full">
        <article className="flex lg:w-4/5 m-auto flex-col md:flex-row bg-gray-100 rounded-lg p-4 justify-center items-center" key={state.id}>
          <img className="w-64 h-64 mx-4 my-6 lg:my-0 lg:mx-10" src={state.thumbnail} alt={state.title}/>

          <div className="flex flex-col w-60 md:w-1/2 mx-4 lg:mx-10 gap-4">
            <h2 className="font-bold uppercase text-xl ">{state.title}</h2>
            <p className="text-orange-400 font-bold text-xl text-center md:text-left">
              $ {state.price}
            </p>
            <p className="text-gray-700 text-sm text-center md:text-left">
              {description.plain_text}
            </p>

            {/* Control de stock y contador de items */}

            <div>
              <p className="text-gray-700 text-sm">stock: {stock}</p>
              <div className="flex justify-center items-center flex-col md:flex-row">
                <div className="flex items-center my-4 md:mx-6">
                  <button className="px-4 py-1 font-bold text-xl text-orange-400 border border-orange-400 rounded disabled:text-gray-500 disabled:border-gray-500" onClick={restar} disabled={counter <= 0}> - </button>
                  <p className="font-bold px-8 text-xl">{counter}</p>
                  <button className="px-4 py-1 font-bold text-xl text-orange-400 border border-orange-400 rounded disabled:text-gray-500 disabled:border-gray-500" onClick={sumar} disabled={counter === stock}> + </button>
                </div>
                <button className="px-4 py-2 rounded bg-orange-400 hover:bg-orange-300 text-white">COMPRAR AHORA</button>
              </div>
            </div>
 
          </div>
        </article>
      </section>
    </div>
  );
}
