import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import useMount from "react-use/lib/useMount";
import {Input} from "../Input";

const Inputs = styled.div`
  display: flex;
  justify-content: flex-start;
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
                  <Input key={i} placeholder={data.placeholder || ''} onKeyUp={handlerInputs(data.answer)}/>
              )
            })}
        </Inputs>
    )
};