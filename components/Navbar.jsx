import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import { ShoppingCartOutlined } from "@ant-design/icons";

export default function Navbar() {
  return (
    <header className="w-full h-16 flex justify-center items-center border-b bg-gradient-to-t from-gray-200 to-white">
      <div className="w-4/5 flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <Image src={"/logo.png"} width={160} height={100} alt="Logo" />
        </Link>

        {/* Input de navegacion  */}
        <Search />

        {/* Carrito de compras */}
        <ShoppingCartOutlined className="cursor-pointer text-2xl text-gray-900 hover:text-orange-400 duration-200" />
      </div>
    </header>
  );
}
