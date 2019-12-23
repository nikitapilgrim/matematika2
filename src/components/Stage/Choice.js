import React, {Fragment, useEffect, useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   flex-wrap: wrap;
`;

const Elem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #fe0002;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    //border: solid #fff 3px;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 2rem;
    cursor: pointer;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
    transition: all 0.2s ease-in;
    /*&:hover {
      background-color: #70b800;
    }*/
    &:not(:first-child) {
      margin-top: 1rem;
    }
`;
const Span = styled.span`
  position: relative;
  top: -0.2rem
`;

export const Choice = ({data, handler}) => {
    const [answer, setAnswer] = useState(null);

    const handlerClick = (answer, value) => () => {
        console.log('kick')
        setAnswer({
            right: answer,
            value: value
        });
    };

    useEffect(() => {
        setAnswer(null)
    }, [data]);

    useEffect(() => {
        if (answer) {
            handler(answer)
        }
    }, [answer]);

    return (
        <Wrapper>
            {data.items.map((item, i) => {
                return (
                    <Fragment key={i}>
                        <Elem onClick={handlerClick(item.right, item.placeholder)}>
                            <Span>
                                {item.placeholder}
                            </Span>
                        </Elem>
                    </Fragment>
                )
            })}
        </Wrapper>
    )
};