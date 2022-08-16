import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
z-index: 1;
margin-right: auto;
margin-left: 50px;
padding-right: 180px;
padding-left: 50px;

@media screen and (max-width: 1000px) {
  padding-right: 50px;
  padding-left: 50px;
}
`;


export const Button = styled.button`
border-radius: 4px;
background: #0467fb;
white-space: nowrap;
padding: 10px 20px;
color: #fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;

@media screen and (max-width: 960px) {
  width: 100%;
}
`;