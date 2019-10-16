import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Spritesheet from 'react-responsive-spritesheet';
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
        idle: {
            image: sprites.teacher,
            widthFrame: 165,
            heightFrame: 450,
            steps: 19,
            fps: 10,
            loop: true
        },
        right: {
            image: sprites.teacher,
            widthFrame: 165,
            heightFrame: 450,
            startAt: 43,
            steps: 65,
            fps: 15,
            loop: true
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
                loop: true
            },
            {
                image: sprites.girl,
                widthFrame: 230,
                heightFrame: 379,
                steps: 260,
                startAt: 245,
                fps: 5,
                loop: true
            },
        ],
        right: [
            {
                image: sprites.girl,
                widthFrame: 230,
                heightFrame: 379,
                steps: 53,
                fps: 24,
                loop: true
            },
            {
                image: sprites.girl,
                widthFrame: 230,
                heightFrame: 379,
                steps: 120,
                startAt: 62,
                fps: 24,
                loop: true
            },
            {
                image: sprites.girl,
                widthFrame: 230,
                heightFrame: 379,
                steps: 183,
                startAt: 123,
                fps: 24,
                loop: true
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
                loop: true
            },
            {
                image: sprites.boy,
                widthFrame: 230,
                heightFrame: 350,
                steps: 148,
                startAt: 90,
                fps: 24,
                loop: true
            },
            {
                image: sprites.boy,
                widthFrame: 230,
                heightFrame: 350,
                steps: 268,
                startAt: 179,
                fps: 24,
                loop: true
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
                loop: true
            },
            {
                image: sprites.boy,
                widthFrame: 230,
                heightFrame: 350,
                steps: 383,
                startAt: 357,
                fps: 10,
                loop: true
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
        if (Array.isArray(config[state])) {
            setAnimateConfig(config[state][stage])
        } else {
            setAnimateConfig(config[state])
        }
    };
    useEffect(() => getConfigForState(state, stage), [state]);
    return [animateConfig, state];
};
/*

const creatorPerson = (setting, name) => {
    const [animateConfig, setAnimateConfig] = useState(null);
    return ({stage, state}) => {
        useEffect(() => {
            if (Array.isArray(setting[name][state])) {
                setAnimateConfig(setting[name][state][stage])
            } else {
                setAnimateConfig(setting[name][state])
            }
        }, [state, stage]);
        return (
            <>
                {animateConfig && <Spritesheet style={{width: '20rem'}} onClick={e => console.log(e)}
                                               isResponsive={true} {...animateConfig}/>}
            </>
        )
    }
};
*/

const Girl = ({state, stage}) => {
    const [animateConfig, setAnimateConfig] = useState(null);
    useEffect(() => {
        if (Array.isArray(setting.girl[state])) {
            setAnimateConfig(setting.girl[state][stage])
        } else {
            setAnimateConfig(setting.girl[state])
        }
    }, [state]);
    useEffect(() => {
        console.log(animateConfig)
    }, [animateConfig])

    const handlerFrame = (m) => {
        console.log(m)
    }

    return (
        <>
            {animateConfig && <Spritesheet onEachFrame={handlerFrame} style={{width: '20rem'}} onClick={e => console.log(e)}
                                           isResponsive={true} {...animateConfig}/>}
        </>
    )
};
const Boy = ({state, stage}) => {
    const [animateConfig, s] = useAnimateConfig(setting.boy, state, stage);
    return (
        <>
            {animateConfig && <Spritesheet style={{width: '20rem'}} onClick={e => console.log(e)}
                                           isResponsive={true} {...animateConfig}/>}
        </>
    )
};
const Teacher = ({state, stage}) => {
    const [animateConfig] = useAnimateConfig(setting.teacher, state, stage);
    return (
        <>
            {animateConfig && <Spritesheet style={{width: '20rem'}} onClick={e => console.log(e)}
                                           isResponsive={true} {...animateConfig}/>}
        </>
    )
};


export const AnimatedContainer = ({animate, children}) => {
    const [state, setState] = useState({name: 'idle', stage: 1});

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
            <Position right={0}>
                <Boy state={state.name} stage={state.stage}/>
            </Position>
            {children}
            <Position right={-2}>
                <Girl state={state.name} stage={state.stage}/>
            </Position>
        </>
    )
};