import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import Paper from 'paper';
import paperCore, { Path, Point, view } from 'paper/dist/paper-core';

const Container = styled.canvas`
    display: block;
`;

const branchLengthRange = (window.innerHeight*0.9 - window.innerHeight*0.7) - (window.innerHeight*0.9 - window.innerHeight*0.8);
const initialStrokeWidth = 10;
const treeCount = 1;
const maxDepth = 5

class Tree {
    constructor(startPoint, endPoint, depth=maxDepth) {
        this.children = [];
        this.depth = depth;
        this.startPoint = new Paper.Point(
            startPoint.x,
            startPoint.y
        );    
        this.endPoint = new Paper.Point(
            endPoint.x, 
            endPoint.y
        );
        this.path = new Paper.Path({
            strokeColor: 'black',
            strokeCap: 'square',
            strokeWidth: (this.depth / maxDepth) * initialStrokeWidth
        });
        this.path.add(this.startPoint);
        this.path.add(this.startPoint);
        
        let vector = new Paper.Point(this.endPoint.x - this.startPoint.x, this.endPoint.y - this.startPoint.y);
        this.norm = new Paper.Point(vector.x / vector.length, vector.y / vector.length);
    }

    calculateRandomAngle() {
        // +- 90 deg or pi/4
        let currentAngle = Math.atan2(this.norm.y, this.norm.x);
        let startAngle = currentAngle - Math.PI/4;
        let endAngle = currentAngle + Math.PI/4;
        return startAngle + (Math.random() * (endAngle - startAngle));
    }

    update() {
        let dx = this.path.segments[1].point.x - this.endPoint.x;
        let dy = this.path.segments[1].point.y - this.endPoint.y;

        if(Math.abs(dx) >= 10 || Math.abs(dy) >= 10) {
            this.path.segments[1].point.x += this.norm.x;
            this.path.segments[1].point.y += this.norm.y;

            if(Math.random() < 0.03 && this.depth > 0) {
                // Add a new branch to this tree
                let startPoint = new Paper.Point(this.path.segments[1].point.x, this.path.segments[1].point.y);
                let angle = this.calculateRandomAngle();
                let length = (this.depth / maxDepth) * 100 * Math.random();

                let endPoint = new Paper.Point(
                    startPoint.x + Math.cos(angle) * length,
                    startPoint.y + Math.sin(angle) * length,
                )
                let child = new Tree(
                    startPoint,
                    endPoint,
                    this.depth-1
                );
                this.children.push(child);
            }
        }
        for(let child of this.children) {
            child.update();
        }
    }
}

function Landing() {

    const canvasRef = useRef(null)
    let [trees, setTrees] = useState([]);
    let canvas;
    useEffect(() => {
        canvas = canvasRef.current;
        Paper.setup(canvas);
        Paper.view.onFrame = () => {
            for(let tree of trees) {
                tree.update();
            }    
        }
    });
    useEffect(() => {
        let trees = [];
        for(let index = 0; index < treeCount; index++) {
            let startPoint = new Paper.Point(
                Math.random() * (((window.innerWidth*0.9 - window.innerWidth*0.1)/20*(index+1) + window.innerWidth*0.1) - ((window.innerWidth*0.9 - window.innerWidth*0.1)/20*index + window.innerWidth*0.1)) + ((window.innerWidth*0.9 - window.innerWidth*0.1)/20*index + window.innerWidth*0.1),
                window.innerHeight*0.9
            );
            let endPoint = new Paper.Point(
                startPoint.x,
                window.innerHeight*0.9 - (Math.random() * branchLengthRange + (window.innerHeight*0.9 - window.innerHeight*0.7))
            );
            trees.push(new Tree(startPoint, endPoint));
        }
        setTrees(trees);
    }, []);

    return (
        <Container ref={canvasRef} height={window.innerHeight*0.9} width={window.innerWidth}/>
            
    )
}

export default Landing;