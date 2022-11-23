import { createBrowserRouter } from "react-router-dom"
import { App } from "../App"
import { CategoryView } from "../views/Category"
import { ItemDetailContainer } from "../Components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/category/:id",
        element: <CategoryView />,
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

