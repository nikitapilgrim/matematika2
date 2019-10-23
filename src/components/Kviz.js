import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
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
            Kviz {order}
        </Wrapper>
    )
};