import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Howl, Howler} from 'howler';

const Wrapper = styled.div`
    background-color:#fff;
    max-width: 400px;
    position: absolute;
    top: 6rem;
    padding: 15px;
    z-index: 300;
    font-family: 'Zilla Slab', serif;
    font-size: 20px;
    color:#000;
    border-radius: 10px;
    border: solid 1px#000;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.87));
    &:before {
        filter: drop-shadow(0 0 0px rgba(0, 0, 0, 0.87));
        content: '';
        position: absolute;
        left: -20px; top: 1rem; /* Положение треугольника */
        border: 10px solid transparent; /* Прозрачные границы */
        border-right: 10px solid white; /* Добавляем треугольник */
    }
`;

export const Speech = ({phrase, audio}) => {
    const [sound, setSound] = useState(null);
    const [finish, setFinish] = useState(null);

    useEffect(() => {
        if (audio) {
            setSound(new Howl({
                src: audio,
                autoplay: true,
                volume: 0.5,
                onend: () => setFinish(true)
            }));
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