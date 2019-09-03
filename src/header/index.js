import React, {Component} from 'react';
import styled from 'styled-components';
import {ImgWrapper} from "../UI/image";
import logOut from './logout.png';
import {connect} from 'react-redux';
import {logout} from "../redux/actions";

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 10%;
  display: flex;
  position: fixed;
  top:0;
  min-height: 5%;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
`;

const HeaderElement = styled.div`
  padding-right: 5%;
  font-size: 2em;
  min-width: 6%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1%;
  &:hover{
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const TextWrapper = styled.span`
  color: white;
`;

class Header extends Component{

    logout = () => {
        this.props.logout()
    };

    render() {
        return (
            <HeaderWrapper>
                <HeaderElement>
                    <TextWrapper>
                        HOMEPAGE
                    </TextWrapper>
                </HeaderElement>
                <HeaderElement>
                    <TextWrapper>
                        CONTACTS
                    </TextWrapper>
                </HeaderElement>
                <HeaderElement>
                    <TextWrapper>
                        PORTFOLIO
                    </TextWrapper>
                </HeaderElement>
                <HeaderElement>
                    <TextWrapper>
                        LOGOUT
                    </TextWrapper>
                </HeaderElement>
            </HeaderWrapper>
        );
    }
}

const mapDispatchToProps = { logout };

export default connect(null, mapDispatchToProps)(Header);