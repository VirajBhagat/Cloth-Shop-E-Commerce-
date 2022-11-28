import React, { Component,useState,useEffect } from 'react';


function Product(props) {

   //  console.log(props)
    return ( 
               <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           {/* <span onClick={props.cartActive}> */}
                              {/* {console.log(props)} */}
                              <button onClick={(id,product) => props.addCart(props.id,props.product)} href="" className="option1">
                                 Add to cart
                              </button>
                           {/* </span> */}
                           <button href="" className="option2">
                                 See Product
                           </button>
                        </div>
                     </div>
                     <div className="img-box">
                        <img src={props.product.img} alt="" />
                     </div>
                     <div className="detail-box">
                        <h5 className='product_title'>
                            {
                                props.product.product_name
                            }
                        </h5>
                        <h6>
                           $75
                        </h6>
                     </div>
                  </div>
               </div>
    );
}

export default Product;