import React, {useEffect, useRef, useState} from 'react';
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
    margin-top: 3rem;
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
  padding: 0.9rem;
  background-color: ${ props => props.current ? stagesColor.current : stagesColor.some};
  border-radius: 5px;
  font-size: 2rem;
  color: #FFF;
  font-weight: 900;
  transition: background-color 0.3s ease;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #d89d57;
  }
`;

const Title = styled.div`
  
`;

export const InnerMenu = () => {
    const {dispatch, modal, kviz, stage} = useStoreon('stage', 'kviz', 'modal');
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

    useEffect(() => {
        if (stagesData[stage]) {
            if (stagesData[stage].layou === LAYOUTS.quiz) {
                dispatch('kviz/set', {order: kviz.order + 1});
            }
        }
    }, [stage]);

    const handlerStage = (next, number) => () => {
        dispatch('kviz/set', {order: number});
        dispatch('kviz/show');
        dispatch('stage/to', next);
        dispatch('modal/hide');
    };


    return (
        <Wrapper>
            <Title>
                <TextWithBorders color='#4a822b' text="Izaberi kviz!"/>
            </Title>
            <Buttons>
                {
                    buttons && buttons.map((button, i) => {
                        const index = i;
                        return (
                            <Button current={kviz.order === index + 1} onClick={handlerStage(button.id, index + 1)} key={button.id}>
                                KVIZ {index + 1}
                            </Button>
                        )
                    })
                }
            </Buttons>
        </Wrapper>
)
};