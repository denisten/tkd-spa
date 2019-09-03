import React, {Component} from 'react';
import styled from 'styled-components';
import lockImg from './lock.png';
import {ImgWrapper} from "../UI/image";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {ButtonWrapper} from "../UI/button";
import {checkToken, userAuthorized} from "../redux/actions";

const TextWrapper = styled.span`
  text-align: center;
  font-size: 1em;
  padding: 5%;
  opacity: .5;
`;


export const FormWrapper = styled.form`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    filter: blur(${props =>props.blur ? '50px' : 'none' });
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


    componentDidMount() {
        this.props.checkToken();
    }

    async handleSubmit() {
        const login = this.state.loginValue;
        const password = this.state.passwordValue;
        if (login === '') {
            this.setState({ loginFieldEmpty: true});
        } else if (password === '') {
            this.setState({ passwordFieldEmpty: true});
        } else {
            try {
                this.props.userAuthorized({login, password });
                this.setState({ gotError: false, errorMessage: ''})
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
                    <ImgWrapper
                        src={lockImg}
                        height={150}
                        width={150}
                    />
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
                <ErrorMessage>
                    {this.props.errorMessage}
                </ErrorMessage>
            </FormWrapper>
        )
    }
}

const mapStateToProps = ({ appCondition: {errorMessage, authorized}}) => {
    return ({
        errorMessage,
        authorized
    })
};

const mapDispatchToProps = {
    userAuthorized,
    checkToken
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);