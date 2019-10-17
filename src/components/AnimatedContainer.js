import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Spritesheet from '../lib/Spritesheet';
import teacher from '../assets/img/teacherSprites.png'
import girl from '../assets/img/girlSprites.png';
import boy from '../assets/img/boySprites.png'

const sprites = {
    teacher,
    girl,
    boy
};

const setting = {
    teacher: {
        options: {
            steps: 65,
            image: sprites.teacher,
            widthFrame: 165,
            heightFrame: 450,
        },
        idle: {
            start: 0,
            end: 19,
            fps: 10,
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
                fps: 2,
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
                fps: 2,
            },
            {
                end: 383,
                start: 357,
                fps: 10,
            },
        ]
    }
};

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Position = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 0;
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

const creatorPerson = (setting, name) => {
    return ({animate, onLoopComplete}) => {
        const [ref, setRef] = useState(null);
        const [settings, animateConfig] = useAnimateConfig(setting[name], animate);

        const handlerLoop = (sprite) => (name, state) => {
          onLoopComplete(name, state, sprite)
        };

        useEffect(() => {
            if (animateConfig && ref) {
                console.log(animateConfig, 'config', name)
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
        }, [animateConfig, ref]);
        return (
            <>
                {settings &&
                animateConfig &&
                <Spritesheet getInstance={(ref) => {
                    setRef(ref)
                }}
                             onLoopComplete={handlerLoop}
                             style={{width: '20rem'}}
                             onClick={e => console.log(e)}
                             isResponsive={true}
                             loop={true}
                             {...settings}/>}
            </>
        )
    }
};

const Girl = creatorPerson(setting, 'girl');
const Boy = creatorPerson(setting, 'boy');
const Teacher = creatorPerson(setting, 'teacher');


export const AnimatedContainer = ({animate, children}) => {
    const [state, setState] = useState({name: 'idle', stage: 1});
    const handlerLoopComplete = (name, state, spritee) => {
        console.log(name, state, 'complete', spritee)
    };

    useEffect(() => {
        if (animate) {
            setState(animate)
        }
    }, [animate]);

    return (
        <>
            <Position left={-2}>
                <Teacher onLoopComplete={handlerLoopComplete} animate={state}/>
            </Position>
            {children}
            <Position right={0}>
                <Boy onLoopComplete={handlerLoopComplete} animate={state}/>
            </Position>
            <Position right={-2}>
                <Girl onLoopComplete={handlerLoopComplete} animate={state}/>
            </Position>
        </>
    )
};