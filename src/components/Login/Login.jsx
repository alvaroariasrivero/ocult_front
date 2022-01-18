import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../services/authservice";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Login = (props) => {

  const form = useRef();
  const checkBtn = useRef();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let navigate = useNavigate();

  const onChangeMail = (e) => {
    const mail = e.target.value;
    setMail(mail);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(mail, password).then(
        () => {
          navigate(`/profile`);
      
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
        }
      );
    } else {
      console.log("Hemos tenido un error")
    }
  };

  return <div className="container">

    <div className="div_form">
      <img src="../assets/icons/LogoLightOcult.png" alt="logoOcult" className='logoForm' />

      <Form onSubmit={handleSubmit} ref={form}>
        <div className="form-group">
          <label htmlFor="mail">Email</label>
          <Input
            type="text"
            className="form-control"
            name="mail"
            value={mail}
            onChange={onChangeMail}
            validations={[required]}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onChangePassword}
            validations={[required]}
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-block">Login</button>
        </div>

        {message && (
          <div className="form-group">
            <div className="alert" role="alert">
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
        <Link to="/register">¿No tienes cuenta? Registrate</Link>
      </Form>

    </div>
  </div>
}
export default Login;
