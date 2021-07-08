import React from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed rgba(0, 0, 0, 60%);
    padding: 15px 10px;

    :hover {
        background-color: #D3D9D6;
    }
`;

const Title = styled.h1`
    color: #000000;
    opacity: 90%;
    text-align: left;
    font-family: 'Roboto Mono', monospace;
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Date = styled.p`
    font-size: 0.9rem;
    font-family: 'Roboto Mono', monospace;
`;

const TagDiv = styled.div`
    background-color: yellow;
    border-radius: 15px;
`;

const Tag = styled.p`
    font-weight: bold;
    font-size: 0.9rem;
`;

function BlogListItem() {

    const history = useHistory();

    const handleClick = () => {
        history.push('/blog/1');
    }
    
    return (
        <Container onClick={handleClick}>
            <Title>
                First Blog Post!
            </Title>
            <SubContainer>
                <Date>June 18, 2021</Date>
                <TagDiv><Tag>Blog</Tag></TagDiv>
            </SubContainer>
        </Container>
    )
}

export default BlogListItem;