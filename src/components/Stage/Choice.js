import React, {Fragment, useEffect, useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-wrap: wrap;*/
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const Elem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #5C9700;
    font-family: 'Luckiest Guy', cursive;
    border: solid #fff 3px;
    font-size: 50px;
    font-weight: bold;
    cursor: pointer;
    width: 7rem;
    height: 7rem;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
    transition: all 0.2s ease-in;
    &:hover {
      background-color: #70b800;
    }
`;
const Span = styled.span`
  position: relative;
  top: -0.4rem
`

export const Choice = ({data, handler}) => {
    const [answer, setAnswer] = useState(null);

    const handlerClick = (answer, value) => () => {
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