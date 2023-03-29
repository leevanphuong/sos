import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const addProduct = (props) => {
    const naviga = useNavigate()
    const [input, setinput]=useState()
   const onchange=(e)=>{
    const {name, value}= e.target
    setinput({...input,[name]: value})
   }
   const submit=(e)=>{
    e.preventDefault()
    props.onAdd(input)
    naviga('/admin')
   }
  return (
    <div>
        <form action="" onSubmit={submit}>
            Nhap ten san pham 
            <input type="text" onChange={onchange} name="name"/>
            <br />
            Nhap gia san pham
            <input type="number" onChange={onchange} name="price"/>
            <br />
            <button type='submit'>Them</button>
        </form>
    </div>
  )
}

export default addProduct