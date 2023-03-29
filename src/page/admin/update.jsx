import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const update = (props) => {
    const {id} = useParams()
    const naviga= useNavigate()
    const [data,setdata]= useState({})
    useEffect(()=>{
        const Newproducts= props.product.find(item=> item.id ==id )
        setdata(Newproducts)
    })
    const [input, setinput]=useState({})
    const onchange=(e)=>{
     const {name, value}= e.target
     setinput({...input,[name]: value})
    }
    const submit=(e)=>{
     e.preventDefault()
     props.onUpdate({...data,...input})
     naviga('/admin')
    }
  return (
    <div>
        <form action="" onSubmit={submit} >
            Nhap ten san pham 
            <input type="text" onChange={onchange} defaultValue={data?.name} name="name"/>
            <br />
            Nhap gia san pham
            <input type="number" onChange={onchange}  defaultValue={data?.price} name="price"/>
            <br />
            <button type='submit'>Them</button>
        </form>
    </div>
  )
}

export default update