import { createBrowserRouter } from "react-router-dom"
import { App } from "../App"
import { JewerlyProducts } from "../views/Jewerly"
import { ItemDetailContainer } from "../Components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/category/jewerly",
        element: <JewerlyProducts />,
    },
    {
        path: "/item/:id",
        element: <ItemListContainer />
    },
    {
        path: "/itemdetail/:id",
        element: <ItemDetailContainer />
    }
])

