import React, {useEffect, useState} from "react";
import useStoreon from 'storeon/react';
import tutorialData from "../data/tutorial";
import Fullscreen from "react-full-screen";
import Slide from 'react-reveal/Slide';
import useTimeout from "react-use/lib/useTimeout";
import desk from '../assets/image/classroom_blackboard_cube.png'
import styled from "styled-components";
import {AnimatedContainer} from "./AnimatedContainer";
//import {TutorialContainer} from "./TutorialContainer";
import stagesData, {LAYOUTS} from "../data/stages";
import {Stage} from "./Stage";
import {Answer} from "./Answer";
import {sounds} from "../sounds";
import {Sound} from "./Sound";
import {Menu} from "./Menu";
import {Help} from "./Help";
import {Kviz} from "./Kviz";
import {Final} from "./Final";
import {Speech} from "./Speech";

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
    filter: drop-shadow(0 0 3px);
    max-width: 100%;
  }
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 39%;
    width: 100%;
    height: 32%;
    pointer-events: auto;
    transition: opacity 0.2s linear;
    transition-delay: ${props => props.show ? '1s' : '0'};
    opacity: ${props => props.show ? 1 : 0}
`;

const CurrentStage = styled.div`
  position: fixed;
  top: 3vh;
  right: 3vw;
  font-size: 40px;
  color: red;
  opacity: 0.8;
`;

const TopPanel = styled.div`
  position: fixed;
  display: flex;
  z-index: 2;
  padding: 2rem;
  top: 0;
  left: 0;
  & > div {
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.2);
    }
    &:not(:first-child) {
      margin-left: 0.5rem;
    }
  }
`;


export const GameView = () => {
    const {dispatch, stage, kviz, modal, preloader, final} = useStoreon('stage', 'kviz', 'modal', 'preloader', 'final');
    const [stageData, setStageData] = useState(stagesData[stage]);
    const [combo, setCombo] = useState(0);
    const [animate, setAnimate] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [isReady, cancel, reset] = useTimeout(200);
    const [animationDone, setAnimationDone] = useState(null);
    const [spriteLoaded, setSpriteLoaded] = useState(null);
    const [spritePlay, setSpritePlay] = useState(null);
    const [deskAnimationEnd, setDeskAnimationEnd] = useState(null);
    const [showGameView, setShowGameView] = useState(null);
    const [tutorial, setTutorial] = useState(true);

    // cancel animation wrong answer
    useEffect(() => {
        //console.log(answer)
       /* if (answer) {
            setTimeout(() => {
                reset();
                setAnswer(null)
            }, 1000)
        }*/
    }, [answer]);

    useEffect(() => {
        setStageData(stagesData[stage])
    }, [stage]);


    // animation if modal show
    useEffect(() => {
        if (!kviz.show && spriteLoaded && preloader.count === 100) {
            setShowGameView(!modal);
        }
    }, [modal, kviz, spriteLoaded, preloader]);

    // show kviz
    useEffect(() => {
        if (stageData.layout === LAYOUTS.quiz) {
            dispatch('kviz/show');
        }
        if (stagesData[stage - 1] && stagesData[stage - 1].layout === LAYOUTS.quiz) {
            dispatch('kviz/set', kviz.order + 1);
        }
    }, [stageData]);

    useEffect(() => {
        if (kviz.show) {
            setShowGameView(false);
            if (!modal) {
                setTimeout(() => {
                    dispatch('stage/next');
                    dispatch('kviz/hide');
                    setShowGameView(true);
                }, 2000);
            }
        }
    }, [modal, kviz]);



    useEffect(() => {
        if (!showGameView) {
            setDeskAnimationEnd(false)
        }
    }, [showGameView]);

    const handlerAnswer = (answer) => {
        console.log(answer, 'asnwer')
        if (true/*isReady()*/) {
            setAnswer(answer);
            if (answer.right === true) {
                setCombo(prev => prev + 1);
                sounds.success.play()
            } else {
                setCombo(0)
            }
            dispatch('stage/next', {
                answer: answer.right
            });
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
        let count = 0;
        const setPreload = i => () => {
            count = i + 1;
            dispatch('preload/set', i);
            if (i < 100) {
                setTimeout(setPreload(count), 20)
            }
        };
        setTimeout(setPreload(count), 0);
    };

    useEffect(() => {
        if (preloader.count === 100) {
            setTimeout(() => {
                setShowGameView(true)
            }, 500)
        }
    }, [preloader.count]);

    useEffect(() => {
        if (tutorial) {
            //setShowGameView(true)
        }
    }, [tutorial]);

    const handlerDeskShow = () => {
        setTimeout(() => {
            setDeskAnimationEnd(true)
        }, 1000);
    };


    useEffect(() => {
        if (animationDone && deskAnimationEnd) {
            setTimeout(() => {
                setSpritePlay(true);
            }, 500)
        }
    }, [animationDone, deskAnimationEnd]);

    useEffect(() => {
        if (tutorial) {
            const handlerClickWindow = (e) => {
                setTutorial(false)
            };
            window.addEventListener("click", handlerClickWindow);
            return () => {
                window.removeEventListener("click", handlerClickWindow);
            };
        }
    }, [tutorial]);


    return (
        <Wrapper>
            <TopPanel>
                <Sound/>
                <Menu/>
                <Help/>
            </TopPanel>

            <CurrentStage>{stage}</CurrentStage>
            <Kviz show={kviz.show} order={kviz.order}/>

            <DeskWrapper>
                <Slide when={!tutorial && showGameView} bottom onReveal={handlerDeskShow}>
                    <img src={desk} alt="desk"/>
                </Slide>

                {tutorial &&
                    <Speech show={showGameView || false} teacherInit={spriteLoaded} phrase={tutorialData[0].phrase} type={'tutorial'}/>
                }
                <AnimatedContainer
                    tutorial={tutorial}
                    showCharacters={showGameView} spritePlay={spritePlay}
                                   onLoadedSprites={handlerSpriteLoaded} data={stageData} animate={animate}
                                   onAnimationEnd={handlerAnimationEnd}/>

                    <Inner show={!tutorial && !final && showGameView}>
                        <Stage onNext={handlerAnswer} data={stageData} spriteLoaded={spriteLoaded}/>
                    </Inner>
            </DeskWrapper>

            <input value={stage} style={{
                position: 'fixed',
                zIndex: '999',
                top: 0,
                right: 0
            }} type="text" onChange={(e) => {
                if (+e.target.value) {
                    const value = e.target.value;
                    if (stagesData[+value]) {
                        dispatch('stage/to', +value);
                    }
                }
                if (!e.target.value) {
                    dispatch('stage/to', 0)
                }
            }}/>
            <Answer answer={answer}/>
        </Wrapper>
    )
};