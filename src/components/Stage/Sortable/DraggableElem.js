import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 50px;
    height: 50px;
    color: #fff;
    background-color: #5C9700;
    font-family: 'Zilla Slab', serif;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:not(:first-child) {
      margin-left: 5px;
    }
    &:not(:last-child) {
      margin-right: 5px;
    }
`;


export const  DraggableElem = ({ item, index }) => {
    return (
        <Draggable draggableId={item.id} index={index}>
            {provided => (
                <Wrapper
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {item.value}
                </Wrapper>
            )}
        </Draggable>
    );
}
