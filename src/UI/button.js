import styled from "styled-components";

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