import React, {Component} from 'react';
import Service from '../service';
import {FormWrapper, InputWrapper, ButtonWrapper, ErrorMessage} from "../login-page";
import InputMask from 'react-input-mask';
import SuccessMessage from "../success-message";

export default class RegistrationPage extends Component {

    state = {
        loginValue: '',
        passwordValue: '',
        confirmPasswordValue: '',
        emailValue: '',
        mobilePhone: '+7',
        errorMessage: '',
        gotError: '',
        showSuccessMessage: false
    };
    checkLoginField = () => {
        if (this.state.loginValue.length === 0) {
            this.setState({errorMessage: 'Enter login'})
        }
    };
    checkPasswordField = () => {
        if (this.state.passwordValue.length === 0) {
            this.setState({errorMessage: 'Enter password'})
        }
    };
    checkPasswordConfirmField = () => {
        if (this.state.confirmPasswordValue.length === 0) {
            this.setState({errorMessage: 'Enter password confirm'})
        }
    };
    checkEmailField = () => {
        if (this.state.emailValue.length === 0) {
            this.setState({errorMessage: 'Enter email'})
        }
    };
    checkMobilePhoneField = () => {
        if (this.state.mobilePhone.length === 0) {
            this.setState({errorMessage: 'Enter mobile phone'})
        }
    };
    checkEqualsPasswords = () => {
        if (this.state.passwordValue !== this.state.confirmPasswordValue) {
            this.setState({errorMessage: 'Passwords do not match'})
        }
    };

    checkFields = () => {
        this.setState({errorMessage: ''})
        this.checkLoginField();
        this.checkPasswordField();
        this.checkPasswordConfirmField();
        this.checkEmailField();
        this.checkMobilePhoneField();
        this.checkEqualsPasswords();
    };


    handleSubmit = async () => {
        await this.checkFields();
        if (this.state.errorMessage.length === 0) {
            try {
                const {loginValue, passwordValue, mobilePhone, emailValue} = this.state;
                await Service.registration(loginValue, passwordValue, emailValue, mobilePhone)
                this.setState({showSuccessMessage: true})
                // history.push('/')
            } catch (err) {
                this.setState({errorMessage: 'Username is reserved'})
            }
        }
    };


    render() {
        return (
            <React.Fragment>
                {this.state.showSuccessMessage ? <SuccessMessage/> : ''}
                <FormWrapper
                    blur={this.state.showSuccessMessage}
                    onSubmit={async (event) => {
                        event.preventDefault();
                        await this.handleSubmit()
                    }}>
                    <InputWrapper
                        value={this.state.loginValue}
                        onChange={(event) => {
                            this.setState({loginValue: event.target.value})
                        }}
                    />
                    Login
                    <InputWrapper
                        value={this.state.passwordValue}
                        type='password'
                        onChange={(event) => {
                            this.setState({passwordValue: event.target.value})
                        }}
                    />
                    Password
                    <InputWrapper
                        value={this.state.confirmPasswordValue}
                        type='password'
                        onChange={(event) => {
                            this.setState({confirmPasswordValue: event.target.value})
                        }}
                    />
                    Confirm password
                    <InputWrapper
                        value={this.state.emailValue}
                        onChange={(event) => {
                            this.setState({emailValue: event.target.value})
                        }}
                    />
                    Email
                    <InputMask {...this.props} mask="+7 999 999 99 99" maskChar=" "
                               value={this.state.mobilePhone}
                               onChange={(event) => {
                                   this.setState({mobilePhone: event.target.value})
                               }}>
                        {() =>
                            <InputWrapper/>
                        }
                    </InputMask>
                    Mobile number
                    <ButtonWrapper>
                        Register
                    </ButtonWrapper>
                    <ErrorMessage>
                        {this.state.errorMessage}
                    </ErrorMessage>
                </FormWrapper>
            </React.Fragment>
        )
    }
}