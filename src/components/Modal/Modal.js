import React, {useState, useEffect} from 'react';
import ResponsiveModal from 'react-responsive-modal';
import useStoreon from "storeon/react";
import Slide from 'react-reveal/Slide';

export const Modal = ({children, style, inner}) => {
    const {dispatch, modal} = useStoreon('modal');
    const [animationEnd, setAnimationEnd] = useState(null);

    const onOpenModal = () => dispatch('modal/show');
    const onCloseModal = () => dispatch('modal/hide');

    useEffect(() => {
        const root = document.querySelector('#root');
        if (modal) {
            root.style.filter = 'blur(10px) brightness(0.70) saturate(130%)';
        } else {
            root.style.filter = 'none';
            root.style.transform = 'none';
        }
    }, [modal]);

    const handlerAnimationEnd = () => {
        setTimeout(() => {
            setAnimationEnd(true)
        }, 1000)
    };

    return (
        <>
            <div onClick={onOpenModal}>
                {children}
            </div>
            <ResponsiveModal open={modal} onClose={onCloseModal} center styles={style}>
                <Slide delay={500} when={modal} onReveal={handlerAnimationEnd} top>
                    {inner}
                </Slide>
            </ResponsiveModal>
        </>
    );
};