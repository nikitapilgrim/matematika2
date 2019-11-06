import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import useComponentSize from '@rehooks/component-size'
import reactStringReplace from 'react-string-replace';
import useStoreon from "storeon/react";
import InputNumber from 'react-input-just-numbers';
import {set} from "ramda";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Question = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    font-size: 3rem;
    color: white;
`;

const InputWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    font-size: 3rem;
    white-space: nowrap;
    width: ${props => props.width ? `${props.width}px` : '6rem'};
    height: ${props => props.height ? `${props.height}px` : '6rem'};
    padding: 0px 10px;
     margin: 0;
    margin-left: 10px;
    min-height: 6rem;
    min-width: 6rem;
`;

const Input = styled.input`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-family: 'Roboto Condensed', sans-serif;
    display: inline-block;
    padding: 0px 10px;
    -moz-appearance:textfield;
    text-align: center;
    background-color: #5a5f3f;
    border: dashed #fff 5px;
    outline: none;
    color: #fff;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);  
    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
`;

const HiddenAnswer = styled.div`
  opacity: ${props => props.show ? '0.5' : '0'};
  transition: 0.2s;
  position: absolute;
  pointer-events: none;
  z-index: 1;
`;

const InputWithState = ({question, answer, handler}) => {
    const {dispatch, help} = useStoreon('help');
    const inputRef = useRef(null);
    const ref = useRef(null);
    let size = useComponentSize(ref);
    let {width, height} = size;
    const [value, setValue] = useState('');
    const regexp = /^[0-9]*$/gm;
    const type = new RegExp(regexp).test(answer) ? 'number' : 'text';
    const handlerInput = (e) => {
        const value = e.target.value;
        if (type === 'number') {
            const re = /^[0-9\b]+$/;
            if (value === '' || re.test(value)) {
                setValue(value)
            }
        }
        if (type === 'text') {
            const re = /^\w+$/ui;
            console.log(value, !re.test(/^\w+$/))
            if (value === '' || re.test(value)) {
                setValue(value)
            }
        }
    };


    useEffect(() => {
        setValue('')
        inputRef.current.focus()
    }, [question]);

    useEffect(() => {
        value && handler(value);
    }, [value]);

    return (
        <>
            {reactStringReplace(question, /{{([^}]+)}}/g, (match, i) => {
                return (
                    <InputWrapper width={width} height={height} key={i}>
                        <HiddenAnswer show={help} ref={ref}>{answer}</HiddenAnswer>
                        <Input ref={inputRef} pattern={type === "number" ? "[0-9]*" : ''} value={value}
                               onChange={handlerInput}
                        />
                    </InputWrapper>
                )
            })}
        </>
    )
};


export const Simple = ({question, handlerInput, answer}) => {


    return (
        <Wrapper>
            <Question>
                <InputWithState answer={answer} question={question} handler={handlerInput}/>
            </Question>
        </Wrapper>
    )
};