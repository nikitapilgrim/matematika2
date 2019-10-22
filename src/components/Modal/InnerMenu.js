import React from 'react';
import styled from "styled-components";
import useStoreon from 'storeon/react';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.3rem;
`;

const stagesColor = {
    current: '#b76d26',
    some:  '#4a822b',
    h: '#d89d57'
};

const Button = styled.div`
  padding: 1rem;
  background-color: ${stagesColor.current};
  border-radius: 3px;
  font-size: 1rem;
  color: #FFF;
  font-weight: bold;
`;

export const InnerMenu = ( ) => {
    const { dispatch, stage } = useStoreon('stage');

    return (
      <Wrapper>
          {[...Array(6)].map((_,i) => {
                return (
                    <Button key={i}>
                        KVIZ {i}
                    </Button>
                )
              }
          )}
      </Wrapper>
  )
};