import React from 'react'
import styled from "styled-components";
import successImage from './success.png';
import {ButtonWrapper} from '../login-page';
import history from "../history";

const SuccessMessageWrapper = styled.div`
  z-index: 100;
  width: 40vw;
  height: 70vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImgWrapper = styled.div`
  background-image: url(${successImage});
  background-size: contain;
  width: 20%;
  height: 20%;
  background-repeat: no-repeat;
`;

const SuccessMessage = () => {
    return (
        <SuccessMessageWrapper>
            <ImgWrapper/>
            You was successfully registered
            <ButtonWrapper onClick={() => {
                history.push('/')
            }}>
                Log in
            </ButtonWrapper>
        </SuccessMessageWrapper>
    )
};

export default SuccessMessage