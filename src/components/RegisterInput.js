import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class RegisterInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
        }

        this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
        this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
        this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onNameChangeHandler(event) {
        this.setState(() => {
            return {
                name: event.target.value,
            };
        });
    }

    onEmailChangeHandler(event){
        this.setState(() => {
            return {
                email: event.target.value,
            };
        });
    }

    onPasswordChangeHandler(event) {
        this.setState(() => {
            return {
                password: event.target.value,
            };
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();

        this.props.register({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        });
    }

    render(){
        return(
            <div className="register-container">
            <h2 className="form-register-title">Register</h2>
            <form className="form-register" onSubmit={this.onSubmitHandler} >
                <input type="text" placeholder="Isikan nama Anda" value={this.state.name} onChange={this.onNameChangeHandler} />
                <input type="text" placeholder="Masukkan email anda dengan benar" value={this.state.email} onChange={this.onEmailChangeHandler} />
                <input type="password" placeholder="Passwordnya yang mudah diingat ya" value={this.state.password} onChange={this.onPasswordChangeHandler} />
                <center><button>Register</button></center>
                <center><p>Sudah punya akun? Ayo <Link to="/login">Login</Link> di Sini </p></center>
            </form>
            </div>
        )
    }
}

RegisterInput.propTypes={
    register: PropTypes.func.isRequired,
};

export default RegisterInput;