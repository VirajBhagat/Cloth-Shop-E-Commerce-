import React  from 'react';

function Cart(props) {
    return ( 
        <>
            <div className="cart-product">
                <div className='cart-header'></div>
                <div className='d-flex justify-content-between'>
                    <div className='cart-product-image-background'>
                        <img src={props.productData.product.img} className='cart-product-image'/>
                        {console.log(props.quantityVal)}
                    </div>
                    <div className='cart-info'>
                        <h3 className='product-name'>{props.productData.product.product_name}</h3>
                        <h4 className='product-color'>Product Color: {props.productData.product.color}</h4>
                        <h4 className='product-size'>Product Size</h4>
                        <i><b>Price:</b> Rs.{props.productData.product.product_price}</i>
                    </div>
                    <div className='cart-quantity'>
                        <div>
                            <button className='cart-quantity-btn mx-1 btn btn-primary rounded' onClick={() => props.changeQuantity('-')}>-</button>
                            <input type="number" value={props.quantityVal} className='form-control cart-quantity-number' onChange={val => {props.onChangeQuantity(parseInt(val.target.value))}}/>
                            <button className='cart-quantity-btn mx-1 btn btn-primary rounded' onClick={() => props.changeQuantity('+')}>+</button>
                        </div>
                        <p>Quantity</p>
                        <button className='cart-product-delete btn btn-danger' onClick={(id) => props.deleteCart(props.productData.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='line'>
                <p className='cart-line'></p>
            </div>
        </>
    );
}

export default Cart;