'use client'
import Products from "@/components/Products";
import Glider from "@/components/Glider";
import { ThemeProvider } from "@material-tailwind/react";

export default function Home() {
  return (
    <main>
        <ThemeProvider>
          <Glider />
        </ThemeProvider>
        <Products />
      </main>
  );
}
