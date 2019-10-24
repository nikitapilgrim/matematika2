import React, {useRef, useState} from 'react';
import useMount from "react-use/lib/useMount";
import styled from "styled-components";
import useStoreon from 'storeon/react';
import stagesData from "../../data/stages";
import {LAYOUTS} from "../../data/stages";
import {TextWithBorders} from "../TextWithBorders";
import useComponentSize from "@rehooks/component-size";

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
  font-size: 17px;
  transform: scale(1.5);
  position: relative;
  left: 1rem;
  top: -50px;
  filter: drop-shadow(0px 0px 1px black);
`;

export const InnerMenu = () => {
    const {dispatch, modal} = useStoreon('stage', 'kviz', 'modal');
    const [buttons, setButtons] = useState(null);
    const ref = useRef(null);
    const size = useComponentSize(ref);
    const {width, height} = size;
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

    const handlerStage = (next, number) => () => {
        dispatch('kviz/set', number);
        dispatch('kviz/show');
        dispatch('stage/to', next);
        dispatch('modal/hide');
    };

    return (
        <Wrapper ref={ref}>
            <Title>
                <TextWithBorders width={width} color='#4a822b'>Izaberi kviz!</TextWithBorders>
            </Title>
            <Buttons>
                {
                    buttons && buttons.map((stage, i) => {
                        return (
                            <Button onClick={handlerStage(stage.id, i + 1)} key={stage.id}>
                                KVIZ {i + 1}
                            </Button>
                        )
                    })
                }
            </Buttons>
        </Wrapper>
)
};