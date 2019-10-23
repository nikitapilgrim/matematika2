import React from 'react';
import styled from 'styled-components';
import StoreContext from 'storeon/react/context';
import {GameView} from "./components/GameView";
import {store} from "./store/store";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
`;

const WithProviders = () => {
    return (
        <StoreContext.Provider value={store}>
            <Wrapper>
                <GameView/>
            </Wrapper>
        </StoreContext.Provider>
    );
};

export default WithProviders;

