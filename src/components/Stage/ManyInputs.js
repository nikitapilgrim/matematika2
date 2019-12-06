import React, {useState, useMemo, useEffect, useRef} from 'react';
import styled from 'styled-components';
import useStoreon from "storeon/react";
import {Simple} from "./Simple";

const Inputs = styled.div`
  display: flex;
  flex-direction: ${props => props.direction === 'row' ? 'row' : 'column'};
  justify-content: flex-start;
  & > div {
    margin-top: 0.5em;
  }
`;

const parseQuestions = (questions) => {
    const regexp = /{{([^}]+)}}/i;
    return questions.reduce((acc, item, i) => {
        const data = {
            answer: item.question.match(regexp)[1],
            question: item.question,
            key: i,
            img: item.img
        };
        return [...acc, data]
    }, [])

};

export const ManyInputs = ({data, handler}) => {
    const [inputs, setInputs] = useState({});
    const ref = useRef();
    const {dispatch, stage, help} = useStoreon('help', 'stage');
    const questions = useMemo(() => parseQuestions(data.questions), [data.questions]);
    const simpleDirection = data.direction === 'row' ? 'column' : 'row';

    const inputHandler = (i) => (value) => {
        setInputs({...inputs, [i]: value})
    };

    useEffect(() => {
        const answers = questions.reduce((acc, item) => {
            return [...acc, item.answer]
        }, []);
        const right = Object.entries(inputs).every((pair) => {
            const [key, value] = pair;
            if (answers[key]) {
                if (answers[key] === value) return true
            }
            return false
        });
        if (right && Object.values(inputs).length === answers.length) {
            dispatch('stage/next')
        }
    }, [inputs]);

    useEffect(() => {
        if (ref.current) {
            ref.current.querySelector('input').focus();
        }
    }, [data, ref]);

    return (
        <Inputs ref={ref} direction={data.direction}>
            {questions.map((data => (
                <Simple
                    img={data.img}
                    direction={simpleDirection}
                    handlerInput={inputHandler(data.key)}
                    key={data.key}
                    answer={data.answer}
                    question={data.question}/>
            )))}
            {/* <Inputs ref={ref}>
            {inputs && inputs.map((data, i) => {
                const answer = !data.placeholder && data.answer;
                return (
                    <Input
                        maxLength={answer.toString().length}
                        value={inputs[i].value || ''}
                        key={i}
                        disabled={!!data.placeholder || help}
                        placeholder={data.placeholder || help && answer || ''}
                        onChange={handlerInputs(data.answer)}/>
                )
            })}
        </Inputs>*/}
        </Inputs>
    )
};