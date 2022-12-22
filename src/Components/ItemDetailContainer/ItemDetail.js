import { useEffect, useState } from 'react';
import { ItemCount } from './ItemCount'
import { useParams } from 'react-router-dom';
import { productDetail } from '../Products';
import '../../Styles/ItemDetail.css'

export function ItemDetail() {

    const params = useParams()
    
    const [detail, setDetail] = useState(null)
    
    useEffect(() => {
        productDetail(params.id, setDetail)
    }, [])
    

    return(
        <>
        {detail == null ? <span className="loader"></span> :
            <div className='card-detail-container'>
                <div className='card-detail'>
                    <div className='card-img'>             
                        <img src={detail.image} alt={detail.title}/>
                    </div>
                    <div className='card-info'>
                        <h4 className='title'>{detail.title}</h4>
                        <p className='description'><i>{detail.description}</i></p>
                        <h5 className='price'>Price: ${detail.price}</h5>
                        <p className='stock'>Stock: {detail.rating.count}</p>
                        {/* <p>Size:</p>
                        <div className='size-container'>
                            <button className='size'>S</button>
                            <button className='size'>M</button>
                            <button className='size'>L</button>
                            <button className='size'>XL</button>
                        </div> */}
                        <ItemCount />
                    </div>
                </div>
            </div>
        }
        </> 
    )
}