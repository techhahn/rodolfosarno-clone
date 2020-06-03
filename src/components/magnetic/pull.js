import React from 'react';
import styled from 'styled-components';
import {motion, useMotionValue, useSpring} from 'framer-motion';

const MContainer = styled(motion.div)`
    position: relative;
`;

const MHoverArea = styled(motion.div)`
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    transform-origin: center center;
`;

const MContent = styled(motion.div)`
    position: relative;
`;


const MagneticPull = ({children}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xMove = useSpring(x, {damping: 50, stiffness: 300});
    const yMove = useSpring(y, {damping: 50, stiffness: 300});

    function handleMouse(event) {
        const {left, top, width, height} = event.currentTarget.getBoundingClientRect();
        const xPos = event.pageX - ((width * 0.5) + left);
        const yPos = event.pageY - ((height * 0.5) + top);
        x.set(xPos);
        y.set(yPos);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <MContainer
            onMouseMove={handleMouse}
            onHoverEnd={handleMouseLeave} 
        >
            <MHoverArea />
            <MContent
                initial={{
                    x: 0, y: 0
                }}
                style={{
                    x: xMove,
                    y: yMove,
                }}
                positionTransition
                className="content">{children}</MContent>
        </MContainer>
    );
}
 
export default MagneticPull;