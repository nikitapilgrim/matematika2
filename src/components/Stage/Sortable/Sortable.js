import React, {useEffect, useState, useMemo} from 'react';
import styled from 'styled-components';
import {DragDropContext} from 'react-beautiful-dnd'
import {Droppable, Draggable} from 'react-beautiful-dnd'
import {DraggableElem} from "./DraggableElem";
import arrayMove from 'array-move';

import useMount from "react-use/lib/useMount";
import equals from "ramda/es/equals";
import useStoreon from "storeon/react";

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
    font-family: 'Luckiest Guy', cursive;
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


const HiddenWrapper = styled.div`
    position: absolute;
    z-index: 3;
    opacity: ${props => props.help ? 0.8 : 0};
    transition: 0.2s;
    div {
       
        left: -0.1rem;
        right: 0;
        top: 0;
    }
`;



const ItemsList = React.memo(({items}) => {
    return items.map((item, index) => (
        <DraggableElem item={item} index={index} key={item.id}/>
    ));
});

export const Sortable = ({data, handler}) => {
    const [items, setItems] = useState(data.items);
    const [resultItems, setResultItems] = useState({});
    const {dispatch, help} = useStoreon('help');

    const result = useMemo(() => {
        const items = data.items;
        const answer = data.answer;
        return Object.entries(answer).reduce((acc, pair) => {
            const [key, value] = pair;
            return [...acc, Object.values(items).find(item => item.id === value.id).value]
        }, []);
    }, [data]);


    useEffect(() => {
        const convert = (obj) => Object.entries(obj).reduce((acc, pair) => {
            const [key, value] = pair;
            return [...acc, {key: +key.replace(/\D+/g,""), value}]
        }, []);
        const convertResult = convert(resultItems)
            .reduce((acc, item) => [...acc, {key: item.key, value: item.value.value}], [])
            .sort((a, b) => a.key - b.key);
        const convertItems = convert(result);
        const equalsResults = equals(convertResult, convertItems);
        handler({right: false, value: result.toString()});
        if (equalsResults) {
            handler({right: true, value: result.toString()})
        }
        if (convertResult.length === convertItems.length && !equalsResults) {
            handler({right: false, value: result.toString()})
        }
    }, [resultItems]);

    useEffect(() => {
        setItems(data.items);
        setResultItems({})
    }, [data]);

    const onDragEnd = (result) => {

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
                        <Droppable key={index} droppableId={'result' + index}>
                            {provided => (
                                <DroppedPlaceholder ref={provided.innerRef} {...provided.droppableProps}>
                                    <PlaceholderInner>{answer.placeholder}</PlaceholderInner>

                                    {help && <HiddenWrapper help={help}>
                                        <DraggableElem item={{id: 'help' + index, value: result[index]}} index={index}
                                                       key={'help' + index}/>
                                    </HiddenWrapper>}

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