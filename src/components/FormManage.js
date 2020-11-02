import React, { Component } from 'react';
import { ProductConsumer } from '../context';

class FormManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            img: '',
            price: '',
            company: '',
            desc: '',
            inCart: false,
            count: 0,
            total: 0
        };
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    onClear = () => {
        this.setState({
            name: '',
            img: '',
            price: '',
            company: '',
            desc: ''
        })
    }
    onCloseForm = () => {
        this.props.onCloseForm();
    }
    componentDidMount(){
        if(this.props.productUpdating){
                this.setState({
                id: this.props.productUpdating.id,
                name: this.props.productUpdating.name,
                img: this.props.productUpdating.img,
                price: this.props.productUpdating.price,
                company: this.props.productUpdating.company,
                desc: this.props.productUpdating.desc,
            })
        }
       
    }
    
    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.productUpdating){
            this.setState({
                id:nextProps.productUpdating.id,
                name: nextProps.productUpdating.name,
                img: nextProps.productUpdating.img,
                price: nextProps.productUpdating.price,
                company: nextProps.productUpdating.company,
                desc: nextProps.productUpdating.desc,
            })
        }else if (!nextProps.task) {
            this.setState({
                id: '',
                name: '',
                img: '',
                price: '',
                company: '',
                desc: '',
            });
        }
        
    }
    render() {
        var {id} = this.state;
        return (
            <ProductConsumer>
                {value => {
                    return (
                        <div className="panel panel-warning">
                            <div className="panel-heading">
                                <h3 className="panel-title">{id !== '' ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}<span className="fa fa-times-circle text-right" onClick={this.onCloseForm}></span></h3>
                            </div>
                            <div className="panel-body">

                                <form id="formManage" onSubmit={(event) => {value.onSubmit(this.state, event.preventDefault())}} >
                                    <div className="form-group">
                                        <label>Name :</label>
                                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Image :</label>
                                        <input type="text" className="form-control" name="img" value={this.state.img} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Price :</label>
                                        <input type="text" className="form-control" name="price" value={this.state.price} onChange={this.onChange} />
                                    </div>



                                    <div className="form-group">
                                        <label>Company:</label>
                                        <input type="text" className="form-control" name="company" value={this.state.company} onChange={this.onChange} />
                                    </div>

                                    <br />
                                    <div className="form-group">
                                        <label>Desc:</label>
                                        <textarea type="text" className="form-control" rows="6" name="desc" value={this.state.desc} onChange={this.onChange}></textarea>
                                    </div>

                                    <br />
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-warning">  <span className="fa fa-save mr-1"></span>Lưu lại</button>&nbsp;
                                    <button type="button" className="btn btn-danger" onClick={this.onClear}><span className="fa fa-eraser mr-1"></span>Clear</button>
                                    </div>
                                </form>


                            </div>
                        </div>
                    )
                }}

            </ProductConsumer>
        );
    }
}

export default FormManage;
