import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('token')

        let loggedIn = true
        if (token == null) {
            loggedIn = false

        }
        this.state = {
            username: '',
            password: '',
            loggedIn
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

    create = () => {
        var accounts = [
            {
                username: 'duclong',
                password: "123456"
            }

        ];
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4();
    }
    onSubmit = (data) => {
        data.preventDefault();
        const { username, password } = this.state;
        try {
            let accounts = Object.values(JSON.parse(localStorage.getItem('accounts')));
            let co = false;

            accounts.forEach((account) => {
                if (account.username === username && account.password === password) {
                    co = true;
                    localStorage.setItem('token', this.generateID());
                }
            })
            if (co === true) {
                this.setState({
                    loggedIn: true
                })
            } else {
                alert("Login failed")
            }
        } catch (err) {
            alert("Vui lòng tạo tài khoản")
        }

    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/manage" />
        }

        return (
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-pic js-tilt" data-tilt>
                                <img src="images/img-01.png" alt="IMG" />
                            </div>
                            <form className="login100-form validate-form" onSubmit={this.onSubmit}>
                                <span className="login100-form-title">
                                    Admin Login
                        </span>
                                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <input className="input100" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.onChange} />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                    <input className="input100" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange} />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="container-login100-form-btn"> <button className="login100-form-btn" type="Submit">
                                    Login
                            </button>
                                </div>
                                <div className="text-center p-t-12">
                                    <span className="txt1">
                                        Forgot
                            </span>
                                    <a className="txt2" href="">
                                        Username / Password?
                            </a>
                                </div>
                                <div class="text-center p-t-136">
                                    <a class="txt2" href="" onClick={this.create}>
                                        Create your Account
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                    </a>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login;