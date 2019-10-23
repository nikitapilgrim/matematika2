import React, {useEffect, useState, useRef} from "react";
import styled, {keyframes} from "styled-components";
import ResponsiveCanvas from 'react-responsive-canvas';
import useMount from "react-use/lib/useMount";
import FontFaceObserver from 'fontfaceobserver';
import useComponentSize from '@rehooks/component-size'


const Wrong = keyframes`
  from {
    transform: scale3d(1.4, 1.4, 1.4);
  }

  10%, 20% {
    transform: scale3d(1.4, 1.4, 1.4);
  }

  30%, 50%, 70%, 90% {
    transform: scale3d(1.6, 1.6, 1.6);
  }

  40%, 60%, 80% {
    transform: scale3d(1.4, 1.4, 1.4);
  }

  to {
    transform: scale3d(1.6, 1.6, 1.6);
  }
`;


const Bravo = keyframes`
  from {
    transform: scale(0);
  }

  50% {
    transform: scale(1.4);
  }
  80% {
    transform: scale(1.6) rotate(-10deg);
  }

  to {
    transform: scale(0);
  }
`;

const Wrapper = styled.div`
    font-family: 'Luckiest Guy', cursive;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    height: 100vh;
    width: 100vw;
    animation-name: ${props => props.right ? Bravo : Wrong};
    animation-duration: ${props => props.right ? '1s' : '0.6s'};
    animation-timing-function: ${props => !props.right && 'ease-out'};
    animation-iteration-count: ${props => !props.right && 'infinite'};
    font-weight: bold;
    color: ${props => props.right ? '#1dc91d' : 'red'};
    z-index: 999;
    text-shadow:0px 1px 0 rgb(255,255,255),0px -1px 0 rgb(255,255,255),1px 0px 0 rgb(255,255,255),-1px 0px 0 rgb(255,255,255),1px 1px 0 rgb(255,255,255),1px -1px 0 rgb(255,255,255),-1px 1px 0 rgb(255,255,255),-1px -1px 0 rgb(255,255,255),0px 2px 0 rgb(255,255,255),0px -2px 0 rgb(255,255,255),2px 0px 0 rgb(255,255,255),-2px 0px 0 rgb(255,255,255),2px 2px 0 rgb(255,255,255),2px -2px 0 rgb(255,255,255),-2px 2px 0 rgb(255,255,255),-2px -2px 0 rgb(255,255,255),0px 3px 0 rgb(255,255,255),0px -3px 0 rgb(255,255,255),3px 0px 0 rgb(255,255,255),-3px 0px 0 rgb(255,255,255),3px 3px 0 rgb(255,255,255),3px -3px 0 rgb(255,255,255),-3px 3px 0 rgb(255,255,255),-3px -3px 0 rgb(255,255,255),0px 4px 0 rgb(255,255,255),0px -4px 0 rgb(255,255,255),4px 0px 0 rgb(255,255,255),-4px 0px 0 rgb(255,255,255),4px 4px 0 rgb(255,255,255),4px -4px 0 rgb(255,255,255),-4px 4px 0 rgb(255,255,255),-4px -4px 0 rgb(255,255,255),0px 5px 0 rgb(255,255,255),0px -5px 0 rgb(255,255,255),5px 0px 0 rgb(255,255,255),-5px 0px 0 rgb(255,255,255),5px 5px 0 rgb(255,255,255),5px -5px 0 rgb(255,255,255),-5px 5px 0 rgb(255,255,255),-5px -5px 0 rgb(255,255,255),0px 6px 0 rgb(255,255,255),0px -6px 0 rgb(255,255,255),6px 0px 0 rgb(255,255,255),-6px 0px 0 rgb(255,255,255),6px 6px 0 rgb(255,255,255),6px -6px 0 rgb(255,255,255),-6px 6px 0 rgb(255,255,255),-6px -6px 0 rgb(255,255,255),0px 7px 0 rgb(255,255,255),0px -7px 0 rgb(255,255,255),7px 0px 0 rgb(255,255,255),-7px 0px 0 rgb(255,255,255),7px 7px 0 rgb(255,255,255),7px -7px 0 rgb(255,255,255),-7px 7px 0 rgb(255,255,255),-7px -7px 0 rgb(255,255,255),0px 8px 0 rgb(255,255,255),0px -8px 0 rgb(255,255,255),8px 0px 0 rgb(255,255,255),-8px 0px 0 rgb(255,255,255),8px 8px 0 rgb(255,255,255),8px -8px 0 rgb(255,255,255),-8px 8px 0 rgb(255,255,255),-8px -8px 0 rgb(255,255,255);
    font-size:100px;
`;


const Canvas = ({text}) => {
    const [ref, setRef] = useState(null);
    let size = useComponentSize(ref);
    // size == { width: 100, height: 200 }
    let {width, height} = size;
    const FONT_NAME = 'Luckiest Guy';
    const [fontLoaded, setFontLoaded] = useState(null);
    console.log(width, height)

    useMount(() => {
        const font = new FontFaceObserver(FONT_NAME);
        font.load().then(function () {
            setFontLoaded(true);
        });

    });

    useEffect(() => {
        if (ref.current && fontLoaded) {
            const ctx = ref.current.getContext("2d");
            ctx.font = `20rem "${FONT_NAME}"`;
            ctx.lineWidth = 20;
            ctx.strokeStyle = 'white';
            ctx.fillStyle = 'red';
            ctx.strokeText(text, 210, 75);
            ctx.fillText(text, 210, 75)
        }
    }, [text, ref, fontLoaded]);

    return (
        <ResponsiveCanvas
            canvasRef={el => (setRef({current: el}))}
        />
    )
};

export const Answer = ({answer}) => {
    return (
        <>
            {answer &&
            <Wrapper right={answer.right}>
                {!answer.right ? answer.value : 'BRAVO!'}
                {/*<Canvas text={answer.value}/>*/}
            </Wrapper>
            }
        </>

    )
};