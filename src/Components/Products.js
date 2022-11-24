import axios from "axios"

export async function allProducts (state) {
    const getProducts = await axios.get('https://fakestoreapi.com/products')
    state(getProducts.data)
}
// export async function MensClothing (state) {
//     const manCloth = await axios.get("https://fakestoreapi.com/products/categories/man")
//     state(manCloth.data)
// }
// export async function WomensClothing (state) {
//     const womanCloth = await axios.get("https://fakestoreapi.com/products/women'sclothing")
//     state(womanCloth.data)
// }
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
