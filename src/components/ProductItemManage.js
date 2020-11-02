import React, { Component } from 'react';
import {ProductConsumer} from '../context';

class ProductItemManage extends Component {
   
    render() {

        const {id, name, img, price, company, desc } = this.props.product;
        const {index} = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>{name}</td>
                <td>{img}</td>
                <td>{price}</td>
                <td>{company}</td>
                <td>{desc}</td>
                <ProductConsumer>
                    {value => {
                        return(
                            <td className="text-center">
                            <button type="button" className="btn btn-warning" onClick={() => value.onUpdate(id)} >
                                <span className="fa fa-pencil"></span>Sửa
                        </button>
                        &nbsp;
                        <button type="button" className="btn btn-danger" onClick={() => value.onDelete(id)}>
                                <span className="fa fa-trash"></span>Xóa
                        </button>
                        </td>
                        )
                    }}
                
                </ProductConsumer>
               
            </tr>
        );
    }
}

export default ProductItemManage;
