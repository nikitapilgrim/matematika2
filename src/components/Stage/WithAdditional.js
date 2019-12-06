import React from "react";
import styled from "styled-components";
import {TextWithBorders} from "../TextWithBorders";

const Title = styled.div`
  position: relative;
  top: -1rem;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
    font-family: 'Boogaloo', cursive;
    font-size: 2rem;
    text-align: center;

`;

const Stages = styled.div`
  //margin-top: 1rem;
`;

const isReactElement = (obj) => {
    return obj && obj.hasOwnProperty('type')
};

export function WithAdditional({children, data}) {
    const {text, title, layout} = data;
    const isTitleImage = title && title.includes('.png');

    return (
        <>
            <Title>
                {isTitleImage ? <img src={title} alt=""/> :
                    <TextWithBorders strokeWidth={'0.2em'} strokeColor={"#2c1e0c"} color={"#d5883f"} size={3} text={title}/>}
            </Title>
            {text && <Paragraph>{text.split('\n').map((item, i) => {
                return (
                    <React.Fragment key={i}>
                        {item && item}
                        <br/>
                    </React.Fragment>);
            })}</Paragraph>}
            {React.Children.map(children, child => {
                return (
                    <Stages>
                        {isReactElement(child) && React.cloneElement(child, {layout})}
                    </Stages>
                )
            })}
        </>
    )
}