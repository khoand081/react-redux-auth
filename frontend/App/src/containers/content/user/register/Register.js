import React, { Component } from 'react';
import { RegisterStyle } from './Register.style';

class Register extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         name: '',
    //         email: '',
    //         password: '',
    //         password_confirm: '',
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
    //         name: this.state.name,
    //         email: this.state.email,
    //         password: this.state.password,
    //         password_confirm: this.state.password_confirm
    //     }
    //     console.log(user);
    // }

    render() {
        return (
            <RegisterStyle className="container" style={{ marginTop: '50px', width: '700px' }}>
                <h2 style={{ marginBottom: '40px' }}>Registration</h2>
                <form>
                    <div className="form-group">
                        <input className="form-control" name="name" placeholder="Name" type="text" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="email" placeholder="Email" type="email" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="password" placeholder="Password" type="password" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="password_confirm" placeholder="Confirm Password" type="password" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">
                            Register User
                        </button>
                    </div>
                </form>
            </RegisterStyle>
        );
    }
}

export default Register;
