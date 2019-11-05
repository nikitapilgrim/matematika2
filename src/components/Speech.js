import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Howl, Howler} from 'howler';

const Wrapper = styled.div`
    background-color:#fff;
    max-width: 300px;
    position: absolute;
    top: -86%;
    left: -12%;
    padding: 15px;
    z-index: 300;
    font-family: 'Boogaloo', cursive;
    font-size: 24px;
    color:#000;
    border-radius: 10px;
    //border: solid 1px#000;
    //filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.87));
    &:before {
        //filter: drop-shadow(0 0 0px rgba(0, 0, 0, 0.87));
        content: '';
        position: absolute;
        bottom: 0;
        left: 15%;
        width: 0;
        height: 0;
        border: 1.5em solid transparent;
        border-top-color: white;
        border-bottom: 0;
        border-left: 0;
        margin-left: -0.75em;
        margin-bottom: -1.5em;
}
    }
`;

export const Speech = ({phrase, audio}) => {

    useEffect(() => {
        if (audio) {
            const howl = new Howl({
                src: audio,
                autoplay: true,
                volume: 0.5,
            });
            howl.play();
            return (() => {
                howl.stop();
                Howler._howls = Howler._howls.filter(h => h !== howl)
            })
        }
    }, [audio]);

  return (
      <>
          {phrase && <Wrapper>
            {phrase}
          </Wrapper>}
      </>
  )
};