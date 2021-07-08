import React from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const Container = styled.div`
    width: 50%;
    margin: auto;
`;

const Back = styled.p`
    margin-top: 40px;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: black;
`;

const Date = styled.p`
    margin-bottom: 40px;
    color: grey;
`;

const Content = styled.p`
    text-align: left;
    line-height: 200%;
    font-size: 1.1rem;
    margin-bottom: 40px;
`;

function Post() {

    const history = useHistory();

    const goBack = () => {
        history.push("/blog");
    }
    
    return (
        <Container>
            <Back onClick={goBack}>Back to Blog</Back>
            <Title>Why I started Blogging</Title>
            <Date>Jun 19, 2021</Date>
            <Content>This is my first post for a blogging series that I don't know if I'll be able to commit to. Hopefully I'll be able to stick to this because I'm doing this for a couple of reasons. <br/><br/>

            &emsp;&emsp;1. I want to practice writing<br/>
            &emsp;&emsp;2. I want to record down my learnings, both technical and non-technical<br/><br/>

Both these reasons were inspired by one of my Masters subjects at university called Creating Innovative Engineers (CIE). In CIE we were required to write a reflection every week about the class content. I personally found this the most difficult part of the subject and barely passed this section, but I do correlate with the message the teaching staff were trying to deliver about reflections: "They are helpful in improving yourself". Hopefully reflecting on subject matters that I'm more familiar with will help me produce better quality writing.<br/><br/>

I plan on writing about a wide range of topics, not just limited to coding or my career development. A new interest I've gained recently is watching classics (but not that old, maybe up to 1990?), so I'll potentially write reviews about these too. <br/><br/>

Also, this blog is honestly just for me to keep track of my thoughts, my learnings and improve my writing, so if anyone is actually reading this right now, thank you and hope you have a fabulous day. </Content>
        </Container>
    )
}

export default Post;