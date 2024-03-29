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

    padding:0px 50px;
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
    flex: 1 1 30em;
    span {
      position: absolute;
      width: 1px;
      right: 0px;
      height: 200px;
      background-color: ${colors.olive};
      content: " ";
      z-index: 2;
    }
    h2 {
      color: ${colors.olive};
      align-self: center;
      position: absolute;
      text-align: left;
      top: 10px;
      left: 40px;
      ${props =>
        props.reversed ? `padding-left:10px;` : `padding-right:10px;`}

      ::after {
        content: "";
        display: block;
        min-height: 1px;
        min-width: 50vw;
        width: 100vw;
        background-color: ${colors.olive};

        position: absolute;
        top: 1rem;
        ${props => (props.reversed ? `right:100%;` : `left:100%;`)}

        z-index:9;
      }
    }
  }
  .image {
    max-width: 50vw;
    height: 100%;
    max-height: 450px;
    overflow-y: hidden;
    align-self: stretch;
    width: auto;
    flex: 0 2 30em;
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
    }
  }
`
const TextAndImageAgriculture = props => (
  <TextAndImageWrapper reversed={props.reversed}>
    <div className="text">
      <h2>{props.title}</h2>
      <p>{props.texte}</p>
      {props.barre ? <span></span> : ""}
    </div>
    <div className="image">{props.image}</div>
  </TextAndImageWrapper>
)

export default TextAndImageAgriculture
