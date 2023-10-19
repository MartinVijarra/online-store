'use client'
import Products from "@/components/Products";
import Glider from "@/components/Glider";
import Navegacion from "@/components/Navigation";
import { ThemeProvider } from "@material-tailwind/react";

export default function Home() {
  return (
    <main>
        <Navegacion />
        <ThemeProvider>
          <Glider />
        </ThemeProvider>
        <Products />
      </main>
  );
}
