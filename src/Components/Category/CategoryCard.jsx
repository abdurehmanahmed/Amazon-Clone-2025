import React from 'react'
import aaa from './category.module.css';
import { Link } from 'react-router-dom';


const CategoryCard = ({data}) => {
  console.log(data)
  return (
    <div className={aaa.category}>
        
        <a href = {data.name}>
            <span>
                <h2>{data.title}</h2>
            </span>
            <img src={data.imageLink} alt="" />
            <div>
            <p>shop now</p>
            </div>
        </a>
    </div>
  )

}

export default CategoryCard