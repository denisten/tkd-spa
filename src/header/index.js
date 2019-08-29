import React, {Component} from 'react';
import styled from 'styled-components';
import Service from '../service';

const HeaderWrapper = styled.form`
    width: 400px;
    height: 500px;
    background-color: #fff;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ButtonWrapper = styled.button`
    margin-top: 20px;
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: .8em 1em calc(.8em + 3px);
  border-radius: 3px;
  background: rgb(64,199,129);
  box-shadow: 0 -3px rgb(53,167,110) inset;
  transition: 0.2s;
&:hover { background: rgb(53, 167, 110); }
&:active {
  background: rgb(33,147,90);
  box-shadow: 0 3px rgb(33,147,90) inset;
}
`;

const InputWrapper = styled.input`
    padding-top: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
    width: 200px;
    text-align: center;
    font-size: 1em;
`;

const ErrorMessage = styled.span`
    font-size: 1em;
    font: red;
`;

class Header extends Component {

    state = {
        gotError: false,
        passwordFieldEmpty: false,
        loginFieldEmpty: false
    };

    constructor() {
        super();
        this.loginInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
    }
    async handleSubmit() {
        const login = this.loginInputRef.current.value;
        const password = this.passwordInputRef.current.value;
        if (login === '') {
            this.setState({ loginFieldEmpty: true});
        } else if (password === '') {
            this.setState({ passwordFieldEmpty: true});
        } else {
            const myService = new Service();
            try {
                await myService.authorize(login, password);
                // window.location.href = '/content'
            } catch (error) {
                this.setState({gotError: true})
                console.log('error');
            }
        }
    }

    render() {
        console.log(this.state)
        return (
            <HeaderWrapper
                onSubmit={(event) => {
                    event.preventDefault();
                    this.handleSubmit()
                }}>
                    <InputWrapper
                        defaultValue="Login"
                        ref={this.loginInputRef}
                        onFocus={() => {
                            this.loginInputRef.current.value = ''
                        }}
                    />
                {this.state.loginFieldEmpty ?
                    <ErrorMessage>
                        Enter your login
                    </ErrorMessage> : ''}
                    <InputWrapper
                        defaultValue="Password"
                        ref={this.passwordInputRef}
                        type="password"
                        onFocus={() => {
                            this.passwordInputRef.current.value = ''
                        }}
                    />
                {this.state.passwordFieldEmpty ?
                    <ErrorMessage>
                        Enter your password
                    </ErrorMessage> : ''}
                    <ButtonWrapper>
                        Вход
                    </ButtonWrapper>
            </HeaderWrapper>
        )
    }
}

export default Header;