import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
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
  display: flex;
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

const applyDrag = (arr, dragResult) => {
    const {removedIndex, addedIndex, payload} = dragResult;
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


    const shouldAnimateDrop = (sourceContainerOptions, payload) => {
        //console.log(sourceContainerOptions, payload);
        return false;
    };

    useEffect(() => {
        const flatValues = items.reduce((acc, item) => [...acc, item.value], []);
        const check = flatValues.every((value, i) => data.answer[i] === value);
        handler(flatValues);
    }, [items]);

    // change if elem have
    const handleResultOnDrop = id => (e) => {
        //console.log(e, id)
        if (e.addedIndex === 0 && resultItems[id]) {
            setItems([...items, resultItems[id]]);
        }
        if (e.addedIndex === 0) {
            setResultItems(prev => ({...prev, [id]: e.payload}))
        }
    };

    const handlerItemsOnDrop = e => {
        const {payload} = e;
        console.log(e)
        if (e.addedIndex) {
            const newState = Object.entries(resultItems).reduce((acc, pair) => {
                const [key, value] = pair;
                if (value === payload) return acc;
                return {...acc, [key]: value}
            }, {});
            setResultItems(newState);
        }
        setItems(applyDrag(items, e))
    };
    useEffect(() => {
        //console.log(resultItems, 'result')
    }, [resultItems])


    return (
        <>
            <DroppedContainer>
                {data.answer.map((item, index) => {
                    return (
                        <DroppedPlaceholder key={item.id}>
                            {item.placeholder}
                            <Container orientation='horizontal'
                                       groupName='1'
                                       getChildPayload={_ => resultItems[index]}
                                       onDrop={handleResultOnDrop(index)}>

                                {resultItems[index] &&
                                <Draggable>
                                    <DraggableElem>
                                        {resultItems[index].value}
                                    </DraggableElem>
                                </Draggable>
                                }
                            </Container>
                        </DroppedPlaceholder>
                    )
                })}
            </DroppedContainer>
            <Container orientation='horizontal' groupName='1' getChildPayload={i => items[i]}
                       onDrop={handlerItemsOnDrop}
            >
                {items.map((item, i) => {
                    return (
                        <Draggable key={item.id}>
                            <DraggableElem>
                                {item.value}
                            </DraggableElem>
                        </Draggable>
                    );
                })}
            </Container>
        </>
    )
};