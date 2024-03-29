import React from "react"

import styled from "styled-components"
import colors from "../colors"

const TextAndImageWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: ${props => (props.reversed ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: stretch;
  position: relative;

  height: auto;
  width: 100%;
  max-width: 100vw;
  margin: 40px auto;

  overflow-x: hidden;

  .text {
    ${props => (props.reversed ? `margin-left: 40px;` : `margin-right: 40px;`)}

    padding:60px;
    position: relative;
    width: calc(50% - 10px);
    max-width: 100vw;

    background-color: ${colors.beige};
    color: ${colors.text};
    text-align: justify;
    z-index: 99;

    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 2 1 70%;

    h2 {
      color: ${colors.olive};
      margin-top: 40px;
    }

    > h2 {
      color: ${colors.olive};
      align-self: center;
      position: absolute;
      margin-top: initial;
      top: 10px;
      left: 40px;
      ::after {
        content: "";
        display: block;
        min-height: 1px;
        min-width: 50vw;
        background-color: ${colors.olive};

        position: absolute;
        top: 1rem;
        left: 100%;
        ${props => (props.reversed ? `left:100%;` : `right:100%;`)}

        z-index:9;
      }
    }
  }
  .image {
    max-width: 50vw;
    width: 300px;
    height: auto;
    overflow: hidden;
    flex: ${props => props.imageFlex};
    z-index: 100;
  }

  @media screen AND (max-width: 1200px) {
    flex-wrap: wrap;
    .text {
      h2 {
        margin: 20px auto;
        position: initial;
        text-align: center;
      }
      position: inherit;
      order: 2;
      left: 0;
      right: 0;
      flex: 0 0 100%;
    }
    .image {
      max-width: 100%;
      flex: 1 0 100%;
      order: 1;
      max-height: 50vh;
    }
  }
`
const TextAndImageHistoire = props => (
  <TextAndImageWrapper reversed={props.reversed} imageFlex={props.imageFlex}>
    <div className="text">
      {props.title ? <h2>{props.title}</h2> : ""}
      {props.texte}
    </div>
    <div className="image">{props.image}</div>
  </TextAndImageWrapper>
)

export default TextAndImageHistoire
