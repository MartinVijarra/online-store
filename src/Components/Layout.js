import { NavBar } from "./NavBar";
import { Footer } from "./Footer"

export function Layout({ children }) {
    return(
        <>
        <NavBar />
        <main>
            {children}
        </main>
        <Footer />
        </>
    )
}