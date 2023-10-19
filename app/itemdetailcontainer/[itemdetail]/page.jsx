"use client";

import useFetch from "@/components/useFetch";
import { useEffect, useState } from "react";

export default function ItemDetail({ params }) {
  const { state } = useFetch(`https://api.mercadolibre.com/items/${params.itemdetail}`);
  const [description, setDescription] = useState("");
  const [counter, setCounter] = useState(0);
  const stock = state.initial_quantity;

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${params.itemdetail}/description`)
      .then((res) => res.json())
      .then((res) => setDescription(res));
  }, []);

  const add = () => {
    setCounter(counter + 1);
  };

  const subtract = () => {
    setCounter(counter - 1);
  };

  return (
    <section className="py-24 flex justify-center items-center bg-gray-200">
      <article className="flex sm:w-4/5 m-auto flex-col lg:flex-row rounded-lg p-4 justify-center items-center bg-white" key={state.id}>
        <div className="flex flex-col items-center w-64 md:w-1/2">
          {/* Titulo */}
          <h2 className="font-medium text-lg text-slate-900 lg:hidden">{state.title ? state.title : "Cargando..."}</h2>

          {/* Imagen */}
          <img className="w-64 h-64 xl:w-80 xl:h-80 my-4 lg:my-0 lg:mx-10" src={state.thumbnail ? state.thumbnail : "Cargando..."} alt={state.title ? state.title : "Cargando..."}/>
        </div>

        <div className="flex flex-col w-60 md:w-1/2 mx-4 lg:mx-10 gap-4">
          {/* Titulo 2 */}
          <h2 className="font-medium text-lg hidden lg:inline-block">{state.title ? state.title : "Cargando..."}</h2>

          {/* Precio */}
          <p className="text-orange-400 font-bold text-xl text-center md:text-left">$ {state.price ? state.price : "Cargando..."}</p>

          {/* Control de stock y contador de items */}

          <div>
            <p className="text-gray-700 text-sm">Stock: {stock ? stock : "Cargando..."}</p>

            <div className="flex flex-col my-4">
              <div className="my-1 w-full py-1 flex justify-between items-center border-2 rounded">
                <button className="px-4 font-bold text-xl text-orange-400 disabled:text-gray-500" onClick={subtract} disabled={counter <= 0}>-</button>
                <p className="font-bold px-8 text-xl text-slate-800">{counter}</p>
                <button className="px-4 font-bold text-xl text-orange-400 disabled:text-gray-500" onClick={add} disabled={counter === stock}>+</button>
              </div>
              <div className="flex flex-col xl:flex-row">
                <button className="my-1 w-full text-white lg:mx-1 px-4 py-2 rounded bg-orange-400 hover:bg-orange-300 hover:text-white">Comprar Ahora</button>
                <button className="my-1 w-full text-white lg:mx-1 px-4 py-2 rounded bg-orange-400 hover:bg-orange-300 hover:text-white">Agregar al carrito</button>
              </div>
            </div>
          </div>

          {/* Descripcion */}
          <p className="text-gray-700 text-sm text-center lg:text-left">{description.plain_text ? description.plain_text : "Cargando..."}</p>

        </div>
      </article>
    </section>
  );
}
