import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import Paper from 'paper';

const Container = styled.canvas`
    display: block;
`;

function Landing() {

    const canvasRef = useRef(null)
    var canvas;
    useEffect(() => {
        canvas = canvasRef.current;
        Paper.setup(canvas)
        draw(10);
    })

    function draw(strokeWidth) {
        var paths = []
        var rootCoordinates = []
        for (var i=0;i<40;i++) {
            let path = new Paper.Path({
                strokeColor: 'black',
                strokeWidth: strokeWidth,
                strokeCap: 'round'
            })

            var x = Math.random() * (((window.innerWidth*0.9 - window.innerWidth*0.1)/40*(i+1) + window.innerWidth*0.1) - ((window.innerWidth*0.9 - window.innerWidth*0.1)/40*i + window.innerWidth*0.1)) + ((window.innerWidth*0.9 - window.innerWidth*0.1)/40*i + window.innerWidth*0.1);
            var y = Math.random() * ((window.innerHeight*0.9 - window.innerHeight*0.4) - (window.innerHeight*0.9 - window.innerHeight*0.6)) + (window.innerHeight*0.9 - window.innerHeight*0.7);
            
            rootCoordinates.push({x: x, y: y});

            path.add(new Paper.Point(rootCoordinates[i].x, window.innerHeight*0.9));
            path.add(new Paper.Point(rootCoordinates[i].x, window.innerHeight*0.9));

            paths.push(path);
        }

        paths[39].view.onFrame = function(event) {
            for (var j=0;j<40;j++) {
                if (rootCoordinates[j].y > 0) {
                    paths[j].segments[1].point.y -= 1;
                    rootCoordinates[j].y -= 1;
                }
            }
        }
        

    }


    return (
        <Container ref={canvasRef} height={window.innerHeight*0.9} width={window.innerWidth}/>
            
    )
}

export default Landing;