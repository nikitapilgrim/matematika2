import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import useComponentSize from '@rehooks/component-size'
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import useWindowSize from "react-use/lib/useWindowSize";

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  pointer-events: none;
  div  {
    &:not(:first-child) {
      position: absolute;
      top: 0;
      left: 0;
      ${props => props.center && 'transform: translateY(100%);' }
    }
  }
  //font-family: 'Luckiest Guy', cursive;
  //font-size: 17px;
  //transform: scale(1.5);
  //left: 1rem;
  //top: -50px;
  //filter: drop-shadow(0px 0px 1px black);
  /*svg {
    &:not(:first-child) {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 99%;
        height: 99%;
        filter: drop-shadow(0px 0px 10px white);
    }
  }*/
`;

const HiddenText = styled.div`
    display: inline-block;
    white-space: nowrap;
    //position: absolute;
    //top: -0.1em;
    //left: 0.07em;
    font-size: ${props => `${props.size}rem`};
    font-family: 'Luckiest Guy', cursive;
    font-weight: bold;
    color: transparent;
    //z-index: -1;
    //color: transparent;
    //text-shadow: 2px 2px 20px white;
`;

const getFontSize = () => parseInt(getComputedStyle(document.documentElement).fontSize);

export const TextWithBorders = ({children, color, text, size = 6, center}) => {
    const ref = useRef(null);
    const componentSize = useComponentSize(ref);
    const { width, height } = componentSize;
    const windowSize = useWindowSize();
    const [fontSize, setFontSize] = useState(getFontSize());

    useEffect(() =>{
        setFontSize(getFontSize());
    }, [windowSize]);


    return (
        <Wrapper center={center}>
            <HiddenText size={size} color={color} ref={ref}>{text}</HiddenText>
            <Stage width={width+20} height={height+20}>
                <Layer>
                    <Text fontFamily={"Luckiest Guy"}
                          fontSize={fontSize * size}
                          text={text}
                          fill={color}
                          stroke="white"
                          strokeWidth={fontSize / 3}
                          shadowColor="white"
                          shadowBlur={10}
                          padding={10}
                    />
                </Layer>
            </Stage>
        </Wrapper>
    )
};