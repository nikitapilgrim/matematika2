import React, {useState, useEffect} from 'react';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import styled from 'styled-components';
import Spritesheet from '../lib/Spritesheet';
import teacher from '../assets/img/teacherSprites.png'
import teacherIdle from '../assets/img/teacherSpriteIdle.png'
import girl from '../assets/img/girlSprites.png';
import boy from '../assets/img/boySprites.png'
import quiz from '../assets/img/quizSuccessSprite.png'

const sprites = {
    teacher,
    teacherIdle,
    girl,
    boy,
    quiz
};

const setting = {
    teacher: {
        options: {
            steps: 2,
            image: sprites.teacherIdle,
            widthFrame: 165,
            heightFrame: 450,
        },
        idle: {
            start: 0,
            end: 2,
            fps: 0.30,
        },
        right: {
            start: 43,
            end: 65,
            fps: 15,
        }
    },
    girl: {
        options: {
            steps: 260,
            image: sprites.girl,
            widthFrame: 230,
            heightFrame: 379,
        },
        idle: [
            {
                end: 185,
                start: 184,
                fps: 0.30,
            },
            {
                end: 260,
                start: 245,
                fps: 5,
            },
        ],
        right: [
            {
                end: 53,
                fps: 24,
                start: 0
            },
            {
                end: 120,
                start: 62,
                fps: 24,
            },
            {
                end: 183,
                start: 123,
                fps: 24,
            }
        ]
    },
    boy: {
        options: {
            steps: 383,
            image: sprites.boy,
            widthFrame: 230,
            heightFrame: 350,
        },
        right: [
            {
                start: 0,
                end: 57,
                fps: 24,
            },
            {
                end: 148,
                start: 90,
                fps: 24,
            },
            {
                end: 268,
                start: 179,
                fps: 24,
            },
        ],
        idle: [
            {
                end: 269,
                start: 268,
                fps: 0.30,
            },
            {
                end: 383,
                start: 357,
                fps: 10,
            },
        ]
    },
    quiz: {
        options: {
            steps: 40,
            image: sprites.quiz,
            widthFrame: 252,
            heightFrame: 300,
            fps: 24,
        },
    }
};

const Position = styled.div`
  z-index: 1;
  width: 40%;
  position: absolute;
  bottom: ${props => props.bottom ? `${props.bottom}rem` : '0'};
  ${(props) => {
    if (props.left !== undefined) {
        return `left: ${props.left + 'rem'}`
    }
    if (props.right !== undefined) {
        return `right: ${props.right + 'rem'}`
    }
}}
`;

const useAnimateConfig = (config, animate) => {
    const [animateConfig, setAnimateConfig] = useState(null);
    const {name, stage} = animate;
    const getConfigForState = (name, stage) => {
        if (Array.isArray(config[name])) {
            setAnimateConfig(config[name][stage])
        } else {
            setAnimateConfig(config[name])
        }
    };
    useEffect(() => getConfigForState(name, stage), [animate]);

    return [config.options, animateConfig];
};

const PersonDropShadow = styled.div`
  filter: drop-shadow(0 0 3px);
`;

const creatorPerson = (setting, name) => {
    return ({animate, onLoopComplete, children, onLoaded, pause, scale}) => {
        const [ref, setRef] = useState(null);
        const [settings, animateConfig] = useAnimateConfig(setting[name], animate);

        const handlerLoop = (state) => {
            onLoopComplete(name, animate.name, state)
        };

        useEffect(() => {
            if (pause && ref) {
                ref.pause();
            }
        }, [pause, ref]);

        const setAnimation = () => {
            if (animateConfig && ref && !pause) {
                const methods = {
                    start: 'setStartAt',
                    end: 'setEndAt',
                    fps: 'setFps'
                };
                Object.entries(animateConfig).forEach((pair) => {
                    const [key, value] = pair;
                    const method = methods[key];
                    ref[method](value);
                    if (key === 'start') {
                        ref.goToAndPlay(value)
                    }
                });
            }
        };
        useEffect(setAnimation, [animateConfig, ref, pause]);

        return (
            <>
                {children}
                {settings &&
                animateConfig &&
                <PersonDropShadow>
                    <Spritesheet getInstance={(ref) => {
                        setRef(ref)
                    }}
                                 autoplay={false}
                                 onInit={onLoaded}
                                 onLoopComplete={handlerLoop}
                                 style={{width: scale ? `${100 * scale}%` : '100%'}}
                                 onClick={e => console.log(e)}
                                 isResponsive={true}
                                 loop={true}
                                 fps={0.30}
                                 onEachFrame={spritesheet => {
                                     if (animate.name === 'idle') {
                                         if (name === 'teacher') {
                                             if (spritesheet.getInfo('frame') !== 1) {
                                                 spritesheet.setFps(2)
                                             } else {
                                                 spritesheet.setFps(0.30)
                                             }
                                             return false
                                         }
                                         if (spritesheet.getInfo('frame') !== animateConfig.start) {
                                             spritesheet.setFps(2)
                                         } else {
                                             spritesheet.setFps(0.30)
                                         }
                                     }
                                 }}
                                 {...settings}/>
                </PersonDropShadow>
                }
            </>
        )
    }
};

const QuizWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.show ? '1' : '0'};
`;

const QuizInner = styled.div`
  width: 20%;
  height: 20%;
`;

const Quiz = ({onLoaded}) => {
    const handlerEndAnimation = () => {

    }

    return (
        <Spritesheet getInstance={(ref) => {
        }}
                     onInit={onLoaded}
                     onLoopComplete={handlerEndAnimation}
                     style={{width: '100%'}}
                     onClick={e => console.log(e)}
                     isResponsive={true}
                     loop={true}
                     {...setting.quiz.options}
        />
    )
};

const Girl = creatorPerson(setting, 'girl');
const Boy = creatorPerson(setting, 'boy');
const Teacher = creatorPerson(setting, 'teacher');


export const AnimatedContainer = React.memo(({animate, spritePlay, onAnimationEnd, onLoadedSprites}) => {
    const [state, setState] = useState({name: 'idle', stage: 0});
    const [animations, setAnimations] = useState({
        teacher: null,
        child: null,
        quiz: null
    });
    const [allSpriteLoaded, setAllSpriteLoaded] = useState(false);
    const [spriteLoaded, setSpriteLoaded] = useState({
        teacher: null,
        boy: null,
        girl: null,
        quiz: null
    });

    const handlerAnimationEnd = (name) => () => {
        setTimeout(() => {
            setAnimations(prev => {
                return {...prev, [name]: true}
            })
        }, 1000);
    };
    const handlerSpriteLoaded = (name) => () => {
        setSpriteLoaded(prev => {
            return {...prev, [name]: true}
        })
    };

    // if all sprite loaded
    useEffect(() => {
        if (Object.values(spriteLoaded).every(a => a === true)) {
            setTimeout(() => {
                setAllSpriteLoaded(true);
                onLoadedSprites(spriteLoaded)
            }, 0)
        }
    }, [spriteLoaded]);

    // if animations done
    useEffect(() => {
        if (Object.values(animations).every(a => a === true)) {
            onAnimationEnd(animations);
            setTimeout(() => {
                setState({name: 'idle', stage: 0});
            }, 1000)
        }
    }, [animations]);

    const handlerLoopComplete = (name, animateName) => {
        if (animateName !== 'idle') {
            setState({name: 'idle', stage: 0})
        }
    };

    useEffect(() => {
        if (animate) {
            setState(animate)
        }
    }, [animate]);

    return (
        <>
            <Slide when={allSpriteLoaded} left onReveal={handlerAnimationEnd('teacher')}>
                <Position left={-12}>
                    <Teacher onLoaded={handlerSpriteLoaded('teacher')}
                             onLoopComplete={handlerLoopComplete}
                             animate={state}
                             pause={!spritePlay}
                    />
                </Position>
            </Slide>
            <QuizWrapper>
                <QuizInner>
                    <Zoom when={allSpriteLoaded} onReveal={handlerAnimationEnd('quiz')}>
                        <Quiz onLoaded={handlerSpriteLoaded('quiz')}
                        />
                    </Zoom>
                </QuizInner>
            </QuizWrapper>
            <Slide when={allSpriteLoaded} right onReveal={handlerAnimationEnd('child')}>
                <Position right={-4} bottom={-1}>
                    <Boy onLoaded={handlerSpriteLoaded('boy')}
                         onLoopComplete={handlerLoopComplete}
                         animate={state}
                         pause={!spritePlay}
                         scale={1.2}
                    />
                </Position>
                <Position right={-10} bottom={-1}>
                    <Girl onLoaded={handlerSpriteLoaded('girl')}
                          onLoopComplete={handlerLoopComplete}
                          animate={state}
                          pause={!spritePlay}
                          scale={1.2}
                    />
                </Position>
            </Slide>
        </>
    )
});