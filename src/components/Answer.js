import React from "react";
import styled, {keyframes} from "styled-components";

const Wrong = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    transform: scale3d(.9, .9, .9);
  }

  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40%, 60%, 80% {
    transform: scale3d(0.9, 0.9, .9);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;


const Bravo = keyframes`

`;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    height: 100vh;
    width: 100vw;
    animation: 0.6s ${Wrong} ease-out infinite;
    font-size: 20rem;
    font-weight: bold;
    color: red;
    z-index: 999;
    text-shadow: 0px 1px 0 rgb(255,255,255),0px -1px 0 rgb(255,255,255),1px 0px 0 rgb(255,255,255),-1px 0px 0 rgb(255,255,255),1px 1px 0 rgb(255,255,255),1px -1px 0 rgb(255,255,255),-1px 1px 0 rgb(255,255,255),-1px -1px 0 rgb(255,255,255),0px 2px 0 rgb(255,255,255),0px -2px 0 rgb(255,255,255),2px 0px 0 rgb(255,255,255),-2px 0px 0 rgb(255,255,255),2px 2px 0 rgb(255,255,255),2px -2px 0 rgb(255,255,255),-2px 2px 0 rgb(255,255,255),-2px -2px 0 rgb(255,255,255),0px 3px 0 rgb(255,255,255),0px -3px 0 rgb(255,255,255),3px 0px 0 rgb(255,255,255),-3px 0px 0 rgb(255,255,255),3px 3px 0 rgb(255,255,255),3px -3px 0 rgb(255,255,255),-3px 3px 0 rgb(255,255,255),-3px -3px 0 rgb(255,255,255),0px 4px 0 rgb(255,255,255),0px -4px 0 rgb(255,255,255),4px 0px 0 rgb(255,255,255),-4px 0px 0 rgb(255,255,255),4px 4px 0 rgb(255,255,255),4px -4px 0 rgb(255,255,255),-4px 4px 0 rgb(255,255,255),-4px -4px 0 rgb(255,255,255),0px 5px 0 rgb(255,255,255),0px -5px 0 rgb(255,255,255),5px 0px 0 rgb(255,255,255),-5px 0px 0 rgb(255,255,255),5px 5px 0 rgb(255,255,255),5px -5px 0 rgb(255,255,255),-5px 5px 0 rgb(255,255,255),-5px -5px 0 rgb(255,255,255);
`;


export const Answer = ({answer}) => {

    return (
        <>
            {answer &&
            <Wrapper right={answer.right}>
                {!answer.right ? answer.value : 'BRAVO'}
            </Wrapper>
            }
        </>

    )
};