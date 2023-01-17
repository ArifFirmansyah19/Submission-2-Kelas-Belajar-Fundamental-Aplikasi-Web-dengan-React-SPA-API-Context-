import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class LoginInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onEmailChangeHandler(event) {
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

    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div className="login-container">
      <p className="form-login-title">Silahkan login</p>
      <form className="form-login" onSubmit={this.onSubmitHandler}>
        <label>Email Address</label>
          <input type="email" placeholder="Masukkan email anda ..." value={this.state.email} onChange={this.onEmailChangeHandler}/>  
        <label>Password</label>
          <input type="password" placeholder="Masukkan Password Anda dengan benar" value={this.state.password} onChange={this.onPasswordChangeHandler}/>
          <center><button>Masuk</button></center>
        <center><p>Belum punya akun? <Link to="/register">Ayo Daftar di Sini</Link></p></center>
      </form>
      
    </div>
    );
  }
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
