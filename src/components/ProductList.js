import React, {Component} from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';
import SlideShow from './Slide';

import Footer from './Footer';
class ProductList extends Component {
 
  render(){
    return( 
        <React.Fragment>
            <SlideShow/>
            <div className="py-5">
                <div className="container">
                    <Title name="" title="products"/>
                    <div className="row">
                        <ProductConsumer>
                            {value => {
                                return value.products.map(product => {
                                    
                                    return (
                                        <Product key={product.id} product={product}/>
                                        
                                    )
                                })
                                
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </div>
            
            <Footer/>
     
      </React.Fragment>
    );}
  
}
export default ProductList;