import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Container, Draggable} from 'react-smooth-dnd';
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
    const [swapItems, setSwapItems] = useState({remove: null, added: null});
    const [dragging, setDragging] = useState(false);

    useEffect(() => {
        /* const flatValues = items.reduce((acc, item) => [...acc, item.value], []);
         const check = flatValues.every((value, i) => data.answer[i] === value);
         handler(flatValues);*/
    }, [items]);

    // change if elem have
    /*const handleResultOnDrop = id => (e) => {
        console.log(e.payload, e, id, 'id', 'handlerResult')
        if (e.removedIndex === 0) {
            const newState = Object.entries(resultItems).reduce((acc, pair) => {
                const [key, value] = pair;
                if (value === e.payload) return acc;
                return {...acc, [key]: value}
            }, {});
            setResultItems(newState);
        }
        if (e.addedIndex === 0 && resultItems[id]) {
            setItems([...items, resultItems[id]]);
        }
        if (e.addedIndex === 0) {
            setResultItems(prev => ({...prev, [id]: e.payload}))
        }
        /!*const newState = Object.entries(resultItems).reduce((acc, pair) => {
            const [key, value] = pair;
            if (value === payload) return acc;
            return {...acc, [key]: value}
        }, {});
        setResultItems(newState);*!/
    };*/

    /* const handlerItemsOnDrop = e => {
         const {payload} = e;
         console.log(payload, e, 'handlerItems')
         if (e.addedIndex) {
            /!* const newState = Object.entries(resultItems).reduce((acc, pair) => {
                 const [key, value] = pair;
                 if (value === payload) return acc;
                 return {...acc, [key]: value}
             }, {});
             setResultItems(newState);*!/
         }
         setItems(applyDrag(items, e))
     };*/

    // swap items for result
    /*useEffect(() => {
        if (swapItems.added && swapItems.remove) {
            const newState = {...resultItems};
            newState[swapItems.added.index] = swapItems.remove.value;
            newState[swapItems.remove.index] = swapItems.added.value;
            setResultItems(newState);
            setSwapItems({});
        }
    }, [swapItems, resultItems]);*/


    const onDragStart = index => ({isSource, payload, willAcceptDrop}) => {
        setDragging(true)
    };
    const onDragEnd = index => ({isSource, payload, willAcceptDrop}) => {
        if (isSource) {
            //console.log(index, isSource, payload.item)

        }
        setTimeout(() => {
            setDragging(false)
        }, 0)
    };



    const handlerResultOnDrop = (index) => (e) => {
        const {payload} = e;

        if (payload.item) {

            // check swapped elems
            if (payload.container === 'result') {
                //console.log(index, e.payload, e)
                if (e.removedIndex === 0) {
                    //setSwapItems(items => ({...items, added: {value: resultItems[index], index: index}}));
                }
                if (e.addedIndex === 0) {
                    //setSwapItems(items => ({...items, remove: {value: resultItems[index], index: index}}));
                }
            }
            if (e.removedIndex === e.addedIndex) {
                return false;
            }
            if (payload.container === 'items') {
                if (e.addedIndex === 0) {
                    if (!resultItems[index]) {
                        setResultItems(prev => ({...prev, [index]: payload.item}))
                        setItems(items.filter(item => item !== payload.item));
                        return false;
                    }
                    if (resultItems[index]) {
                        setItems([...items.filter(item => item !== payload.item), resultItems[index]]);
                        setResultItems({...resultItems, [index]: payload.item})
                    }
                }
            }

           /* if (e.removedIndex === 0) {
                const copy = {...resultItems};
                delete copy[index];
                setResultItems(copy)
            }
            if (e.addedIndex === 0) {
                setItems(prev => prev.filter(item => item !== payload.item));
                if (resultItems[index]) {
                    console.log(e, index)
                    setItems(prev => [...prev, resultItems[index]])
                }
                setResultItems(prev => ({...prev, [index]: payload.item}))
            }*/
        }

    };

    const handlerItemsOnDrop = index => e => {
        console.log(index, e, 'indextems')
    };

    return (
        <>
            <DroppedContainer>
                {data.answer.map((item, index) => {
                    return (
                        <DroppedPlaceholder key={item.id}>
                            {item.placeholder}
                            <Container orientation='horizontal'
                                       groupName='1'
                                       getChildPayload={_ => ({container: 'result', item: resultItems[index]})}
                                       onDrop={handlerResultOnDrop(index)}
                                       onDragStart={onDragStart(index)}
                                       onDragEnd={onDragEnd(index)}
                            >

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
            <Container orientation='horizontal' groupName='1'
                       getChildPayload={i => ({container: 'items', item: items[i]})}
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