import React, {useEffect, useState} from 'react';
import useKeyPressEvent from "react-use/lib/useKeyPressEvent";
import styled from 'styled-components';
import {Simple} from "./Simple";
import {ManyInputs} from "./ManyInputs";
import {DragAndDrop} from "./DragAndDrop";
import {Sortable} from "./Sortable";
import {Choice} from "./Choice";
import {LAYOUTS} from "../../data/stages";

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

export const Stage = ({data, onNext}) => {
    const [answer, setAnswer] = useState(null);

    useEffect(() => {
        setAnswer(null)
    }, [data]);

    const handlerNext = () => {
        onNext(answer || {
            value: data.answer,
            right: false
        })
    };
    useKeyPressEvent('Enter', handlerNext);


    const handlerInput = (value) => {
        if (typeof data.answer === 'number') {
            if (+value === data.answer) {
                setAnswer({
                    value: value,
                    right: true
                });
            }
            return;
        }
        if (value === data.answer) {
            setAnswer({
                value: value,
                right: true
            });
        } else {
            setAnswer({
                value: data.answer,
                right: false
            });
        }
    };

    const handlerManyInputs = (values) => {
        setAnswer(values)
    };



    return (
        <>
            {data.layout === LAYOUTS.simple &&
            <Simple question={data.question} answer={data.answer} handlerInput={handlerInput}/>}
            {data.layout === LAYOUTS.manyInputs && <ManyInputs handler={handlerManyInputs} data={data.inputs}/>}
            {data.layout === LAYOUTS.dragAndDrop && <DragAndDrop data={data}/>}
            {data.layout === LAYOUTS.sortable && <Sortable data={data} handler={handlerManyInputs}/>}
            {data.layout === LAYOUTS.choice && <Choice data={data}/>}
            <NextButton onClick={handlerNext}>Dalje</NextButton>
        </>
    )
};