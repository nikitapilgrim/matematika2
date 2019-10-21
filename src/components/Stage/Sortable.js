import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import useMount from "react-use/lib/useMount";
import {Container, Draggable} from 'react-smooth-dnd';


const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
    &:not(:first-child) {
      margin-left: 5px;
    }
    &:not(:last-child) {
      margin-right: 5px;
    }
`;

const DroppedContainer = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
  border: 1px solid black;
`;

const DroppedPlaceholderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const DroppedPlaceholder = styled.div`
    height: 40px;
    width: 51px;
    text-align: center;
    border: dashed #fff 3px;
`;

const SortableItem = SortableElement(({value}) => <DraggableElem>{value}</DraggableElem>);

const SortableList = SortableContainer(({items}) => {
    return (
        <Wrapper>
            {items.map((item, index) => {
                return (
                    <SortableItem key={item.id} value={item.value} index={index}/>
                )
            })}
        </Wrapper>
    );
});

const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;

    const result = [...arr];
    let itemToAdd = payload;

    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
    }

    if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
    }

    return result;
};

export const Sortable = ({data, handler}) => {
    const [items, setItems] = useState(data.items);
    const [resultItems, setResultItems] = useState([]);

    const onSortEnd = ({oldIndex, newIndex}) => {
        setItems((items) => arrayMove(items, oldIndex, newIndex));
    };

    useEffect(() => {
        const flatValues = items.reduce((acc, item) => [...acc, item.value], []);
        const check = flatValues.every((value, i) => data.answer[i] === value);
        handler(flatValues);
    }, [items]);

    const handleResultOnDrop =  (e) => {
        setResultItems(applyDrag(resultItems, e))
    };

    const handlerItemsOnDrop = e => {
        setItems(applyDrag(items, e))
    };


    return (
        <>
            <SortableList items={items} axis='x' onSortEnd={onSortEnd}/>
            <DroppedContainer>
                <DroppedPlaceholderWrapper>
                    {data.answer.map(item => <DroppedPlaceholder>{item.placeholder}</DroppedPlaceholder>)}
                </DroppedPlaceholderWrapper>
                <Container orientation='horizontal'
                           groupName='1'
                           getChildPayload={i => resultItems[i]}
                           onDrop={handleResultOnDrop}>

                    {resultItems.map(item => {
                        return (
                            <Draggable key={item.id}>
                                {item.value}
                            </Draggable>
                        );
                    })}
                </Container>
            </DroppedContainer>
            <Container orientation='horizontal' groupName='1' getChildPayload={i => items[i]} onDrop={handlerItemsOnDrop}>
                {items.map(item => {
                    return (
                        <Draggable key={item.id}>
                            {item.value}
                        </Draggable>
                    );
                })}
            </Container>
        </>
    )
};