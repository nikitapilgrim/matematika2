import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import createMemo from 'react-use/lib/createMemo';
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

const Input = styled.input`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    font-size: 55px;
    white-space: nowrap;
    display: inline-block;
    padding: 0px 10px;
    margin: 0;
    margin-left: 10px;
    width: 6rem;
    height: 6rem;
    text-align: center;
    background-color: #5a5f3f;
    border: dashed #fff 5px;
    outline: none;
    color: #fff;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);  
`;

const InputWithState = ({question, handler}) => {
    const [value, setValue] = useState('');
    const handlerInput = (e) => {
      const value = e.target.value;
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
                    <Input value={value} key={i} onKeyUp={handlerInput}/>
                )
            })}
        </>
    )
};



export const Simple = ({question, handlerInput}) => {

    return (
        <Wrapper>
            <Question>
                <InputWithState question={question} handler={handlerInput}/>
            </Question>
        </Wrapper>
    )
};