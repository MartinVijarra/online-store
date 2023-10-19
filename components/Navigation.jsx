import { MenuOutlined } from "@ant-design/icons";

export default function Navegacion() {
  return (
    <nav className="w-full flex justify-center">
      <div className="h-full md:hidden">
        <MenuOutlined className="text-2xl" />
      </div>

      <div className="hidden text-gray-900 font-bold uppercase py-1 md:flex md:gap-4 md:list-none">
        <li className="text-lg cursor-pointer duration-200 hover:text-orange-400">Inicio</li>
        <li className="text-lg cursor-pointer duration-200 hover:text-orange-400">Productos</li>
        <li className="text-lg cursor-pointer duration-200 hover:text-orange-400">Sobre Nosotros</li>
        <li className="text-lg cursor-pointer duration-200 hover:text-orange-400">Contacto</li>
      </div>
    </nav>
  );
}
