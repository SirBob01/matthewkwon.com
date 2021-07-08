import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import BlogListItem from './BlogListItem';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    margin: 30px auto;
`;

function Blog() {
    return(
        <Container>
            <BlogListItem></BlogListItem>
        </Container>
    )
}

export default Blog;