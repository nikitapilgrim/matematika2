import React, {useState, useEffect} from 'react';
import ResponsiveModal from 'react-responsive-modal';
import useStoreon from "storeon/react";

export const Modal = ({children, style, inner}) => {
    const {dispatch, modal} = useStoreon('modal');
    const [isOpen, setIsOpen] = useState(modal);

    const onOpenModal = () => setIsOpen(true);
    const onCloseModal = () =>  setIsOpen(false);

    useEffect(() => {
        const root = document.querySelector('#root');
        if (isOpen) {
            root.style.filter = 'blur(10px) brightness(0.70) saturate(130%)';
        } else {
            root.style.filter = 'none';
            root.style.transform = 'none';
        }
    }, [isOpen]);

    useEffect(() => {
        setTimeout(() => {
            isOpen && dispatch('modal/show');
            !isOpen && dispatch('modal/hide')
        }, 1000) // blur animation wait
    }, [isOpen]);


    return (
        <>
            <div onClick={onOpenModal}>
                {children}
            </div>
            <ResponsiveModal open={isOpen} onClose={onCloseModal} center styles={style}>
                {inner}
            </ResponsiveModal>
        </>
    );
};