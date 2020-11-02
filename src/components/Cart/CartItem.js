import React from 'react'
export default function CartItem(item, value){
  
    let {id, name, img, price, total, count} = item.item
   
    const {increment, decrement, removeItem} = item.value
    return(
       <div class="row my-1 text-capitalize text-center">
           <div className="col-10 mx-auto col-lg-2">
               <img src={'images/' + img} style={{width: '10rem', height: '10rem'}} className="img-fluid" alt="product"/>
           </div>
           <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product: </span>{name}
           </div>
           <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">Price: </span>{price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span>
                        
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
                        
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2" onClick={() => removeItem(id)}>
               <div className="cart-icon"><i className="fa fa-trash"></i></div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>$ {total}</strong>
            </div>
       </div>
    )
}