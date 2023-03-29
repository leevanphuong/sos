import React, { useEffect, useState } from 'react'

const products = (props) => {
    const [data, setdata] = useState([])
    useEffect(() => {
        setdata(props.product)
    },[props])

    return (
        <div>
            {
                data.map((item)=>{
                    return <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        </div>
                })
        }
        </div>
    )
}

export default products