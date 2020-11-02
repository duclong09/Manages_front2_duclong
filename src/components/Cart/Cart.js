import React, { Component } from 'react';
import Title from '../Title';
import CartColumn from './CartColumn';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context'
import CartList from './CartList';
import CartTotals from './CartTotals';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumn />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                  <ScrollUpButton
                    ShowAtPosition={100}
                    AnimationDuration={800}
                    ToggledStyle={{ right: 10 }}
                  />
                </React.Fragment>

              )
            } else {
              return <EmptyCart />
            }
          }}
        </ProductConsumer>


      </section>
    )
  }

}

export default Cart;