import React, {useEffect, useState} from 'react';
import useKeyPressEvent from "react-use/lib/useKeyPressEvent";
import useStoreon from "storeon/react";
import styled from 'styled-components';
import {Simple} from "./Simple";
import {ManyInputs} from "./ManyInputs";
import {DragAndDrop} from "./DragAndDrop";
import {Sortable} from "./Sortable/Sortable";
import {Choice} from "./Choice";
import {LAYOUTS} from "../../data/stages";
import {Speech} from "../Speech";


const NextButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 0.5em 0;
    width: 12rem;
    max-width: 110px;
    max-height: 80px;
    border: #fff 2px solid;
    background: #09A900;
    color: #fff;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 5px;
    margin: -10px 0 10 10px;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.87);
    cursor: pointer;
    outline: none;
    &:hover {
      background: #0bcd00;
      cursor: pointer;
      transition: .1s ease-in-out;
    }
`;

export const Stage = ({data, onNext}) => {
    const [answer, setAnswer] = useState(null);
    const {dispatch, modal, kviz} = useStoreon('modal', 'kviz');

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

    useEffect(() => {
        if (!kviz.show) {
            const handlerClickWindow = (e) => {
                if (data.layout === LAYOUTS.speech && !modal) {
                    handlerNext();
                }
            };
            window.addEventListener("click", handlerClickWindow);
            return () => {
                window.removeEventListener("click", handlerClickWindow);
            };
        }
    }, [data, modal, kviz]);


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
            {data.layout === LAYOUTS.speech && <Speech phrase={data.phrase} audio={data.audio}/>}
            {data.layout !== LAYOUTS.speech && data.layout !== LAYOUTS.choice && <NextButton onClick={handlerNext}>Dalje</NextButton>}
        </>
    )
};