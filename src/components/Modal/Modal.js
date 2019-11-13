import React, {useState, useEffect, useRef} from 'react';
import ResponsiveModal from 'react-responsive-modal';
import useStoreon from "storeon/react";
import {createPortal} from "react-dom";
import Slide from 'react-reveal/Slide';
import {InnerMenu} from "./InnerMenu";
import styled from "styled-components";
import useClickAway from "react-use/lib/useClickAway";


const Wrapper = styled.div`
  position: fixed;
  z-index: ${props => props.open ? 5 : '-5'};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  //pointer-events: none;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Modal = ({children, style, inner}) => {
    const {dispatch, modal} = useStoreon('modal');
    const [animationEnd, setAnimationEnd] = useState(null);

    const onOpenModal = () => dispatch('modal/show');
    const onCloseModal = () => dispatch('modal/hide');

    useEffect(() => {
        if (!modal) {
            setTimeout(() => {
                setAnimationEnd(false)
            }, 1000)
        }
    }, [modal]);

    const handlerAnimationEnd = () => {
        setAnimationEnd(false);
        setTimeout(() => {
            setAnimationEnd(true)
        }, 500)
    };

    return (
        <>
            <div onClick={onOpenModal}>
                {children}
            </div>
            <ResponsiveModal open={modal} onClose={onCloseModal} center styles={style}>

            </ResponsiveModal>
            {createPortal(
                <Wrapper open={animationEnd}>
                    <Slide delay={modal ? 500 : 0} when={modal} onReveal={handlerAnimationEnd} top>
                        {inner}
                    </Slide>
                </Wrapper>, document.querySelector('body'))}
        </>
    );
};