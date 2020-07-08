import React, { Component } from 'react';
import { LoginStyle } from './Login.style';

class Login extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         email: '',
    //         password: '',
    //         errors: {}
    //     }
    //     this.handleInputChange = this.handleInputChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleInputChange(e) {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const user = {
    //         email: this.state.email,
    //         password: this.state.password,
    //     }
    //     console.log(user);
    // }

    render() {
        return (
            <LoginStyle className="container" style={{ marginTop: '50px', width: '700px' }}>
                <h2 style={{ marginBottom: '40px' }}>Login</h2>
                <form>
                    <div className="form-group">
                        <input className="form-control" name="email" placeholder="Email" type="email" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="password" placeholder="Password" type="password" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">
                            Login User
                        </button>
                    </div>
                </form>
            </LoginStyle>
        );
    }
}

export default Login;
