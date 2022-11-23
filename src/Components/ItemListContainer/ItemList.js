import { Item } from "./Item";
import { JewerlyProducts } from "../../views/Jewerly";
import '../../Styles/ItemList.css'

export function ItemList() {
    return(
    <div className="itemlist">
        <Item />
        <JewerlyProducts />
    </div>
    )
}