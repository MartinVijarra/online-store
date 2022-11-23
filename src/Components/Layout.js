import { NavBar } from "./NavBar";
import { Footer } from "./Footer"

export function Layout({ children }) {
    return(
        <main>
            <NavBar />
            {children}
            <Footer />
        </main>
    )
}