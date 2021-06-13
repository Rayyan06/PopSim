
import React, { useEffect, useRef } from "react";

const Canvas = (props) => {
    const { draw, setup, ...rest} = props;
    const canvasRef = useRef(null);


    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        let frameCount = 0;
        let animationFrameId;
        
        setup(ctx);
        const render = () => {
            frameCount++;
           draw(ctx, frameCount);
           animationFrameId = window.requestAnimationFrame(render);
        }
        render();
        
        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, [draw, setup])

    return <canvas ref={canvasRef} {...rest}/>
}   

export default Canvas;