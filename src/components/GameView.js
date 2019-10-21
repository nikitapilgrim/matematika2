import React, {useEffect, useState} from "react";
import Slide from 'react-reveal/Slide';
import useTimeout from "react-use/lib/useTimeout";
import desk from '../assets/image/classroom_blackboard_cube.png'
import styled from "styled-components";
import {AnimatedContainer} from "./AnimatedContainer";
import stagesData from "../data/stages";
import {Stage} from "./Stage";
import {Answer} from "./Answer";
import {sounds} from "../sounds";
import {Sound} from "./Sound";

const Wrapper = styled.div`
    width: 50rem;
    min-width: 300px;
    max-width: 450px;
    display: flex;
    justify-content: center;
    position: relative;
    pointer-events: auto;
`;

const DeskWrapper = styled.div`
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  top: 1rem;
  //top: -7rem;
  pointer-events: auto;
  img {
    display: inline-block;
    max-width: 100%;
  }
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 31%;
    width: 91%;
    height: 49%;
    pointer-events: auto;
`;

const CurrentStage = styled.div`
  position: fixed;
  top: 3vh;
  right: 3vw;
  font-size: 40px;
  color: red;
  opacity: 0.8;
`;


export const GameView = () => {
    const [currentStage, setCurrentStage] = useState(0);
    const [stage, setStage] = useState(stagesData[currentStage]);
    const [combo, setCombo] = useState(0);
    const [animate, setAnimate] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [isReady, cancel, reset] = useTimeout(200);
    const [animationDone, setAnimationDone] = useState(null);
    const [spriteLoaded, setSpriteLoaded] = useState(null);
    const [spritePlay, setSpritePlay] = useState(null);
    const [deskAnimationEnd, setDeskAnimationEnd] = useState(null);

     // cancel animation wrong answer
     useEffect(() => {
         if (answer) {
             setTimeout(() => {
                 reset();
                 setAnswer(null)
             }, 1000)
         }
     }, [answer]);

     useEffect(() => {
         setStage(stagesData[currentStage])
     }, [currentStage]);

     const handlerAnswer = (answer) => {
         if (true/*isReady()*/) {
             setAnswer(answer);
             if (answer.right === true) {
                 setCombo(prev => prev + 1);
                 sounds.success.play()
             } else {
                 setCombo(0)
             }
             setCurrentStage(prev => prev + 1);
         }
     };

     useEffect(() => {
         if (combo >= 3) {
             setAnimate({
                 stage: 2,
                 name: 'right'
             })
         }
         if (combo === 2) {
             setAnimate({
                 stage: 1,
                 name: 'right'
             })
         }
         if (combo === 1) {
             setAnimate({
                 stage: 0,
                 name: 'right'
             })
         }
     }, [combo, stage]);

     const handlerAnimationEnd = (state) => {
         setAnimationDone(true);
     };

     const handlerSpriteLoaded = () => {
         setSpriteLoaded(true);
     };

     const handlerDeskShow = () => {
         setTimeout(() => {
             setDeskAnimationEnd(true)
         }, 1000);
     };

     useEffect(() => {
         //console.log(animationDone, spriteLoaded)
     }, [animationDone, spriteLoaded])

    useEffect(() => {
        if (animationDone && deskAnimationEnd) {
            setTimeout(() => {
                setSpritePlay(true);
            }, 500)
        }
    }, [animationDone, deskAnimationEnd]);


    return (
        <Wrapper>
            <Sound/>
            <CurrentStage>{currentStage}</CurrentStage>
            <DeskWrapper>
                <Slide when={spriteLoaded} bottom onReveal={handlerDeskShow}>
                    <img src={desk} alt="desk"/>
                </Slide>
                <AnimatedContainer spritePlay={spritePlay} onLoadedSprites={handlerSpriteLoaded} data={stage} animate={animate} onAnimationEnd={handlerAnimationEnd}/>
                <Inner>
                    {deskAnimationEnd && <Stage onNext={handlerAnswer} data={stage}/>}
                </Inner>
            </DeskWrapper>
            <input value={currentStage} style={{
                position: 'fixed',
                zIndex: '999',
                top: 0,
                right: 0
            }} type="text" onChange={(e) => {
                if (+e.target.value) {
                    const value = e.target.value;
                    if (stagesData[+value]) {
                        setCurrentStage(+value);
                    }
                }
                if (!e.target.value) {
                    setCurrentStage(0)
                }
            }}/>
            <Answer answer={answer}/>
        </Wrapper>
    )
};