import axios from "axios"

export async function allProducts (state) {
    const getProducts = await axios.get('https://fakestoreapi.com/products/1')
    state(getProducts.data)
}
