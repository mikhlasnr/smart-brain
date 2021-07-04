import React, { Component } from "react";
import axios from "axios";
import { Spin, message } from "antd";
import { API_URL } from "../../db";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      isUpload: false,
    };
  }

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  onNameChange = e => {
    this.setState({ name: e.target.value });
  };

  onSubmitRegister = e => {
    this.setState({ isUpload: true });
    console.log(API_URL);
    axios
      .post(`${API_URL}/register`, {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      })
      .then(response => {
        if (response.data.user.id) {
          message.success("Register Success");
          this.props.onRouteChange("signin");
          alert("Registration Success");
        } else message.error("Register Failed");
        this.setState({ isUpload: false });
      })
      .catch(error => {
        this.setState({ isUpload: false });
        message.error("Register Failed");
      });
    // fetch(`${API_URL}/register`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     email: this.state.email,
    //     password: this.state.password,
    //     name: this.state.name,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(user => {
    //     if (user.id) {
    //       message.success("Register Success");
    //       this.props.onRouteChange("signin");
    //       alert("Registration Success");
    //     } else message.error("Register Failed");
    //     this.setState({ isUpload: false });
    //   })
    //   .catch(error => {
    //     this.setState({ isUpload: false });
    //     message.error("Register Failed");
    //   });
  };

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <Spin spinning={this.state.isUpload}>
                <legend className="f1 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent w-100"
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.onNameChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
              </Spin>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitRegister}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
