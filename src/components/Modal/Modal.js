import React, {useState, useEffect} from 'react';
import ResponsiveModal from 'react-responsive-modal';
import useStoreon from "storeon/react";

export const Modal = ({children, style, inner}) => {
    const {dispatch, modal} = useStoreon('modal');

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


    return (
        <>
            <div onClick={onOpenModal}>
                {children}
            </div>
            <ResponsiveModal open={modal} onClose={onCloseModal} center styles={style}>
                {inner}
            </ResponsiveModal>
        </>
    );
};