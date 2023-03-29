import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOne } from '../api/products'

const productDetail = () => {
    const {id}= useParams()
    const [product, setproduct]= useState({})
    useState(()=>{
        getOne(id).then(({data})=> setproduct(data))
    })
  return (
    <div>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
    </div>
  )
}

export default productDetail