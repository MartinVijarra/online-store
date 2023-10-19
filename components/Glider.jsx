import { Carousel, Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function Glider() {
  return (
    <section className="w-full flex justify-center bg-gray-100">
      <Carousel className="mx-2 max-w-6xl h-[700px]">
        <div className="relative h-full w-full">

          {/* Imagen 1 */}
          <img
            src={"/banner-tv.jpg"}
            alt="..."
            className="h-full w-full object-cover"
          />

          {/* Contenido del texto */}
          <div className="absolute inset-0 flex justify-start h-full w-full bg-gradient-to-t md:bg-gradient-to-l from-black/75 to-transparent">
            <div className="w-full h-full px-4 pb-10 md:pb-0 text-center flex flex-col justify-end md:mx-8 md:px-6 lg:px-8 md:justify-center md:right-0 md:text-left md:w-2/4">
              <Typography variant="h3" color="white" className="text-3xl py-2">
                Neo QLED | OLED | GAMING TV
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 text-sm">
              Todos jugamos. A nuestro modo. Por nuestras propias razones. Y eso es lo que hace que esta comunidad que construimos juntos sea tan increíble. Más que niveles en los juegos, hay niveles para todos nosotros. Y depende de nosotros adónde vayamos después.
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">

          {/* Imagen 2 */}
          <img
            src={"/tv3.jpg"}
            alt="..."
            className="h-full w-full object-cover"
          />

          {/* Contenido del texto */}
          <div className="absolute inset-0 flex justify-end h-full w-full bg-gradient-to-t md:bg-gradient-to-l from-black/75 to-transparent">
            <div className="w-full h-full px-4 pb-10 md:pb-0 text-center flex flex-col justify-end md:mx-8 md:px-6 lg:px-10 md:justify-center md:right-0 md:text-right md:w-2/4">
              <Typography variant="h3" color="white" className="text-3xl py-2">
                Neo QLED 8K 85'' | 65''
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 text-sm">
              Hasta 12 cuotas sin interés, hasta 54% de ahorro con Plan Canje y barra de sonido de $529.999 de regalo. Beneficios de lanzamiento hasta el 5 de noviembre.
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">

          {/* Imagen 3 */}
          <img
            src={"/dell.jpg"}
            alt="..."
            className="h-full w-full object-cover"
          />

          {/* Contenido del texto */}
          <div className="absolute inset-0 flex justify-center h-full w-full bg-gradient-to-t md:bg-gradient-to-b from-black/75 to-transparent">
            <div className="w-full h-full px-4 pb-10 md:pt-5 text-center flex flex-col justify-end md:justify-start md:w-2/4">
              <Typography variant="h3" color="white" className="text-3xl py-2">
                Minimiza la preocupación. Maximizar el trabajo.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 text-sm">
                Explore la amplia gama de computadoras de Dell para impulsar a su fuerza laboral.
              </Typography>
            </div>
          </div>
        </div> 
      </Carousel>
    </section>
  );
}
