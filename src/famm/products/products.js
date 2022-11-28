import React, { useState,useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Axios from 'axios';
import '../css/style.css';
import '../css/responsive.css';
// import './css/font-awesome.min.css';
import '../css/bootstrap.css';

// js
// import '../js/bootstrap.js';

import Product from './product';
import Header from './product_header';


function Products() {

   const unique_id = uuid();
   const small_id = unique_id.slice(0,8)

   const [cartActive,setCartActive] = useState(false)
   const [products,setProducts]= useState([])
   const [cart,setCart]= useState([])
   // const [test,setTest] = useState([{id:1,data:4}])
   // setCart(1);

   const viewCart = () =>{
         setCartActive(!cartActive)
   }

   const isfound = (id) => cart.some(element => {
      // console.log(element.product.id);
      if (element.product.id === id) {
        return true;
      }
      return false;
   })

   const addCart = (id,product) =>{
      // cart.useState(cart+1)
      var i=0;
      // setCart([...cart,{id:id,product:product,Quantity:1}])
      if(cart.length===0){
         setCart([...cart,{id:id,product:product,Quantity:1}])
      }else{
         for(i;i<cart.length;i++){
            if(product.id===cart[i].product.id){
               // cart[i].Quantity=cart[i].Quantity+1;
               // setTest(prevData=>{
               //    const pdata=prevData;
               //    pdata[0].data=pdata[0].data+1;
               //    // console.log("pdata: ",pdata);
               //    return pdata;
               // });
               // setTest(prevData=>{
               //    const pdata=prevData;
               //    pdata[0].data=pdata[0].data+1;
               //    // console.log("pdata: ",pdata);
               //    return pdata;
               // });
               let isa=i;
               setCart(prevData=>{
                  const prev=prevData;
                  prev[isa].Quantity=prev[isa].Quantity+1
                  console.log(prev);
                  return prev;
               });
               break;
            }else{
               // if(product.id!==cart[i].product.id){
               //    setCart([...cart,{id:id,product:product,Quantity:1}])
               // }
               if(!isfound(product.id)){
                  setCart([...cart,{id:id,product:product,Quantity:1}])
                  // console.log("Found it");
               }
               // cart[i].Quantity=cart[i].Quantity+1;  
               // setCart([...cart,{id:id,product:product,Quantity:1}])
               // console.log(false);
               // console.log(product.id);
               // console.log(cart[i].product.id);
            }
         }
      }
   }

   // View Cart
   const viewProducts = () =>{
      console.log(cartActive)
   }

   useEffect(() => {
      Axios.get('http://localhost:3001/products').then(response => {
          setProducts(response.data)
      })
   }, [])


   const sendDataServer = (name) =>{
      Axios.post("http://localhost:3001/sendData",{
         uname:name
      }).then(response => {
         console.log(response)
      })
   }
    return (
      <div class="hero_area">
         
         <Header totalCart={cart.length} cart={cart} setCart={setCart} cartActive={cartActive}/>
         <section className="product_section layout_padding" onClick={viewCart}>
            <div className="container">
               <div className="heading_container heading_center">
                  <h2>
                     Our <span>products</span>
                  </h2>
               </div>
               <div className="row">
                  {
                     products.map(product=>(
                        <Product key={product.id} id={small_id} product={product} addCart={addCart} cartActive={cartActive}/>
                     ))
                  }
               </div>
               <div className="btn-box">
                  <a href="#" onClick={viewProducts}>
                     View All products
                  </a>
               </div>
            </div>
         </section>
         <button onClick={(name)=>sendDataServer("Viraj")}>Server Data</button>
      </div>
    );
}

export default Products;