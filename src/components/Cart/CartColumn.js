import React from 'react'

export default function CartColumn()  {
    
        return(
            <div className="container-fluid text-center d-none d-lg-block">
                <div class="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Name of product</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Quantity</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Remove</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Total</p>
                    </div>
                
                </div>
            </div>
        )
    
}