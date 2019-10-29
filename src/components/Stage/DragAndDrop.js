import React, {useEffect, useState, useMemo} from 'react';
import styled from 'styled-components';
import {DragDropContext} from 'react-beautiful-dnd'
import {Droppable, Draggable} from 'react-beautiful-dnd'
import {DraggableElem} from "./Sortable/DraggableElem";
import arrayMove from 'array-move';
import reactStringReplace from 'react-string-replace';

import useMount from "react-use/lib/useMount";

const DroppedContainer = styled.div`
  display: flex;
  position: relative;
  & > div {
    &:not(:first-child) {
      margin-left: 0.4rem;
    }
  }
`;

const DroppedPlaceholder = styled.div`
    position: relative;
    width: 4rem;
    height: 4rem;
    text-align: center;
    border: dashed #fff 3px;

    & > div {
      &:nth-child(1) {
        position: absolute;
        left: 0;
        right: 0;
        top: -0.2rem;
        }
      &:nth-child(2) {
        top: -0.22rem;
        left: -0.19rem;
        transform: scale(1.03);
      }
    }
`;
const PlaceholderInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
   
    z-index: 0;
    height: 100%;
    width: 100%;
    color: #fff;
    font-family: 'Zilla Slab', serif;
    font-size: 2rem;
    font-weight: bold;
`;

const ItemsContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  & > div {
      &:not(:first-child) {
          margin-left: 0.4rem;
        }
  }
`;


const ItemsList = React.memo(({items}) => {
    return items.map((item, index) => (
        <DraggableElem item={item} index={index} key={item.id}/>
    ));
});


const Question = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    font-size: 3rem;
    color: white;
    & > div {
      margin: 0 1rem;
    }
`;


const parseQuestion = (question) => {
    const type = question.match(/{{([^}]+)}}/);
    return type[1].match(/\(([^()]+)\)/)[1]
};

export const DragAndDrop = React.memo(({data, handler}) => {
    const [items, setItems] = useState(data.items);
    const [resultItems, setResultItems] = useState({});
    const [question, setQuestion] = useState(data.question);
    const parsedAnswer = useMemo(() => parseQuestion(data.question), [data.question]);

    useEffect(() => {
        console.log(resultItems, 'resultItems')
    }, [resultItems])

    useEffect(() => {
        setItems(data.items);
        setQuestion(data.question);
        setResultItems({})
    }, [data]);

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
                return false;
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
                <Question>
                    {reactStringReplace(question, /{{([^}]+)}}/g, (match, i) => {
                        return (
                            <Droppable key={i} droppableId={'result' + i}>
                                {provided => (
                                    <DroppedPlaceholder ref={provided.innerRef} {...provided.droppableProps}>
                                        <PlaceholderInner>?</PlaceholderInner>
                                        {resultItems['result' + i] &&
                                        <DraggableElem item={resultItems['result' + i]} index={i}
                                                       key={resultItems['result' + i].id}/>
                                        }
                                    </DroppedPlaceholder>
                                )
                                }
                            </Droppable>
                        )
                    })}
                </Question>
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
});

