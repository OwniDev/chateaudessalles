import React from "react"
import styled from "styled-components"
import colors from "../colors"

const SubTitleWrapper = styled.div`
  width: max-content;
  max-width: 100vw;
  height: 60px;
  margin: 20px 0px;

  background-color: ${colors.beige};
  color: ${colors.olive};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0px;
    margin-left: 20px;
    padding: 20px;
  }

  @media screen AND (max-width: 900) {
    h1 {
      margin-left: 0;
      margin-right: 0;
    }
  }

  @media screen AND (max-width: 600px) {
    width: 100vw;
    /* padding: 20px 0px; */
    box-sizing: content-box;
    justify-content: flex-start;
    h1 {
      padding: 0px;
      font-size: 1.8rem;
    }
  }
`

const Title = ({ title }) => (
  <SubTitleWrapper>
    <h1>{title}</h1>
  </SubTitleWrapper>
)

export default Title
