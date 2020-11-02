import React, { Component } from 'react';
import ProductItemManage from './ProductItemManage';
import { ProductConsumer } from '../context';
import '../App.css'
class ProductListManage extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            newsPerPage: 3
        };
    }

    chosePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    };

    select = (event) => {
        this.setState({
            newsPerPage: event.target.value
        });
    };
    render() {
        const currentPage = this.state.currentPage;
        const newsPerPage = this.state.newsPerPage;
        const indexOfLastNews = currentPage * newsPerPage;
        const indexOfFirstNews = indexOfLastNews - newsPerPage;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.products.length / newsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div className="row mt-15">
                <div className="col-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Image</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Company</th>
                                <th className="text-center">Desc</th>
                                <th className="text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <ProductConsumer>
                                {value => {
                                    return value.products.slice(indexOfFirstNews, indexOfLastNews).map((product, index) => {
                                        return (
                                            <ProductItemManage key={product.id} index={index + 1 + (currentPage - 1) * newsPerPage} product={product} />
                                        )
                                    })
                                }}
                            </ProductConsumer>
                        </tbody>
                    </table>
                </div>
                <div className="news-per-page">
                    <select defaultValue="0" onChange={this.select}>
                        <option value="0" disabled>
                            Get by
            </option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                    </select>
                </div>
                <div className="pagination-custom">
                    <ul id="page-numbers">
                        {pageNumbers.map((number) => {
                            if (this.state.currentPage === number) {
                                return (
                                    <li key={number} id={number} className="active">
                                        {number}
                                    </li>
                                );
                            } else {
                                return (
                                    <li key={number} id={number} onClick={this.chosePage}>
                                        {number}
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ProductListManage;
