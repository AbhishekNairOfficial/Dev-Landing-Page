import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  color: ${props => props.theme.palette.black[0]};
  font-family: ${props => props.theme.fonts.primary};
`;

export const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 500;
  margin: 0 0 20px 0;
`;

export const SubTitle = styled.h3`
  margin: 0;
  font-size: 1.2em;
  font-weight: 100;
  opacity: 0.8;
`;

const ProjectsTitle = () => (
  <Container>
    <Title>My Work</Title>
    <SubTitle>Here are a few things I’ve worked on</SubTitle>
  </Container>
);

export default ProjectsTitle;
