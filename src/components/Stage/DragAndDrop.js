import React, {useCallback, useEffect, useMemo, useState} from 'react';
import styled from 'styled-components';
import HTML5Backend from "react-dnd-html5-backend";
import {DndProvider, useDrag, useDrop} from "react-dnd";
import reactStringReplace from 'react-string-replace';

const Wrapper = styled.div`

  height: 100%;
  width: 100%;
`;

const Items = styled.div`
  display: flex;
  justify-content: center;
  
`

const DraggableElem = styled.div`
    width: 50px;
    height: 50px;
    color: #fff;
    background-color: #5C9700;
    font-family: 'Zilla Slab', serif;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
`;
const DroppableInner = styled.div`
  border: 1px solid red;
  width: 50px;
  height: 50px;
`;


const DraggableComponent = ({id, type, placeholder}) => {
    const [collectedProps, drag] = useDrag({
        item: {id, type, placeholder}
    });
    return (
        <DraggableElem ref={drag}>
            {placeholder}
        </DraggableElem>
    );
};

const DroppableArea = ({items, onDrop}) => {

    const [collectedProps, drop] = useDrop({
        accept: "item",
        drop: onDrop,
        collect: monitor => {
            return {
                hovered: monitor.isOver()
            };
        }
    });

    const listItems = items.map((item, idx) => {
        return (
            <DraggableElem key={idx}>{item.placeholder}</DraggableElem>
        )
    });

    return (
        <DroppableInner>
            <div
                className={`drop-area ${
                    collectedProps.hovered ? "drop-area-hovered" : ""
                }`}
                ref={drop}
            >
                Drop Target
            </div>
            {listItems}
        </DroppableInner>
    );
};

const parseQuestion = (question) => {
    const type = question.match(/{{([^}]+)}}/);
    return type[1].match(/\(([^()]+)\)/)[1]
};

export const DragAndDrop = ({data}) => {
    const [droppedItems, setDroppedItems] = useState([]);
    const [items, setItems] = useState(data.items.map((item, i) => {
        return {
            placeholder: item.placeholder,
            id: i,
        }
    }));
    const parsedAnswer = useMemo(() => parseQuestion(data.question), [data.question]);

    const appendItem = useCallback(
        item => {
            const droppedItem = items.filter(elem => elem.placeholder === item.placeholder);
            const droppedIndex = items.indexOf(droppedItem[0]);
            const droppedItems = items.filter((_, i) => i === droppedIndex);
            setItems(items.filter((_, i) => i !== droppedIndex));
            setDroppedItems(droppedItems);
        },
        [setItems]
    );

    useEffect(() => {

    });

    return (
        <DndProvider backend={HTML5Backend}>
            <Wrapper>
                {reactStringReplace(data.question, /{{([^}]+)}}/g, (match, i) => {
                    console.log(match, 'match')
                    return (
                        <DroppableArea items={droppedItems} onDrop={appendItem}/>
                    )
                })}
                <Items>
                    {items.map((item, i) => (
                        <DraggableComponent key={i} placeholder={item.placeholder} id={i} type="item"/>
                    ))}
                </Items>
            </Wrapper>
        </DndProvider>
    )
};

