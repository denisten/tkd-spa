import React, {Component} from 'react';
import styled from 'styled-components';
import Service from '../service';
import lockImg from './lock.png';
import {Link} from 'react-router-dom';
import history from "../history";

const TextWrapper = styled.span`
  text-align: center;
  font-size: 1em;
  padding: 5%;
  opacity: .5;
`;

const ImgWrapper = styled.div`
  background-image: url(${lockImg});
  width: 100px;
  height: 100px;
  background-size: contain;
`;

export const FormWrapper = styled.form`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    filter: blur(${props =>props.blur ? '50px' : 'none' });
`;

export const ButtonWrapper = styled.button`
  width: 10vw;
    margin-top: 20px;
   font-weight: 700;
    color: white;
    text-decoration: none;
    padding: .8em 1em calc(.8em + 3px);
    border-radius: 3px;
    background: black;
    transition: 0.2s;
&:hover { 
  background: black;
  transform: scale(1.3); 
}
&:active {
  box-shadow: 0 3px black inset;
}
&:focus {
  box-shadow: 0 3px black inset;
  outline: none;
}
`;

export const InputWrapper = styled.input`
    border: none;
    border-bottom: 1px solid grey;
    padding-top: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
    width: 300px;
    text-align: center;
    font-size: 2em;
    &:focus {
      outline: none;
      border-bottom: 1px solid deepskyblue;
    }
`;

export const ErrorMessage = styled.span`
    padding: 20px;
    font-size: 1em;
    color: red;
`;

class LoginPage extends Component {

    state = {
        gotError: false,
        passwordFieldEmpty: false,
        loginFieldEmpty: false,
        loginValue: 'login',
        passwordValue: 'password',
        errorMessage: ''
    };

    async handleSubmit() {
        const login = this.state.loginValue;
        const password = this.state.passwordValue;
        if (login === '') {
            this.setState({ loginFieldEmpty: true});
        } else if (password === '') {
            this.setState({ passwordFieldEmpty: true});
        } else {
            try {
                await Service.authorize(login, password);
                this.setState({ gotError: false, errorMessage: ''})
                history.push('/landing')
            } catch (error) {
                this.setState({gotError: true, errorMessage: 'Wrong password/login'})
            }
        }
    }

    render() {
        return (
            <FormWrapper
                onSubmit={async (event) => {
                    event.preventDefault();
                    await this.handleSubmit()
                }}>
                    <ImgWrapper/>
                    <InputWrapper
                        defaultValue= {this.state.loginValue}
                        onChange={(event) => {
                            this.setState({loginValue: event.target.value})
                        }}

                    />
                {this.state.loginFieldEmpty ?
                    <ErrorMessage>
                        Enter your login
                    </ErrorMessage> : ''}
                    <InputWrapper
                        defaultValue= {this.state.passwordValue}
                        type="password"
                        onChange={(event) => {
                            this.setState({passwordValue: event.target.value})
                        }}
                    />
                {this.state.passwordFieldEmpty ?
                    <ErrorMessage>
                        Enter your password
                    </ErrorMessage> : ''}
                    <ButtonWrapper>
                        Sign in
                    </ButtonWrapper>
                    <TextWrapper>
                        If you don't have account yet you can <br/>
                        <Link to='/registration' style={{ textDecoration: 'none'}}> Create account </Link>
                    </TextWrapper>
                {this.state.gotError ? <ErrorMessage> {this.state.errorMessage} </ErrorMessage> : ''}
            </FormWrapper>
        )
    }
}

export default LoginPage;