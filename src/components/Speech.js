import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";
import {Howl, Howler} from 'howler';
import {LAYOUTS} from "../data/stages";

const Wrapper = styled.div`
    background-color:#fff;
    position: absolute;
    width: 300px;
    min-height: ${props => props.type ? '150px' : 'auto'};
    bottom: 103%;
    left: 59%;
    padding: 15px;
    z-index: 300;
    font-family: 'Boogaloo', cursive;
    font-size: 24px;
    color:#000;
    border-radius: 10px;
    ${props => {
    if (props.show === true) {
        return 'opacity: 1'
    }
    if (props.show === false) {
        return 'opacity: 0'
    }
}};
    transition: opacity 0.5s;
    //border: solid 1px#000;
    //filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.87));
    &:before {
        //filter: drop-shadow(0 0 0px rgba(0, 0, 0, 0.87));
        content: '';
        position: absolute;
        bottom: 0;
        left: 15%;
        width: 0;
        height: 0;
        border: 1.5em solid transparent;
        border-top-color: white;
        border-bottom: 0;
        border-left: 0;
        margin-left: -0.75em;
        margin-bottom: -1.5em;
}
    }
`;

const Klik = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
`;


export const Speech = ({data, teacherInit, show}) => {
    const [delayShow, setDelayShow] = useState(null);
    const [countSpeech, setCountSpeech] = useState(null);
    const [speech, setSpeech] = useState(null);


    useEffect(() => {
        if (show === true) {
            setTimeout(() => setDelayShow(true), 1000)
        }
        if (show === false) {
            setDelayShow(false)
        }
    }, [show]);

    useEffect(() => {
        if (data) {
            if (Array.isArray(data)) {
                setCountSpeech(0)
                setSpeech(data[0])
            }
            if (!Array.isArray(data)) {
                setCountSpeech(null);
                setSpeech(data)
            }
        }
    }, [data]);

    useEffect(() => {
        if (typeof  countSpeech === 'number')  {
            setSpeech(data[countSpeech])
        }
    }, [countSpeech]);

    useEffect(() => {
        if (speech && speech.hasOwnProperty('audio')) {
            const howl = new Howl({
                src: speech.audio,
                autoplay: true,
                volume: 0.5,
            });
            howl.play();
            return (() => {
                howl.stop();
                Howler._howls = Howler._howls.filter(h => h !== howl)
            })
        }
    }, [speech]);


    useEffect(() => {
         if (Array.isArray(data)) {
             const handlerClickWindow = (e) => {
                setCountSpeech(prev => prev + 1)
             };
             window.addEventListener("click", handlerClickWindow);
             return () => {
                 window.removeEventListener("click", handlerClickWindow);
             };
         }
    }, [data]);


    return (
        <>
            {speech && teacherInit && data &&
                <>
                    {ReactDOM.createPortal(
                        <Wrapper show={delayShow} type={data.type}>
                            {speech.phrase}
                            {data.type === 'tutorial' && <Klik> {'>Klikni<'} </Klik>}
                        </Wrapper>,
                        document.querySelector('.teacher-sprite')
                    )}
                </>
            }
        </>
    )
};