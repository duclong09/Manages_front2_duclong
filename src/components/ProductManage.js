import React, { Component } from 'react';
import '../App.css';
import FormManage from './FormManage';
import Search from './Search';
import ProductListManage from './ProductListManage';
import { ProductConsumer } from '../context';
import { Link, Redirect } from 'react-router-dom';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
class ProductManage extends Component {

  constructor(props) {
    super(props)
    const token = localStorage.getItem('token')

    let loggedIn = true
    if (token == null) {
      loggedIn = false

    }
    this.state = {
      loggedIn
    }
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />
    }
    return (
      <ProductConsumer>
        {value => {
          {
            if (value.keyword) {
              value.products = value.products.filter(product => {
                return product.name.toLowerCase().indexOf(value.keyword) !== -1
              })
            }
          }
          return (
            <div className="container">
              <div className="text-center">
                <h1 style={{ margin: 20 + 'px' }}>Quản Lý Sản Phẩm</h1>

              </div>
              <div className="row">
                <div className={value.isDisplayForm ? 'col-3' : ''}>
                  {value.isDisplayForm ? <FormManage onCloseForm={value.onCloseForm} productUpdating={value.productUpdating} /> : ''}
                </div>
                <div className={value.isDisplayForm ? 'col-9' : 'col-12'}>
                  <button type="button" className="btn btn-primary" onClick={value.onToggleForm}>
                    <span className="fa fa-plus mr-1"></span>Thêm Sản Phẩm
                      </button>
                  <button type="button" className="btn btn-danger ml-5" onClick={value.onGenerateData}>
                    Generate Data
                      </button>
                  <Link to="/logout">
                    <button type="button" className="btn btn-danger ml-5">
                      Logout
                      </button>
                  </Link>

                  <div className="row mt-15">
                    <Search />

                  </div>
                  <ProductListManage products={value.products}/>
                </div>
              </div>
              <ScrollUpButton
                ShowAtPosition={100}
                AnimationDuration={1000}
                ToggledStyle={{ right: 10 }}
              />
            </div>
          )
        }}
      </ProductConsumer>
    );
  }
}
export default ProductManage;