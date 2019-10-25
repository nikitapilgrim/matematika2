import React, {useState} from 'react';
import { useDrag, useDrop } from 'react-dnd'
import useMount from "react-use/lib/useMount";

const DraggableComponent = ({item}) => {
    const [collectedProps, drag] = useDrag({
        item: { id, type },
    });
    return (
        <div className="draggable" ref={drag}>
            {item.value}
        </div>
    );
};

export const SortableNew = ({data}) => {
    const [items, setItems] = useState([]);
    console.log(data)
    useMount(() => {
        setItems(data.items);
    });

    return (
        <>
            {items.map(item => {
                return (
                    <DraggableComponent type="item" id={item.id} item={item} key={item.id}/>
                )
            })}
        </>
    )
};