import React, { useState } from 'react';
import '../css/cart.css';
import image from '../images/p1.png';
import Cart from './cart'
// import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css'
function Carts(props) {

    return (
        <>
            {/* <div className={`cart cart-${props.cartActive}`}> */}
                {/* <Cart image={image} changeQuantity={props.changeQuantity} onChangeQuantity={props.onChangeQuantity} quantityVal={props.quantityVal}/> */}
                {

                    props.products.map(product=>(
                    // <Product key={product.id} id={product.id} product={product} addCart={addCart}/>
                        <Cart key={product.id}  id={product.id} productData={product} changeQuantity={props.changeQuantity} onChangeQuantity={props.onChangeQuantity} quantityVal={product.Quantity} deleteCart={props.deleteCart} />
                    ))
                }
            {/* </div> */}
        </>
    );
}

export default Carts;