import React, {useEffect, useState, useReducer} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Refresh = styled.button`
   width: 2rem;
   height: 2rem;
`;

const Input = styled.input`
  background-color: #cebca4;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 3px;
`;

function init(data) {
    return {
        value: data.question,
        cache: data.question
    };
}

function reducer(state, action) {
    switch (action.type) {
        case 'setValue':
            return {
                ...state, value: action.payload
            };
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

export function EditCorrect({data}) {
    const {answer, question} = data;
    const [state, dispatch] = useReducer(reducer, data, init);

    useEffect(() =>  {
        dispatch({type: 'reset', payload: data})
    }, [data]);

    const handlerOnChange = (e) => {
        const value = e.target.value;
        dispatch({type: 'setValue', payload: value})
    };

    const handlerRefresh = () => {
        dispatch({type: 'reset', payload: data})
    };

    return (
        <Wrapper>
            <Input onChange={handlerOnChange} value={state.value}/>
            <Refresh onClick={handlerRefresh}/>
        </Wrapper>
    )
}