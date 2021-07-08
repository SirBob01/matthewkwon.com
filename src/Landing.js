import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";

const Container = styled.canvas`
    display: block;
`;

function Landing() {

    const FRAME_DURATION = 1000/60;
    const getTime = typeof performance === 'function' ? performance.now: Date.now;

    const canvasRef = useRef(null)
    var canvas;
    var ctx;
    useEffect(() => {
        
        canvas = canvasRef.current;
        ctx = canvas.getContext('2d');
        ctx.fillStyle = '#313830';

        ctx.lineCap = 'round';
        ctx.lineWidth = 2;
        
        //steps(4);  
        steps1(0);
    })

    var step = 0;
    var speed = .5;

    var lineWidth = [10, 8, 6, 4, 2];
    

    function steps(widthIndex) {
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        step = step<50? step+speed: step;
        ctx.beginPath();
        ctx.moveTo(5, 5);
 
        // ctx.lineTo(50, 100);
        ctx.lineTo(step, step*2);
        
        ctx.lineWidth = lineWidth[widthIndex];
        ctx.strokeStyle = '#313830';
        ctx.stroke();
        window.requestAnimationFrame(steps)
    }

    var stepTest = 674

    function steps1(widthIndex) {
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        stepTest = stepTest<800? stepTest+speed: stepTest;
        ctx.beginPath();
        ctx.moveTo(50, window.innerHeight);
 
        // ctx.lineTo(50, 100);
        ctx.lineTo(50, stepTest*2);
        
        ctx.lineWidth = lineWidth[widthIndex];
        ctx.strokeStyle = '#313830';
        ctx.stroke();
        window.requestAnimationFrame(steps)
    }

    return (
        <Container ref={canvasRef} hieght={window.innerHeight*0.9} width={window.innerWidth}/>
            
    )
}

export default Landing;