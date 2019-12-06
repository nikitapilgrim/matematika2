import React, {useEffect, useRef, useState} from 'react';
import useMount from "react-use/lib/useMount";
import styled from "styled-components";
import useStoreon from 'storeon/react';
import stagesData from "../../data/stages";
import {LAYOUTS} from "../../data/stages";
import {TextWithBorders} from "../TextWithBorders";
import useClickAway from "react-use/lib/useClickAway";
import {sounds} from "../../sounds";

const Buttons = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    filter: drop-shadow(0px 0px 0.2rem #896549);  

`;

const Wrapper = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
`;

const stagesColor = {
    current: '#e9c78d',
    some: '#fce4be',
    hover: '#d89d57'
};

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 0.5rem 0;
  background-color: ${props => props.current ? stagesColor.current : stagesColor.some};
  border-radius: 0.3em;
  border: 2px solid #896549;
  font-size: 3rem;
  color: #896549;
  font-weight: 900;
  transition: background-color 0.3s ease;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #d89d57;
  }
`;

const Title = styled.div`
  filter: drop-shadow(0px 0px 10px white);  
`;
const Inner = styled.div`

`;

export const InnerMenu = (props) => {
    const {dispatch, modal, kviz, stage} = useStoreon('stage', 'kviz', 'modal');
    const [buttons, setButtons] = useState(null);
    const ref = useRef(null);

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
            if (stagesData[stage].layout === LAYOUTS.quiz) {
                //dispatch('kviz/set',kviz.order + 1);
            }
        }
    }, [stage]);

    const handlerStage = (next, number) => () => {
        sounds.mouseclick.play();
        dispatch('kviz/set', number === 1 ? number : number - 1);
        dispatch('kviz/show');
        dispatch('stage/to', next);
        dispatch('modal/hide');
    };


    return (
        <Wrapper>
            <Inner ref={ref}>
                <Title>
                    <TextWithBorders strokeWidth={"0.15em"} strokeColor={"#896549"} color='#fce4be' text="Izaberi kviz!"/>
                </Title>
                <Buttons>
                    {
                        buttons && buttons.map((button, i) => {
                            const index = i;
                            return (
                                <Button current={kviz.order === index + 1} onClick={handlerStage(button.id, index + 1)}
                                        key={button.id}>
                                    {index + 1}
                                </Button>
                            )
                        })
                    }
                </Buttons>
            </Inner>
        </Wrapper>
    )
};