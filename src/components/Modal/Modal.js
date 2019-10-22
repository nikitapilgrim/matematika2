import React, {useState, useEffect} from 'react';
import ResponsiveModal from 'react-responsive-modal';


export const Modal = ({children, style, inner}) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenModal = () => {
        setIsOpen(true);
    };

    const onCloseModal = () => {
        setIsOpen(false);
    };
    useEffect(() => {
        const root = document.querySelector('#root');
        if (isOpen) {
            root.style.filter = 'blur(10px) brightness(0.70) saturate(130%)';
        } else {
            root.style.filter = 'none';
            root.style.transform = 'none';
        }
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