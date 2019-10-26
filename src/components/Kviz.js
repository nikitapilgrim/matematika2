import React from 'react';
import styled from "styled-components";
import {TextWithBorders} from "./TextWithBorders";
import Slide from "react-reveal/Slide";

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20rem;
  font-family: 'Luckiest Guy', cursive;
  color: #3a6269; 
  font-weight: bold;
  font-size: 10rem;
  pointer-events: none;
`;

export const Kviz = ({order, show}) => {
    return (
        <Wrapper>
            <Slide when={show} top>
                <TextWithBorders color="#3a6269" text={`Kviz ${order}`}/>
            </Slide>
        </Wrapper>
    )
};