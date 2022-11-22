import { NavBar } from "./NavBar";

export function Layout({ children }) {
    return(
        <main>
            <NavBar />
            {children}
        </main>
    )
}