import { useEffect, useState } from 'react'
import {Route, Routes } from "react-router-dom"
import HomePage from './page/homePages'
import {add, getAll, remove, update} from './api/products'
import Products from './page/products'
import ProductDetail from './page/productDetail'
import Dashboard from './page/admin/dashboard'
import AddProduct from './page/admin/addProduct'
import Update from './page/admin/update'

function App() {
  const [products, setproduct]=useState([])
  useEffect(()=>{
    getAll().then(({data})=> setproduct(data))
  },[])
  const deleteItem=(id)=>{
    remove(id).then(()=> setproduct(products.filter((item)=> item.id !== id)))
  }
  const addItem=(product)=>{
    add(product).then(()=> setproduct([...products, product]))
  }
  const updateItem =(product)=>{
    update(product).then(()=> setproduct(products.map((item) => item.id ==product.id ? product: item)))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<Products product={products} />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/admin' element={<Dashboard product={products} onRemove={deleteItem} />} />
        <Route path='/admin/add' element={<AddProduct  onAdd={addItem} />} />
        <Route path='/admin/update/:id' element={<Update product={products} onUpdate={updateItem}  />} />
      </Routes>
    </div>
  )
}

export default App
