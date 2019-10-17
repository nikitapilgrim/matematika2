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
        idle: [
            {
                image: sprites.girl,
                widthFrame: 230,
                heightFrame: 379,
                steps: 185,
                startAt: 184,
                fps: 2,
            },
            {
                image: sprites.girl,
                widthFrame: 230,
                heightFrame: 379,
                steps: 260,
                startAt: 245,
                fps: 5,
            },
        ],
        right: [
            {
                image: sprites.girl,
                widthFrame: 230,
                heightFrame: 379,
                steps: 53,
                fps: 24,
            },
            {
                image: sprites.girl,
                widthFrame: 230,
                heightFrame: 379,
                steps: 120,
                startAt: 62,
                fps: 24,
            },
            {
                image: sprites.girl,
                widthFrame: 230,
                heightFrame: 379,
                steps: 183,
                startAt: 123,
                fps: 24,
            }
        ]
    },
    boy: {
        right: [
            {
                image: sprites.boy,
                widthFrame: 230,
                heightFrame: 350,
                steps: 57,
                fps: 24,
            },
            {
                image: sprites.boy,
                widthFrame: 230,
                heightFrame: 350,
                steps: 148,
                startAt: 90,
                fps: 24,
            },
            {
                image: sprites.boy,
                widthFrame: 230,
                heightFrame: 350,
                steps: 268,
                startAt: 179,
                fps: 24,
            },
        ],
        idle: [
            {
                image: sprites.boy,
                widthFrame: 230,
                heightFrame: 350,
                steps: 269,
                startAt: 268,
                fps: 2,
            },
            {
                image: sprites.boy,
                widthFrame: 230,
                heightFrame: 350,
                steps: 383,
                startAt: 357,
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

const useAnimateConfig = (config, state, stage) => {
    const [animateConfig, setAnimateConfig] = useState(null);
    const getConfigForState = (state, stage) => {
        setAnimateConfig(config.options)
        if (Array.isArray(config[state])) {
            setAnimateConfig(config[state][stage])
        } else {
            setAnimateConfig(config[state])
        }
    };
    useEffect(() => getConfigForState(state, stage), [state]);

    return [config.options, animateConfig];
};

const creatorPerson = (setting, name) => {
    return (props) => {
        const [ref, setRef] = useState(null);
        const [settings, animateConfig] = useAnimateConfig(setting[name], props.state, props.stage);

        useEffect(() => {
            if (animateConfig && ref) {
                const methods = {
                    start: 'setStartAt',
                    end: 'setEndAt',
                    fps: 'setFps'
                };
                Object.entries(animateConfig).forEach((pair) => {
                    const [key, value] = pair;
                    const method = methods[key];
                    ref[method](value);
                });
                ref.setEndAt(animateConfig.end);
                ref.setFps(animateConfig.end)

            }
        }, [animateConfig, ref]);
        return (
            <>
                {settings &&
                animateConfig &&
                <Spritesheet getInstance={(ref) => {
                    setRef(ref)
                }}
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
    const [state, setState] = useState({name: 'idle', state: 1});

    useEffect(() => {
        if (animate) {
            setState(animate)
        }
    }, [animate]);

    return (
        <>
            <Position left={-10}>
                <Teacher state={state.name} stage={state.stage}/>
            </Position>
            {/*<Position right={0}>
                <Boy state={state.name} stage={state.stage}/>
            </Position>
            {children}
            <Position right={-2}>
                <Girl state={state.name} stage={state.stage}/>
            </Position>*/}
        </>
    )
};