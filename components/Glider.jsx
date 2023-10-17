import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

export default function Glider() {
  return (
    <section className="w-full flex justify-center pt-28 bg-gray-100">
      <Carousel className="mx-2 max-w-4xl h-96 rounded-xl">
        <img
          src={"/banner-gamer.png"}
          alt="..."
          className="h-full w-full object-cover"
        />
        <img
          src={"/tv.jpg"}
          alt="..."
          className="h-full w-full object-cover"
        />
        <img
          src={"/gamer.png"}
          alt="..."
          className="h-full w-full object-cover"
        />
        <img
          src={"/tv2.jpg"}
          alt="..."
          className="h-full w-full object-cover"
        />
      </Carousel>
    </section>
  );
}
