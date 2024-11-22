import React, {useEffect, useState} from 'react'
import axios from '../utils/axios'
function Show() {
    
  const [product, setProduct] = useState([]);
  const api = '/products' ;

  useEffect(()=>{getProducts()},[])
  
  const getProducts =()=>{
    axios.get(api).then(products => {
      console.log(products);
      setProduct(products.data);
      console.log(product);
    }).catch((error)=>console.log(error));
  }

  const addProducts = ()=>{
    axios.post(api, {id:111}).then(res=>console.log(res)).catch(error=>console.log(error));
  }


  return (
    <>
       {/* <button onClick={getProducts} className='border-black border px-2 py-3 bg-red-300 rounded-md m-5'>Call API</button>
      <br />
      <button onClick={addProducts} className='border-black border px-2 py-3 bg-red-300 rounded-md m-5'>Add API</button>
      <br /> */}
      <hr />
      <ul>
        <li className='m-8 border border-black px-2 py-1 rounded-md bg-green-200 w-64'>Products</li>
        {product.length > 0 ? product.map((p, index)=><li className='w-full m-2 bg-red-100 text-sm p-1 ' key={index}>{p.title}</li>) : <li>Loading...</li>}
      </ul>
    </>
  )
}

export default Show