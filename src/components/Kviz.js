import React, {useEffect, useState} from 'react';
import styled, {css, keyframes} from "styled-components";
import {TextWithBorders} from "./TextWithBorders";
import useStoreon from "storeon/react";

const SlideTop = keyframes`
  0% {
    transform: translateY(-100vh);
  }
  100% {
    transform: translateY(0vh);
  }
`;

const SlideBottom = keyframes`
  0% {
    transform: translateY(0vh);
  }
  100% {
    transform: translateY(-100vh);
  }
`;
const SlideVert = props => css`
  animation: ${props.show ? SlideTop : SlideBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;


const Wrapper = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  filter: drop-shadow(0 0 0.3em black);
  transform: translateY(-100vh);
  ${props => props.show !== null && SlideVert};
`;

export const Kviz = ({order}) => {
    const [show, setShow] = useState(null);
    const [number, setNumber] = useState(order);
    const {dispatch, stage, start, kviz, modal, preloader, final} = useStoreon(
        'stage',
        'start',
        'kviz',
        'modal',
        'preloader',
        'final'
    );
    useEffect(() => {
        if (start && kviz.show) {
            setShow(true);
            setTimeout(() => {
                dispatch('kviz/hide');
            }, 800);
            setTimeout(() => {
                dispatch('stage/next');
            }, 1000)
        } else {
            setShow(false)
        }

    }, [kviz.show, start]);

    useEffect(() => {
        setNumber(order)
    }, [order]);

    return (
        <Wrapper show={show}>
            <TextWithBorders
                strokeColor={'#ffd2ba'}
                strokeWidth={'0.1em'}
                size={6}
                color="#662c0c"
                text={`Kviz ${order || 1}`}/>
        </Wrapper>
    )
};