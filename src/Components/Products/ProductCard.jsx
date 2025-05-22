import React, { useContext } from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import aaa from './product.module.css'



const ProductCard = ({product}) => {

    const {image, id, title, price, rating, description }=product

  return (
    <div className={aaa.card_container}>
        <a href="">
            <img src={image} alt="" />
        </a>
        <div>
            <h3>{title}</h3>
        
            <div className={aaa.rating}>
                {/* rating */}
                <Rating value={rating?.rate} precision={0.1}/>
                {/* count */}
                <small>{rating?.count}</small>
            </div>
            <div>
                {/* price */}
                <CurrencyFormat amount={price}/>
            </div>

          <button className={aaa.button}>add to cart</button>
            
        </div>
    </div>
  )
}

export default ProductCard

