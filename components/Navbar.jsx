import Image from "next/image"
import Navigation from "./Navigation"

export default function Navbar() {
  return (
    <header className="w-full h-16 flex items-center">
        <div className="w-4/5 m-auto flex justify-between items-center">
            <div>
                <Image 
                    src={'/logo.png'}
                    width={200}
                    height={100}
                    alt="Logo"
                />
            </div>
            <Navigation />
        </div>
    </header>
  )
}
