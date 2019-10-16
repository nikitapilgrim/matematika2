import React, {Fragment} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: flex-start;
   flex-wrap: wrap;
`;

const Elem = styled.div`
    color: #fff;
    background-color: #5C9700;
    font-family: 'Zilla Slab', serif;
    font-size: 50px;
    font-weight: bold;
    cursor: pointer;
    width: 50%;
    height: 96px;
`;

export const Choice = ({data}) => {
    const handlerClick = answer => () => {
        answer && console.log('true')
    };

    return (
        <Wrapper>
            {data.items.map((item, i) => {
                return (
                    <Fragment key={i}>
                        <Elem onClick={handlerClick(item.right)}>{item.placeholder}</Elem>
                    </Fragment>
                )
            })}
        </Wrapper>
    )
};