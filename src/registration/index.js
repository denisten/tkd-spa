import React, {Component} from 'react';
import {FormWrapper, InputWrapper, ErrorMessage} from "../login-page";
import { ButtonWrapper } from '../UI/button'
import InputMask from 'react-input-mask';
import  {ImgWrapper} from '../UI/image'
import SuccessMessage from "../success-message";
import user from './user.png';
import {connect} from 'react-redux';
import {userRegistration} from '../redux/actions'

class RegistrationPage extends Component {

    state = {
        loginValue: '',
        passwordValue: '',
        confirmPasswordValue: '',
        emailValue: '',
        mobilePhone: '+7',
        errorMessage: '',
        gotError: '',
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
        const mobilePhoneLength = this.state.mobilePhone.split(' ').join('').length;
        if (mobilePhoneLength < 12) {
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
            const {loginValue, passwordValue, mobilePhone, emailValue} = this.state;
            this.props.userRegistration({loginValue, passwordValue, emailValue, mobilePhone});
        }
    };


    render() {
        return (
            <React.Fragment>
                {this.props.showSuccessMessage ? <SuccessMessage/> : ''}
                <FormWrapper
                    blur={this.props.showSuccessMessage}
                    onSubmit={async (event) => {
                        event.preventDefault();
                        await this.handleSubmit()
                    }}>
                    <ImgWrapper
                        src={user}
                        width={100}
                        height={75}
                    />
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
                        {this.state.errorMessage || this.props.errorMessage}
                    </ErrorMessage>
                </FormWrapper>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({appCondition: {showSuccessMessage, errorMessage}}) => {
    return ({
        showSuccessMessage,
        errorMessage
    })
};

const mapDispatchToProps = {userRegistration};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage)