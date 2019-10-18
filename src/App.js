import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import StoreContext from 'storeon/react/context';
import ReactHowler from 'react-howler'
import useStoreon from 'storeon/react';
//#if _DEBUG
import HotManager from './HotManager';
//#endif
import useWindowSize from "react-use/lib/useWindowSize";
import {useResizeGame} from "./hooks/useResizeGame";
import {store} from './store/store';
import stagesData from './data/stages'
import {Stage} from "./components/Stage";
import {GameView} from "./components/GameView";

const Wrapper = styled.div`
  height: ${(props) => props.sisez ? props.sisez.height + 'px' : '100vh'};
  width: ${(props) => props.sisez ? props.sisez.width + 'px' : '100wv'};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
`;

const WithProviders = () => {
    return (
        <StoreContext.Provider value={store}>
            <Wrapper >
                <GameView/>
            </Wrapper>
        </StoreContext.Provider>
    );
};

export default WithProviders;

//#if _DEBUG
HotManager.register(module.id);
//#endif

