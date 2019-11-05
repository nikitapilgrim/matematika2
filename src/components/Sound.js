import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {sounds} from "../sounds";
import SoundOn from '../assets/svg/volume_on.svg';
import SoundOff from '../assets/svg/volume_off.svg';

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

export const Sound = () => {
    const [state, setState] = useState(false);

    useEffect(() => {
        if (state) {
            sounds.background.play();
        }
        if (!state) {
            sounds.background.pause();
        }
    }, [state]);

    const handlerClick = () => setState(!state);

    return (
        <Wrapper onClick={handlerClick}>
            {state ? <SoundOn/> : <SoundOff/>}
        </Wrapper>
    )
};