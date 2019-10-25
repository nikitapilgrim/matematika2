import React from 'react';
import styled from "styled-components";
import {TextWithBorders} from "./TextWithBorders";

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Luckiest Guy', cursive;
  color: #3a6269; 
  font-weight: bold;
  font-size: 10rem;
`;

export const Kviz = ({order}) => {
    return (
        <Wrapper>
            <TextWithBorders color="#3a6269;">
                Kviz {order}
            </TextWithBorders>
        </Wrapper>
    )
};