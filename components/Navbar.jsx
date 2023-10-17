import Image from "next/image"
import Navigation from "./Navigation"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="w-full h-16 flex items-center backdrop-blur-sm bg-white/50 border-b fixed">
        <div className="w-4/5 m-auto flex justify-between items-center">
            <Link href={"/"}>
                <Image 
                  src={'/logo.png'}
                  width={160}
                  height={100}
                  alt="Logo"
                />
            </Link>
            <Navigation />
        </div>
    </header>
  )
}
