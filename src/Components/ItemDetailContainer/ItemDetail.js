import { ItemCount } from './ItemCount';
import '../StyleComponents/ItemDetail.css'

export function ItemDetail() {
    const products = {
        id:"1",
        name:"Camisa Para Hombre",
        description:"Camisas a rallas Slim Fit para hombre de diseño",
        price: 1500,
        img: "https://legacy.vteximg.com.br/arquivos/ids/188450-504-680/1060410010_WE18.jpg?v=637997951636800000"
    }

    new Promise ((resolve, reject) => setTimeout(() => {
        resolve(products)
    }, 2000))

    return(
        <div className='card-detail-container'>
            <div className='card-detail'>
                <div className='card-img'>
                    <img src={products.img} alt="imagen" />
                </div>
                
                <div className='card-info'>
                    <h5 className='data-products titulo'>{products.name}</h5>
                    <p className='data-products'>{products.description}</p>
                    <p className='data-products price'>${products.price}</p>
                    <p className='data-products'>Stock: 5</p>
                    <ItemCount />
                </div>
            </div>
        </div>
    )
}