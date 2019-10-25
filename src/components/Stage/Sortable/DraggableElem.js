import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    z-index: 2;
    width: 4rem;
    height: 4rem;
    color: #fff;
    background-color: #5C9700;
    font-family: 'Zilla Slab', serif;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
    border: solid #fff 3px;
    
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
