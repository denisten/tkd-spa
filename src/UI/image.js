import styled from "styled-components";

export const ImgWrapper = styled.div`
  background-image: url(${props => props.src});
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: ${props => props.button ? 'pointer' : 'auto'};
`;