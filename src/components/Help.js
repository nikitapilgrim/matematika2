import React from 'react';
import styled from "styled-components";
import HelpIcon from '../assets/svg/help.svg'

const Wrapper = styled.div`
    width: 5rem;
    height: 5rem;
    z-index: 300;
    cursor: pointer;
    background-size: cover;
    
    svg {
      width: 100%;    
      filter: drop-shadow(0 0 3px #FFF);
    }
`;

export const Help = () => {
    return (
        <Wrapper>
            <HelpIcon/>
        </Wrapper>
    )
};