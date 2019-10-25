import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import useComponentSize from '@rehooks/component-size'

const Wrapper = styled.div`
  position: relative;
  pointer-events: none;
  font-family: 'Luckiest Guy', cursive;
  font-size: 17px;
  transform: scale(1.5);
  left: 1rem;
  top: -50px;
  filter: drop-shadow(0px 0px 1px black);
  svg {
    &:not(:first-child) {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 99%;
        height: 99%;
        filter: drop-shadow(0px 0px 10px white);
    }
  }
`;

const HiddenText = styled.span`
    position: absolute;
    top: -0.1em;
    left: 0.07em;
    font-size: 2.9em;
    z-index: -1;
    color: transparent;
    text-shadow: 2px 2px 20px white;
`;

export const TextWithBorders = ({children, color}) => {

    return (
        <Wrapper>
            <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 400 75" width="100%" height="100%"
                 style={{width: '100%', height: '100%'}}>
                <defs>
                    <filter id="whiteOutlineEffect">
                        <feMorphology in="SourceAlpha" result="MORPH" operator="dilate" radius="4"/>
                        <feColorMatrix in="MORPH" result="WHITENED" type="matrix"
                                       values="-1 0 0 1 0, 0 -1 0 1 0, 0 0 -1 1 0, 0 0 0 1 0"/>
                        <feMerge>
                            <feMergeNode in="WHITENED"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                <text x="10" y="50" fill={color} fontSize="60" filter="url(#whiteOutlineEffect)">
                    {children}
                </text>
            </svg>
            <HiddenText>{children}</HiddenText>
        </Wrapper>
    )
};