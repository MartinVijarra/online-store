import { MenuOutlined } from "@ant-design/icons";

export default function Navegacion() {
  return (
    <>
      <div className="h-full md:hidden">
        <MenuOutlined className="text-2xl" />
      </div>

      <nav className="hidden md:flex md:gap-4 md:list-none">
        <li className="text-lg cursor-pointer hover:text-orange-400">Inicio</li>
        <li className="text-lg cursor-pointer hover:text-orange-400">
          Sobre Nosotros
        </li>
        <li className="text-lg cursor-pointer hover:text-orange-400">
          Contacto
        </li>
      </nav>
    </>
  );
}
