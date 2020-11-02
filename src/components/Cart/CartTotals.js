import React from 'react'
import {Link} from 'react-router-dom'
import PaypalButton from './PaypalButton'
export default function CartTotals({value, history}){
    const {cartSubTotal, cartVAT, cartTotal, clearCart} = value
    return(
        <React.Fragment>
            <div class="container">
                <div class="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>Clear Cart</button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                Subtotal:
                            </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                VAT:
                            </span>
                            <strong>$ {cartVAT}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Total:
                            </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                        <PaypalButton total={cartTotal} clearCart={clearCart} history={history}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}