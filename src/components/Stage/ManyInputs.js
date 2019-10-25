import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import useMount from "react-use/lib/useMount";

const Inputs = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Input = styled.input`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    white-space: nowrap;
    display: inline-block;
    padding: 0px 10px;
    margin: 0;
    margin-left: 10px;
    width: 4rem;
    height: 4rem;
    text-align: center;
    background-color: #5a5f3f;
    border: dashed #fff 2px;
    outline: none;
    color: #fff;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);  
    &::placeholder {
      color: #fff;
      opacity: 0.8;
    }
`;

export const ManyInputs = ({data, handler}) => {
    const [inputs, setInputs] = useState(null);

    useMount(() => {
        if (data) {
            setInputs([...data])
        }
    });

    const handlerInputs = answer => e => {
        const value = e.target.value;
        const current = inputs.find((input) => input.answer === answer);
        const clone = [...inputs];
        const index = inputs.indexOf(current);
        clone[index].value = value;
        setInputs(clone);
    };

    useEffect(() => {
        console.log(inputs)
        if (inputs) {
            const check = inputs.every(input => {
                return input.value === input.answer.toString() || input.answer === input.placeholder;
            });
            handler(inputs.reduce((acc, item, index) => `${acc}${index > 0 && ',' || ''}${item.answer || item.placeholder}`, ``))

        }
    }, [inputs]);

    return (
        <Inputs>
            {inputs && inputs.map((data, i) => {
              return (
                  <Input key={i} disabled={!!data.placeholder} placeholder={data.placeholder || ''} onKeyUp={handlerInputs(data.answer)}/>
              )
            })}
        </Inputs>
    )
};