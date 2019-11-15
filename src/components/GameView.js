import React, {useEffect, useRef, useState} from "react";
import useStoreon from 'storeon/react';
import useClickAway from 'react-use/lib/useClickAway'
import tutorialData from "../data/tutorial";
import Fullscreen from "react-full-screen";
import Slide from 'react-reveal/Slide';
import useTimeout from "react-use/lib/useTimeout";
import desk from '../assets/image/classroom_blackboard_cube.png'
import styled from "styled-components";
import {AnimatedContainer} from "./AnimatedContainer";
import stagesData, {LAYOUTS} from "../data/stages";
import {TopPanel} from "./TopPanel";
import {Stage} from "./Stage";
import {Answer} from "./Answer";
import {sounds} from "../sounds";
import {Sound} from "./Sound";
import {Menu} from "./Menu";
import {Help} from "./Help";
import {Kviz} from "./Kviz";
import {Final} from "./Final";
import {Speech} from "./Speech";
import bg from '../assets/image/classroom_bg.jpg'

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

const Bg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: url(${bg});
    background-size: cover;
    background-position: 50% 50%;
    transition: filter 1s;
    //pointer-events: none;
    ${props => props.tutorial ? 'filter: blur(10px) brightness(0.70) saturate(130%);' : ''}
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


const FullscreenButton = styled.div`

`;

export const GameView = ({handlerFullscreen}) => {
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
    const [showTutorial, setShowTutorial] = useState(false);
    const [countTutorial, setCountTutorial] = useState(0);
    const [speech, setSpeech] = useState(null);
    const refDebugg = useRef(null);


    useClickAway(refDebugg, () => {
        const input = document.querySelector('.desk-wrapper input');
        if (input && stageData.layout  === 'simple') {
            setTimeout(() => {
                input.focus();
            }, 300)
        }
    });


    useEffect(() => {
        setStageData(stagesData[stage]);
    }, [stage]);

    // set Speech
    useEffect(() => {
        if (stageData.hasOwnProperty('speech') && !tutorial) {
            setSpeech(stageData.speech)
        }
        if (tutorial) {
            setSpeech(tutorialData[countTutorial])
        }
        if (!tutorial && !stageData.hasOwnProperty('speech')) {
            setSpeech(null)
        }
    }, [stageData, tutorial, countTutorial]);

    // show kviz animation tutorial
    useEffect(() => {
        if (tutorialData[countTutorial] && tutorialData[countTutorial].hasOwnProperty('animation')) {
            dispatch('kviz/show');
            setTimeout(() => {
                setTimeout(() => {
                    dispatch('stage/to', 1); //fix TODO
                }, 2000);
                setTutorial(false);
                setShowTutorial(false)
            }, 1000)
        }
    }, [tutorialData, countTutorial]);


    // animation if modal show
    useEffect(() => {
        if (!tutorial && !kviz.show && spriteLoaded && preloader.count === 100) {
            setShowGameView(!modal);
        }
    }, [modal, kviz, spriteLoaded, preloader, tutorial]);

    // show kviz
    useEffect(() => {
        if (stageData.id) {
            document.title = `ID = ${stageData.id}`
        }
        if (stageData.layout === LAYOUTS.quiz && stage !== 0) {
            dispatch('kviz/show');
        }
        if (stagesData[stage - 1] && stagesData[stage].layout === LAYOUTS.quiz) {
            dispatch('kviz/set', kviz.order + 1);
        }
    }, [stageData]);

    useEffect(() => {
        if (kviz.show) {
            document.querySelector('body').style.pointerEvents = 'none';
            setShowGameView(false);
            if (!modal) {
                setTimeout(() => {
                    document.querySelector('body').style.pointerEvents = 'auto';
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
                setCombo(0);
                sounds.fail.play()
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
            if (tutorial) {
                setTimeout(() => {
                    setShowTutorial(true)
                    setTimeout(() => {
                        setShowGameView(true)
                    }, 1000)
                }, 500)
            }
        }
    }, [preloader.count]);


    const handlerDeskShow = () => {
        setTimeout(() => {
            setDeskAnimationEnd(true)
        }, 1000);
    };


    useEffect(() => {
        if (animationDone && deskAnimationEnd || tutorial) {
            setTimeout(() => {
                setSpritePlay(true);
            }, 500)
        }
    }, [animationDone, deskAnimationEnd, tutorial]);

    useEffect(() => {
        if (tutorial) {
            const handlerClickWindow = (e) => {
                if (tutorialData[countTutorial + 1]) {
                    setCountTutorial(count => count + 1);
                } else {
                    setTutorial(false);
                    setShowTutorial(false)
                }
            };
            window.addEventListener("click", handlerClickWindow);
            return () => {
                window.removeEventListener("click", handlerClickWindow);
            };
        }
    }, [tutorial, countTutorial, showGameView]);


    return (
        <Wrapper>
            <Bg tutorial={showTutorial || modal}/>
            <TopPanel data={tutorialData[countTutorial]}/>

            <CurrentStage>{stageData.id && stageData.id}</CurrentStage>
            <Kviz show={kviz.show} order={kviz.order}/>

            <DeskWrapper className="desk-wrapper">
                <Slide when={!tutorial && showGameView} bottom onReveal={handlerDeskShow}>
                    <img src={desk} alt="desk"/>
                </Slide>

                <Speech show={showGameView || tutorial}
                        teacherInit={spriteLoaded}
                        data={speech}/>

                <AnimatedContainer
                    tutorial={tutorial}
                    showCharacters={showGameView} spritePlay={spritePlay}
                    onLoadedSprites={handlerSpriteLoaded} data={stageData} animate={animate}
                    confety={stage > 1}
                    onAnimationEnd={handlerAnimationEnd}/>

                {final && <Final/>}
                <Inner show={!tutorial && !final && showGameView}>
                    {!tutorial && <Stage onNext={handlerAnswer} data={stageData} spriteLoaded={spriteLoaded}/>}
                </Inner>
            </DeskWrapper>

            {/*<button style={{
                position: 'fixed',
                zIndex: '999',
                top: '50px',
                right: '50px'
            }} onClick={handlerFullscreen}>fullscreen</button>*/}
            <input value={stage}
                   ref={refDebugg}
                   style={{
                position: 'fixed',
                zIndex: '999',
                top: 0,
                right: 0
            }} type="text" onClick={e => {
                //refDebugg.current = 'active'
            }} onChange={(e) => {
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
            <Answer last={stagesData[stage].layout === 'quiz'} answer={answer}/>
        </Wrapper>
    )
};