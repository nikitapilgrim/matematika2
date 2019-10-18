import React, {useEffect, useState} from 'react';
import ReactHowler from 'react-howler'

export const Sound = ({src}) => {
    return (
        <ReactHowler
            src={src}
            playing={false}
        />
    )
};