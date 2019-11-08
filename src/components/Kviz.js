import React from 'react';
import styled from "styled-components";
import {TextWithBorders} from "./TextWithBorders";
import {easeCubic} from 'd3-ease'
import {useSpring, animated} from 'react-spring'

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
  font-family: 'Luckiest Guy', cursive;
  color: #3a6269; 
  font-weight: bold;
  font-size: 20rem;
  pointer-events: none;
`;

export const Kviz = ({order, show}) => {
    const { x } = useSpring({
        config: {
            duration: 1000,
            easing: easeCubic
        },
        from: { xy: [0, 0]},
        x: show ? 1 : 0,
    });

    return (
        <Wrapper>
            <animated.div style={{
                transform: x.interpolate({
                    range: [0, 1],
                    output: [-60, 0]
                }).interpolate(x => `translateY(${x}vh)`),
            }}>
                <TextWithBorders storeWidth={10} size={20} color="#3a6269" text={`Kviz ${order}`}/>
            </animated.div>
        </Wrapper>
    )
};