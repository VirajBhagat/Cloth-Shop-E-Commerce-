import { Axios } from 'axios';
import React, { Component,useState,useEffect } from 'react';
import '../css/cart.css';
import Logo from '../images/logo.png';
// import image from '../images/p1.png';
import Carts from './carts'

function Product_header(props) {
   const totalCart=props.totalCart;
   const [cartActive, setCartActive]=useState(props.cartActive);
   const [quantityVal,setQuantityVal]=useState(1);

   const viewCart = () =>{
      setCartActive(!cartActive)
   }

   const checkCartActive = () => {
      if(cartActive===true){
         setCartActive(false)
      }
   }

   const changeQuantity = (opt) => {
      if(opt==='+'){
          setQuantityVal(quantityVal+1)
      }else{
          if(quantityVal<=1){
              setQuantityVal(1)
          }else{
              setQuantityVal(quantityVal-1)
          }
      }
  }

  const onChangeQuantity = (val) =>{
      console.log(val);
      if(val>1){
          setQuantityVal(parseInt(val))
      }else{
          setQuantityVal(1)
      }
  }

  const deleteCart = (id) =>{
      props.setCart(current =>
         current.filter(product => {
            console.log(product.id);
            return product.id !== id ;
         }),
      )
  }

   // useEffect(() => {
   //    Axios.get('http://localhost:3001/products').then(response => {
   //       setProducts(response.data)
   //    })
   // }, [])
   useEffect(()=>{
      // if(cartActive===true){
      //    setCartActive(false)
      // }
      console.log(props.cartActive);
   })

    return ( 
        <header className="header_section">
            <div className="container">
               {/* {console.log(props.cart)} */}
               <nav className="navbar navbar-expand-lg custom_nav-container ">
                  <a className="navbar-brand" href="index.html"><img width="250" src={Logo} alt="#" /></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""> </span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                           {/* <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label"/>Pages <span className="caret"></span></a> */}
                           <a className="nav-link dropdown-toggle" href="#">
                              <span className="nav-label"/>Pages 
                              <span className="caret"></span>
                           </a>
                           <ul className="dropdown-menu">
                              <li><a href="about.html">About</a></li>
                              <li><a href="testimonial.html">Testimonial</a></li>
                           </ul>
                        </li>
                        <li className="nav-item active">
                           <a className="nav-link" href="product.html">Products</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="blog_list.html">Blog</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link cart-product-count" href="#" onClick={viewCart}>
                                <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 456.029 456.029">
                                 <g>
                                    <g>
                                       <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                                          c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                                    </g>
                                 </g>
                                 <g>
                                    <g>
                                       <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                                          C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                                          c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                                          C457.728,97.71,450.56,86.958,439.296,84.91z" />
                                    </g>
                                 </g>
                                 <g>
                                    <g>
                                       <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                                          c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                                    </g>
                                 </g>
                              </svg>
                              <sup className='total_cart'>{props.totalCart}</sup>
                           </a>
                              {
                                 //  1 > 0?(console.log(1)):(console.log(0)) 
                                 totalCart > 0 ? (
                                    <div className={`cart cart-${cartActive}`}>
                                       <Carts products={props.cart} changeQuantity={changeQuantity} onChangeQuantity={onChangeQuantity} cartActive={cartActive} deleteCart={deleteCart} /> 
                                    </div>
                                    ):( null )

                                 // console.log(totalCart)
                              }

                           {/* <Carts products={props.cart} changeQuantity={changeQuantity} onChangeQuantity={onChangeQuantity} quantityVal={quantityVal} cartActive={cartActive}/> */}
                        </li>
                        <li>
                           <button onClick={deleteCart}>Click</button>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
        </header>
    );
}

export default Product_header;