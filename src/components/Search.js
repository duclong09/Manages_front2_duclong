import React, { Component } from 'react';
import {ProductConsumer} from '../context';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }
    onChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.value
        this.setState({ 
            [name]: value
        })
    }
    render() {
        var {keyword} = this.state
        return (

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input name="keyword" type="text" className="form-control" placeholder="Nhập từ khóa..."  value={keyword} onChange={this.onChange}/>
                    <span className="input-group-btn">
                        <ProductConsumer>
                            {value => {
                                return(
                                    <button className="btn btn-primary ml-2" type="button" onClick={() => value.search(keyword)}>
                                    <span className="fa fa-search mr-1"></span>Tìm
                                  </button>
                                )
                            }}
                        </ProductConsumer>
                       
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;
