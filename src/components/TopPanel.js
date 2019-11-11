import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Sound} from "./Sound";
import {Menu} from "./Menu";
import {Help} from "./Help";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  z-index: 2;
  padding: 2rem;
  top: 0;
  left: 0;
  & > div {
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.2);
    }
    &:not(:first-child) {
      margin-left: 0.5rem;
    }
  }
`;

const HiddenWrapp = styled.div`
    transition: filter 1s;
    ${props => props.hide ? 'filter: blur(10px) brightness(0.70) saturate(130%);' : ''};
`;

export function TopPanel({data}) {
    const [showElems, setShowElems] = useState([]);
    const elems = ['music', 'menu', 'help'];

    useEffect(() => {
        if (data && data.hasOwnProperty('elem') && elems.includes(data.elem)) {
            setShowElems([...showElems, data.elem])
        }
    }, [data]);

    return (
        <Wrapper>
            <HiddenWrapp hide={!showElems.includes('music')}>
                <Sound/>
            </HiddenWrapp>
            <HiddenWrapp hide={!showElems.includes('menu')}>
                <Menu/>
            </HiddenWrapp>
            <HiddenWrapp hide={!showElems.includes('help')}>
                <Help/>
            </HiddenWrapp>
        </Wrapper>
    )
}