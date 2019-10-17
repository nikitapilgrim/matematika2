import React, {useState, useEffect, useRef} from 'react';
import {Link, Route} from 'wouter';
import styled from 'styled-components';
import StoreContext from 'storeon/react/context';
import {ModalProvider} from 'react-modal-hook';
import useStoreon from 'storeon/react';
//#if _DEBUG
import HotManager from './HotManager';
//#endif
import {store} from './store/store';
import stagesData from './data/stages'
import {Stage} from "./components/Stage";
import {AnimatedContainer} from "./components/AnimatedContainer";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
`;

const WithProviders = () => {
    const [currentStage, setCurrentStage] = useState(0);
    const [stage, setStage] = useState(stagesData[currentStage]);
    const [combo, setCombo] = useState(0);
    const [animate, setAnimate] = useState(null);

    useEffect(() => {
        setStage(stagesData[currentStage])
    }, [currentStage]);

    const handlerAnswer = (answer) => () => {
        if (answer === true) {
            setCombo(combo+1);
        }
        if (answer === false) {
            setCombo(0)
        }
        setCurrentStage(currentStage+1);
    };

    useEffect(() => {
        if (combo > 3) {
            setAnimate({
                stage: 3,
                name: 'right'
            })
        }
        if (combo === 2) {
            setAnimate({
                stage: 2,
                name: 'right'
            })
        }
        if (combo === 1) {
            setAnimate({
                stage: 1,
                name: 'right'
            })
        }
        setTimeout(() => {
            setAnimate({
                stage: 1,
                name: 'idle'
            })
        }, 2000)
    }, [combo, stage]);

    return (
        <StoreContext.Provider value={store}>
            <Wrapper>
                <AnimatedContainer animate={animate} combo={combo}>
                    <Stage onNext={handlerAnswer} data={stage}/>
                </AnimatedContainer>
                <input type="text" onKeyUp={(e) => {
                    const value = e.target.value;
                    if (stagesData[+value]) {
                        setCurrentStage(value);

                    }
                }}/>
            </Wrapper>
        </StoreContext.Provider>
    );
};

export default WithProviders;

//#if _DEBUG
HotManager.register(module.id);
//#endif

