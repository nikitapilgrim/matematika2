import React, {useState} from 'react';
import styled from 'styled-components';
import {Simple} from "./Simple";
import {ManyInputs} from "./ManyInputs";
import {DragAndDrop} from "./DragAndDrop";
import {Sortable} from "./Sortable";
import {Choice} from "./Choice";
import {LAYOUTS} from "../../data/stages";

import desk from '../../assets/image/classroom_blackboard_cube.png'

const Wrapper = styled.div`
    width: 50rem;
    display: flex;
    justify-content: center;
    position: relative;
    pointer-events: auto;
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 31%;
    width: 91%;
    height: 49%;
    pointer-events: auto;
`;

const NextButton = styled.button`
    margin-top: 20px;
    width: 110px;
    border: #fff 2px solid;
    background: #09A900;
    padding: 10px;
    color: #fff;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 20px;
    border-radius: 5px;
    margin: -10px 0 10 10px;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.87);
    cursor: pointer;
    cursor: hand;
`;

const DeskWrapper = styled.div`
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  top: -15vh;
  overflow: hidden;
  pointer-events: auto;
  img {
    display: inline-block;
    max-width: 100%;
  }
`;

export const Stage = ({data, onNext}) => {
    const [answer, setAnswer] = useState(null);
    console.log(data)

    const handlerInput = (value) => {
        if (+value === data.answer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    };

    const handlerManyInputs = (values) => {
        setAnswer(values)
    };


    return (
        <Wrapper>
            <DeskWrapper>
                <img src={desk} alt=""/>
                <Inner>
                    {data.layout === LAYOUTS.simple && <Simple question={data.question} answer={data.answer} handlerInput={handlerInput}/>}
                    {data.layout === LAYOUTS.manyInputs && <ManyInputs handler={handlerManyInputs} data={data.inputs}/>}
                    {data.layout === LAYOUTS.dragAndDrop && <DragAndDrop data={data}/>}
                    {data.layout === LAYOUTS.sortable && <Sortable data={data} handler={handlerManyInputs}/>}
                    {data.layout === LAYOUTS.choice && <Choice data={data}/>}
                    <NextButton onClick={onNext(answer)}>Dalje</NextButton>
                </Inner>
            </DeskWrapper>
        </Wrapper>
    )
};