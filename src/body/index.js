import React, {Component} from 'react';
import styled from 'styled-components';
import {ImgWrapper} from "../UI/image";
import reactImg from './react.png';
import mountImg from './mount.jpg';

const BodyWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: min-content;
`;

const ItemRowWrapper = styled.div`
min-height: 40%;
border: 1px solid white;
  padding-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const ItemWrapper = styled.div`
    border: 1px solid gold;
    border-radius: 10px;
    background-color: black;
    color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 30%;
`;

const ItemImageWrapper = styled.div`
  width: 50%;
  height: 30vh;
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const TextWrapper = styled.span`
  font-family: Cantarell,serif;
  font-size: 1.2em;
  text-align: right;
`;

const FullScreenImg = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${mountImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

class Body extends Component {
    render() {
        return (
            <BodyWrapper>
                <FullScreenImg/>
                <ItemRowWrapper>
                    <ItemWrapper>
                        <TextWrapper>
                            <h1> React </h1> <br/>
                            React is the best solution for Single Page Applications<br/>
                            Nowadays Rect is the most popular framework (library) for SPA<br/>
                            It has huge developers community and backstage help from FaceBook
                        </TextWrapper>
                    </ItemWrapper>
                    {/*<ItemImageWrapper*/}
                    {/*    src={reactImg}*/}
                    {/*/>*/}
                </ItemRowWrapper>
                <TextWrapper>
                </TextWrapper>
            </BodyWrapper>
        )
    }
}

export default Body;