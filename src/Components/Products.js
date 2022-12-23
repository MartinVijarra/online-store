import axios from "axios"

export async function allProducts (state) {
    const getProducts = await axios.get('https://fakestoreapi.com/products')
    state(getProducts.data)
}

export function JewerlyProducts(state) {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        const products = res.data;
        state(products.filter(product => product.category.includes("jewelery")))
      });
}

export function ElectronicsProducts(state) {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        const products = res.data;
        state(products.filter(product => product.category.includes("electronics")))
      });
}

export function Men(state) {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        const products = res.data;
        state(products.filter(product => product.category.includes("men's clothing")))
      });
}

export function Woman(state) {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        const products = res.data;
        state(products.filter(product => product.category.includes("women's clothing")))
      });
}

export async function productDetail(id, state) {
    const singleProduct = await axios.get(`https://fakestoreapi.com/products/${id}`)
    state(singleProduct.data)
}
