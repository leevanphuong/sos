import instance from './instance'

const getAll=()=>{
    return instance.get('/products')
}
const getOne=(id)=>{
    return instance.get('/products/'+id)
}
const remove=(id)=>{
    return instance.delete('/products/'+id)
}
const add=(product)=>{
    return instance.post('/products', product)
}
const update=(product)=>{
    return instance.put('/products/'+ product.id, product)
}

export {getAll,getOne,remove,add,update}