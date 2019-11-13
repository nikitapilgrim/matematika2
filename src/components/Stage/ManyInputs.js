import React, {useState, useEffect,useLayoutEffect, useRef} from 'react';
import styled from 'styled-components';
import useMount from "react-use/lib/useMount";
import useStoreon from "storeon/react";

const Inputs = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Input = styled.input`
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    font-size: 2rem;
    white-space: nowrap;
    display: inline-block;
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
      transition: 0.2s;
    }
`;

export const ManyInputs = ({data, handler}) => {
    const [inputs, setInputs] = useState(null);
    const {dispatch, help} = useStoreon('help');
    const ref = useRef(null);
    const [inputsRef, setInputsRef] = useState([]);
    const [init, setInit] = useState(null);


    useEffect(() => {
        if (ref.current) {
            const wrapper = ref.current;
            setInputsRef([...wrapper.querySelectorAll('input')].filter(input => !input.placeholder))
            setTimeout(() => setInit(true), 300)

        }
    }, [ref, inputs]);


    useEffect(() => {
        if (data) {
            setInputs([...data].map((input, i) => {
                input.value = '';
                input.id = i;
                return input
            }))
        }
    }, [data]);

    const handlerInputs = answer => e => {
        const regexp = /^[0-9]*$/gm;
        const type = new RegExp(regexp).test(answer) ? 'number' : 'text';
        const value = e.target.value;
        const current = inputs.find((input) => input.answer === answer);
        const clone = [...inputs];
        const index = inputs.indexOf(current);
        if (type === 'number') {
            const re = /^[0-9\b]+$/;
            if (value === '' || re.test(value)) {
                clone[index].value = value;
                setInputs(clone);
            }
        }
        if (type === 'text') {
            //const re = /^[A-Za-z]+$/;
            const re = /^[0-9\b]+$/;
            if (value === '' || !re.test(value)) {
                clone[index].value = value;
                setInputs(clone);
            }
        }
    };

    useEffect(() => {
        if (inputsRef.length > 0 && !init) {
            //  console.log(inputsRef, 'test')
            inputsRef.find(ref => !ref.placeholder).focus();
        }
    }, [inputsRef]);

    useEffect(() => {
        if (inputs && inputsRef.length > 0) {
            const check = inputs.every((input, i, arr) => {
                if (input.value === input.answer.toString() || input.answer === input.placeholder) {
                    return true;
                }
            });
            [...inputs].filter(input => !input.placeholder).reverse().some((input, i, arr) => {
                if (
                    input.value.length > 0
                ) {
                    if (input.value.length === input.answer.toString().length) {
                        if (inputsRef[arr.length - i]) {
                            inputsRef[arr.length - i].focus();
                        }
                    }
                    return true
                }
            });

            /*  if (!input.placeholder &&
                  input.value &&
                  input.value.length === input.answer.toString().length &&
                  input.value.length > 1 &&
                  i !== arr.length - 1
              ) {
                  if (inputsRef[i + 1] && !arr[arr.length - 1].value) {
                      inputsRef[i + 1].focus();
                  }
              }*/

            handler(check || inputs.reduce((acc, item, index) => `${acc}${index > 0 && ',' || ''}${item.answer || item.placeholder}`, ``))
        }
    }, [inputs, inputsRef]);

    return (
        <Inputs ref={ref}>
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
        </Inputs>
    )
};