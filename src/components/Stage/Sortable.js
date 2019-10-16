import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import useMount from "react-use/lib/useMount";

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


const SortableItem = SortableElement(({value}) => <DraggableElem>{value}</DraggableElem>);

const SortableList = SortableContainer(({items}) => {
    return (
        <Wrapper>
            {items.map((item, index) => {
                console.log(item);
                return (
                    <SortableItem key={item.id} value={item.value} index={index}/>
                )
            })}
        </Wrapper>
    );
});


export const Sortable = ({data, handler}) => {
    const [items, setItems] = useState(data.items);

    const onSortEnd = ({oldIndex, newIndex}) => {
        setItems((items) => arrayMove(items, oldIndex, newIndex));
    };

    useEffect(() => {
     const flatValues = items.reduce((acc, item) => [...acc, item.value], []);
     const check = flatValues.every((value, i) => data.answer[i] === value);
     handler(flatValues);
    }, [items]);

    return (
        <SortableList items={items} axis='x' onSortEnd={onSortEnd} />
    )
};