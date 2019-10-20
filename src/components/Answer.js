import React from "react";
import styled, {keyframes} from "styled-components";

const Wrong = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    transform: scale3d(2.1, 2.1, 2.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
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
    animation: 1s ${Wrong} ease-out;
    font-size: 99px;
    color: red;
`;

export const Answer = ({answer}) => {

    return (
        <>
            {answer && !answer.right &&
            <Wrapper>
                {answer.value}
            </Wrapper>
            }
        </>

    )
};