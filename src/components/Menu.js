import React from 'react';
import styled from "styled-components";
import {Modal} from "./Modal/Modal";
import {InnerMenu} from "./Modal/InnerMenu";

import MenuIcon from '../assets/svg/menu.svg'

const Wrapper = styled.div`
    width: 5rem;
    height: 5rem;
    z-index: 300;
    cursor: pointer;
    background-size: cover;

    svg {
      width: 100%;    
      filter: drop-shadow(0 0 3px #FFF);
    }
`;

const style = {
    overlay: {
        background: 'none',
        padding: '0px !important',
    },
    modal: {
        background: 'none',
        boxShadow: 'none',
        padding: '0px !important',
    },
};

export const Menu = () => {
    return (
        <Wrapper>
            <Modal style={style} inner={<InnerMenu/>}>
                <MenuIcon/>
            </Modal>
        </Wrapper>
    )
};