import React, {Component} from 'react'
import styled from "styled-components";
import successImage from './success.png';
import {ButtonWrapper} from '../UI/button';
import { connect } from 'react-redux';
import {redirectToRootComponent} from '../redux/actions'
import { ImgWrapper} from "../UI/image";

const SuccessMessageWrapper = styled.form`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SuccessMessageSpanWrapper = styled.span`
  margin: 4%;
`;
class SuccessMessage extends Component {

    render() {
        return (
            <SuccessMessageWrapper
                onSubmit={()=> {
                this.props.redirectToRootComponent()
            }}>
                <ImgWrapper
                    src={successImage}
                    width={100}
                    height={100}
                />
                <SuccessMessageSpanWrapper>
                    You was successfully registered
                </SuccessMessageSpanWrapper>
                <ButtonWrapper>
                    Log in
                </ButtonWrapper>
            </SuccessMessageWrapper>
        )
    }
}

const mapDispatchToProps = {
    redirectToRootComponent
};

export default connect(null, mapDispatchToProps)(SuccessMessage)