import axios from "axios"

export async function allProducts (state) {
    const getProducts = await axios.get('https://fakestoreapi.com/products')
    state(getProducts.data)
}

export async function JewerlyProducts (state) {
    const jewerlyData = await axios.get('https://fakestoreapi.com/products/category/jewelery')
    state(jewerlyData.data)
}
export async function ElectronicsProducts (state) {
    const electronicsData = await axios.get('https://fakestoreapi.com/products/category/electronics')
    state(electronicsData.data)
}

export async function productDetail(id, state) {
    const singleProduct = await axios.get(`https://fakestoreapi.com/products/${id}`)
    state(singleProduct.data)
}
