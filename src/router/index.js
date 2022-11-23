import { createBrowserRouter } from "react-router-dom"
import { App } from "../App"
import { CategoryView } from "../views/Category"
import { Item } from "../Components/ItemListContainer/Item"
import { ItemDetailContainer } from "../Components/ItemDetailContainer/ItemDetailContainer"

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
        element: <Item />
    },
    {
        path: "/itemdetail/:id",
        element: <ItemDetailContainer />
    }
])

