import React, { useEffect, useState } from 'react'

const dashboard = (props) => {
    const [products, setproduct]=useState([])
    useEffect(()=>{
        setproduct(props.product)
    },[props])
    const removeItem=(id)=>{
        const check = confirm('ban co muon xoa')
        if(check){
            props.onRemove(id)
        }
    }
  return (
    <div>
        <button><a href="/admin/add">Them san pham</a></button>
        {
            products.map((item)=>{
                return <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    <button onClick={()=>removeItem(item.id) }>Xoa</button>
                    <button><a href={'/admin/update/'+item.id}>Cap nhap</a></button>
                </div>
            })
        }
    </div>
  )
}

export default dashboard