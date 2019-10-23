import React, {useEffect, useRef, useState} from "react";
import styled, {keyframes} from "styled-components";
import useMount from "react-use/lib/useMount";

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


export const Answer = ({answer}) => {
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            const canvas = ref.current;
            const ctx = canvas.getContext("2d");
            ctx.font = "40px Courier";
            ctx.strokeStyle = 'white';
            ctx.fillText(answer.value, 210, 75)
        }
    }, [answer, ref]);

    return (
        <>
            {answer &&
            <Wrapper right={answer.right}>
                {!answer.right ? answer.value : 'BRAVO!'}
                {/*<canvas ref={ref} width={640} height={425}/>*/}
            </Wrapper>
            }
        </>

    )
};