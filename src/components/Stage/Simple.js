import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import useComponentSize from '@rehooks/component-size'
import reactStringReplace from 'react-string-replace';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Question = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    font-size: 3rem;
    color: white;
`;

const InputWrapper = styled.span`
    display: inline-block;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    font-size: 3rem;
    white-space: nowrap;
`;

const Input = styled.input`
    display: inline-block;
    padding: 0px 10px;
    margin: 0;
    margin-left: 10px;
    width: ${props => props.width ? `${props.width}px` : '6rem'};
    min-height: 6rem;
    min-width: 6rem;
    height: ${props => props.height ? `${props.height}px` : '6rem'};
    text-align: center;
    background-color: #5a5f3f;
    border: dashed #fff 5px;
    outline: none;
    color: #fff;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);  
`;

const HiddenAnswer = styled.div`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

const InputWithState = ({question,answer, handler}) => {
    const ref = useRef(null);
    let size = useComponentSize(ref);
    let {width, height} = size;
    const [value, setValue] = useState('');
    const handlerInput = (e) => {
        const value = e.target.value;
        console.log(value)
        setValue(value);
    };


    useEffect(() => {
        setValue('')
    }, [question]);

    useEffect(() => {
        value && handler(value);
    }, [value]);

    return (
        <>
            {reactStringReplace(question, /{{([^}]+)}}/g, (match, i) => {
                return (
                    <InputWrapper key={i}>
                        <HiddenAnswer ref={ref}>{answer}</HiddenAnswer>
                        <Input width={width} height={height} value={value} onChange={handlerInput}/>
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