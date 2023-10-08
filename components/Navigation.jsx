import { MenuOutlined } from "@ant-design/icons";

export default function Navegacion() {
  return (
    <>
      <div className="h-full md:hidden">
        <MenuOutlined className="text-2xl" />
      </div>

      <nav className="hidden text-slate-800 font-bold md:flex md:gap-4 md:list-none">
        <li className="text-lg cursor-pointer hover:border-2 hover:px-4 rounded-xl duration-200 border-orange-400 ">Inicio</li>
        <li className="text-lg cursor-pointer hover:border-2 hover:px-4 rounded-xl duration-200 border-orange-400 ">Sobre Nosotros</li>
        <li className="text-lg cursor-pointer hover:border-2 hover:px-4 rounded-xl duration-200 border-orange-400 ">Contacto</li>
      </nav>
    </>
  );
}
