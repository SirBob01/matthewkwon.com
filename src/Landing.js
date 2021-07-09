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

    const branchLengthRange = (window.innerHeight*0.9 - window.innerHeight*0.7) - (window.innerHeight*0.9 - window.innerHeight*0.8)

    function startingXPoint(x1, x2) {
        if (x1 > x2) {
            var x = Math.random() * ((x1 - x2) + x2);
        } else {
            var x = Math.random() * ((x2 - x1) + x1);
        }
        return x;
    }

    function startingYPoint(y1, y2) {
        if (y1 > y2) {
            var y = Math.random() * ((y1 - y2) + y2);
        } else {
            var y = Math.random() * ((y2 - y1) + y1);
        }
        return y;
    }

    // x1, y1 = starting | x2, y2 = finishing
    function findCoordinates(x1, y1, x2, y2) {
        // get random point between two points using linear interpolation
        var u = Math.random() * (0.9 - 0.5) + 0.5;
        // branch was going left
        if (x1 > x2) {
            var startingX = (1 - u)*x1 + u*x2;
            var startingY = (1 - u)*y1 + u*y2;
        } 
        // branch was going right
        else if (x2 > x1) {
            var startingX = (1 - u)*x2 + u*x1;
            var startingY = (1 - u)*y2 + u*y1;
        } else {

        }
    }

    function draw(strokeWidth) {
        var paths = []
        var coordinates = []

        for (var i=0;i<20;i++) {
            let path = new Paper.Path({
                strokeColor: 'black',
                strokeWidth: strokeWidth,
                strokeCap: 'round'
            })

            var x = Math.random() * (((window.innerWidth*0.9 - window.innerWidth*0.1)/20*(i+1) + window.innerWidth*0.1) - ((window.innerWidth*0.9 - window.innerWidth*0.1)/20*i + window.innerWidth*0.1)) + ((window.innerWidth*0.9 - window.innerWidth*0.1)/20*i + window.innerWidth*0.1);
            var y = Math.random() * branchLengthRange + (window.innerHeight*0.9 - window.innerHeight*0.7);
            
            coordinates.push({x: x, y: y});

            path.add(new Paper.Point(coordinates[i].x, window.innerHeight*0.9));
            path.add(new Paper.Point(coordinates[i].x, window.innerHeight*0.9));

            paths.push(path);
        }

        paths[0].view.onFrame = function(event) {
            for (var i=paths.length-1;i>=0;i--) {
                // initial root
                if (coordinates[i].y > 0) {
                    paths[i].segments[1].point.y -= 1;
                    coordinates[i].y -= 1;
                }
                // if root/branch has finished growing
                else {
                    if (paths[i].strokeWidth > 9) {
                        // add 4 lines to paths
                        // 3 random height within range 
                        var path1 = new Paper.Path({
                            strokeColor: 'black',
                            strokeWidth: strokeWidth-2,
                            strokeCap: 'round'
                        })
                        path1.add(new Paper.Point(100, 100));
                        path1.add(new Paper.Point(200, 200));
                        // add coordinates
                        var coordinates1 = "hello";
                        var path2 = new Paper.Path({
                            strokeColor: 'black',
                            strokeWidth: strokeWidth-2,
                            strokeCap: 'round'
                        })
                        path2.add(new Paper.Point(200, 200));
                        path2.add(new Paper.Point(300, 300));
                        // add coordinates
                        var coordinates2 = "hello";
                        var path3 = new Paper.Path({
                            strokeColor: 'black',
                            strokeWidth: strokeWidth-2,
                            strokeCap: 'round'
                        })
                        path3.add(new Paper.Point(300, 300));
                        path3.add(new Paper.Point(400, 400));
                        // add coordinates
                        var coordinates3 = "hello";
                        // 1 at tip
                        var path4 = new Paper.Path({
                            strokeColor: 'black',
                            strokeWidth: strokeWidth-2,
                            strokeCap: 'round'
                        })
                        path4.add(new Paper.Point(350, 100));
                        path4.add(new Paper.Point(200, 200));
                        // add coordinates
                        var coordinates4 = "hello";

                        // add coordinates and paths to array
                        //paths.splice(i+1, 0, path1, path2, path3, path4);

                    }
                    paths.splice(i, 1);
                    coordinates.splice(i, 1);
                    console.log(paths);

                    

                }
            }
        }
    }


    return (
        <Container ref={canvasRef} height={window.innerHeight*0.9} width={window.innerWidth}/>
            
    )
}

export default Landing;