import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {DragDropContext} from 'react-beautiful-dnd'
import {Droppable, Draggable} from 'react-beautiful-dnd'
import {DraggableElem} from "./DraggableElem";
import arrayMove from 'array-move';

import useMount from "react-use/lib/useMount";

const DroppedContainer = styled.div`
  display: flex;
  position: relative;
  width: 200px;
  height: 50px;
  border: 1px solid black;
`;

const DroppedPlaceholder = styled.div`
    height: 40px;
    width: 51px;
    text-align: center;
    border: dashed #fff 3px;
`;

const ItemsContainer = styled.div`
  display: flex;
`;


const ItemsList = React.memo(({items}) => {
    return items.map((item, index) => (
        <DraggableElem item={item} index={index} key={item.id}/>
    ));
});

export const Sortable = ({data, handler}) => {
    const [items, setItems] = useState(data.items);
    const [resultItems, setResultItems] = useState({});

    useEffect(() => {
        console.log(resultItems, 'resultItems')
    }, [resultItems])

    const onDragEnd = (result) => {
        console.log(result)

        if (!result.destination) {
            return;
        }

        // from result to result
        if (result.source.droppableId === 'items' && result.destination.droppableId === 'items') {
            setItems(arrayMove(items, result.source.index, result.destination.index))
            return false;
        }
        // from items to result
        if (result.source.droppableId === 'items' && result.destination.droppableId !== 'items') {
            setResultItems({
                ...resultItems, [result.destination.droppableId]: items[result.source.index]
            });
            setItems(items.filter(item => items[result.source.index] !== item))
            return false;
        }
        if (result.source.droppable !== 'items') {
            // if no swap
            if (!resultItems[result.destination.droppableId]) {
                const deletedProp = result.source.droppableId;
                const copy = {...resultItems};
                delete copy[deletedProp];
                setResultItems({...copy, [result.destination.droppableId]: resultItems[deletedProp]})
                return  false;
            } else {
                // if swap
                const first = result.source.droppableId;
                const second = result.destination.droppableId;
                const copy = {...resultItems};
                copy[first] = resultItems[second];
                copy[second] = resultItems[first];
                setResultItems(copy)
            }

        }

    };


    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <DroppedContainer>

                {data.answer.map((answer, index) => {
                    return (
                        <Droppable droppableId={'result' + index}>
                            {provided => (
                                <DroppedPlaceholder ref={provided.innerRef} {...provided.droppableProps}>
                                    {answer.placeholder}
                                    {provided.placeholder}
                                    {resultItems['result'+ index] && <DraggableElem item={resultItems['result'+ index]} index={index}
                                                                          key={resultItems['result'+ index].id}/>}
                                </DroppedPlaceholder>)}
                        </Droppable>
                    )
                })}

            </DroppedContainer>
            <div>
                <Droppable direction="horizontal" droppableId="items">
                    {provided => (
                        <ItemsContainer ref={provided.innerRef} {...provided.droppableProps}>
                            <ItemsList items={items}/>
                            {provided.placeholder}
                        </ItemsContainer>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    )
};