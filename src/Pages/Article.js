import React from "react";
import CardArticle from "../Components/CardArticle";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import AddComment from "../Components/AddComment";


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #D9D9D9;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

const Container = styled.div`
  padding: 20px;
  width: 100%;
  display: flex; 
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const GapContainer = styled.div`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  flex: 1; 
`

function Article() {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <GapContainer>
          <CardArticle />
        </GapContainer>
      </Container>
    </div>
  )
}

export default Article;
