import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import useComponentSize from '@rehooks/component-size'
import useWindowSize from "react-use/lib/useWindowSize";
const { detect } = require('detect-browser');
const browser = detect();

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  pointer-events: none;
  filter: ${props => {
      if (props.answer) return false;
      return props.background ? `drop-shadow(0px 0px 2px rgba(0,0,0,1))` : `drop-shadow(5px 5px 0px rgba(0, 0, 0, 0.5))`
}};
  div  {
    &:not(:first-child) {
      position: absolute;
      top: 0;
      left: 0;
      ${props => props.center && 'transform: translateY(100%);' }
    }
  }
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
    ${props => props.background && !props.answer && `text-shadow: 0rem 0rem 2.5rem white;`};
    -webkit-text-stroke: ${props => {
        //if (props.answer) return false;
        if (browser.name === 'chrome' ) {
            if (!props.background) {
                return '5px'
            }
            return `0.01em`;
        }
        return `${props.stroke}px`
    }} white;
    color: ${props => props.color || 'white'};
    //z-index: -1;
    //color: transparent;
    //text-shadow: 2px 2px 20px white;
`;

const getFontSize = () => parseInt(getComputedStyle(document.documentElement).fontSize);

export const TextWithBorders = ({children, color, text, size = 6, center, storeWidth, background = true, answer}) => {
    const ref = useRef(null);
    const componentSize = useComponentSize(ref);
    const { width, height } = componentSize;
    const windowSize = useWindowSize();
    const [fontSize, setFontSize] = useState(getFontSize());

    useEffect(() =>{
        setFontSize(getFontSize());
    }, [windowSize]);

    return (
        <Wrapper answer={answer} background={background} center={center}>
            <HiddenText answer={answer} background={background} size={size} color={color} stroke={storeWidth || fontSize / 3} ref={ref}>{text}</HiddenText>
           {/* <Stage width={width+20} height={height+20}>
                <Layer>
                    <Text fontFamily={"Luckiest Guy"}
                          fontSize={fontSize * size}
                          text={text}
                          fill={color}
                          stroke="white"
                          strokeWidth={storeWidth || fontSize / 3}
                          shadowColor="white"
                          shadowBlur={10}
                          padding={10}
                    />
                </Layer>
            </Stage>*/}
        </Wrapper>
    )
};