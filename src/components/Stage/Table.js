import React, {useMemo} from "react";
import styled from "styled-components";
import {usePlaceholder} from "../../hooks/usePlaceholder";
import {Simple} from "./Simple";


const Wrapper = styled.table`
   border-collapse: collapse;
   background: #FFF;
   th, td {
      border: 1px solid black;
      min-width: 4rem;
      height: 4rem;
   }
`;


const Cell = ({data}) => {
    const {placeholder, text} = usePlaceholder(data);

    return (
        <td>
            <Simple handlerInput={e => e} theme={'table'} disabled={placeholder} placeholder={placeholder} answer={text}/>
        </td>
    )
};

export function Table({data}) {

    console.log(data.question)

    return (
        <Wrapper>
            <tbody>
            {data.question.map(tr => {
                return (
                    <tr key={tr}>
                        {tr.map(td => {
                            return (
                                <Cell key={td} data={td}/>
                            )
                        })}
                    </tr>
                )
            })}
            </tbody>
        </Wrapper>
    )
}