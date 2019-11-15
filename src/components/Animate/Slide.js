import {animated, useSpring} from "react-spring";
import React from "react";
import {easeCubic} from "d3-ease";

export const Slide = React.memo(({children, left, when, onReveal}) => {
    const { x } = useSpring({
        onStart: onReveal,
        config: {
            duration: 1000,
            easing: easeCubic
        },
        from: { xy: [0, 0]},
        x: when ? 1 : 0,
    });
    const config = {
        range: [0, 1],
        output: [left ? -60: +60, 0]
    };

    return (
        <animated.div style={{
            willChange: 'transform',
            transform: x.interpolate({
                range: [0, 1],
                output: [left ? -60: +60, 0]
            }).interpolate(x => `translateX(${x}vw)`),
        }}>
            {children}
        </animated.div>
    )
});