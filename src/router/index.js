import { createBrowserRouter } from "react-router-dom"
import { App } from "../App"
import { ItemDetailContainer } from "../Components/ItemDetailContainer/ItemDetailContainer"
import { Electronics } from "../views/Electronics"
import { Jewerly } from "../views/Jewerly"
import { MensClothing } from "../views/MensClothing"
import { WomensClothing } from "../views/WomensClothing"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/men'sclothing",
        element: <MensClothing />
    },
    {
        path: "/women'sclothing",
        element: <WomensClothing />
    },
    {
        path: "/electronics",
        element: <Electronics />
    },
    {
        path: "/jewerly",
        element: <Jewerly />
    },
    {
        path: "/itemdetail/:id",
        element: <ItemDetailContainer />
    }
])

