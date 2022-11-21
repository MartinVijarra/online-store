// import { ItemList } from './ItemList';
import { ItemDetail } from './ItemDetail'
import '../StyleComponents/ItemListContainer.css'

export function ItemListContainer() {
    return (
        <div className='itemlist-container'>
            <ItemDetail />
        </div>
    )
}