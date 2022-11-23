import { ItemCount } from './ItemCount';
import { Layout } from '../Layout';
import '../../Styles/ItemDetail.css'

export async function ItemDetail() {
    return(
        <Layout>
            <div className='card-detail-container'>
                <div className='card-detail'>
                    <div className='card-img'>
                        
                    </div>
                    
                    <div className='card-info'>
                        <ItemCount />
                    </div>
                </div>
            </div>
        </Layout>
    )
}