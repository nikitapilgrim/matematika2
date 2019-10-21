import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {sounds} from "../sounds";
import soundOn from '../assets/img/sound_on.png';
import soundOff from '../assets/img/sound_off.png';

const Wrapper = styled.div`
    position: fixed;
    top: 50px;
    left: 50px;
    z-index: 300;
    cursor: pointer;
    background-size: cover;
    img {
        max-width: 100%;
        height: auto;
    }
`;

export const Sound = () => {
    const [state, setState] = useState(true);
    const [src, setSrc] = useState(soundOn);

    useEffect(() => {
        if (state) {
            sounds.background.play();
            setSrc(soundOn);
        }
        if (!state) {
            sounds.background.pause();
            setSrc(soundOff);
        }
    }, [state]);

    const handlerClick = () => setState(!state);

    return (
        <Wrapper src={src} onClick={handlerClick}>
            {state ? <img src={soundOn} alt="on"/> : <img src={soundOff} alt="off"/>}
        </Wrapper>
    )
};