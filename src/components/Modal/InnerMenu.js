import React, {useState} from 'react';
import useMount from "react-use/lib/useMount";
import styled from "styled-components";
import useStoreon from 'storeon/react';
import stagesData from "../../data/stages";
import {LAYOUTS} from "../../data/stages";

const Wrapper = styled.div`

`

const Buttons = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.3rem;
`;

const stagesColor = {
    current: '#b76d26',
    some: '#4a822b',
    hover: '#d89d57'
};

const Button = styled.div`
  padding: 1rem;
  background-color: ${stagesColor.current};
  border-radius: 3px;
  font-size: 1rem;
  color: #FFF;
  font-weight: bold;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #d89d57;
  }
`;

const Title = styled.div`
  font-family: 'Luckiest Guy', cursive;
  text-transform: uppercase;

`;

export const InnerMenu = () => {
    const {dispatch} = useStoreon('stage', 'kviz', 'modal');
    const [buttons, setButtons] = useState(null);
    useMount(() => {
        const prepareButtons = stagesData.reduce((acc, stage, stageNumber) => {
            if (stage.layout === LAYOUTS.quiz) {
                const data = {...stage, id: stageNumber};
                return [...acc, data]
            }
            return acc
        }, []);
        setButtons(prepareButtons)
    });

    const handlerStage = (next) => () => {
        dispatch('kviz/set', next);
        dispatch('kviz/show');
        dispatch('stage/to', next);
        dispatch('modal/hide');
    };

    return (
        <Wrapper>
            <Title>Izaberi kviz!</Title>
            <Buttons>
                {
                    buttons && buttons.map((stage, i) => {
                        return (
                            <Button onClick={handlerStage(stage.id)} key={stage.id}>
                                KVIZ {i}
                            </Button>
                        )
                    })
                }
            </Buttons>
        </Wrapper>
    )
};