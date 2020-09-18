import React from 'react';

import { Block } from 'components/templates/AboutMe';
import { Container } from 'components/templates/Projects';
import { Title } from 'components/molecules/ProjectsTitle';
import { useRealtimeDatabase } from 'config/useFirebase';
import QuoteComponent from 'components/atoms/Quote';
import styled from 'styled-components';
import { StyledButton } from 'components/atoms/Button';
import MAIL_ICON from 'assets/images/mail-icon.svg';

const Paragraph = styled.div`
  color: ${props => props.theme.palette.black[0]};
  text-align: left;
  font-family: ${props => props.theme.fonts.primary};
  letter-spacing: 0.28px;
  font-size: 1.2em;
  opacity: 1;
  margin-top: 20px;
`;

const ButtonCnntainer = styled.a`
  margin: 30px auto;
  flex: 1;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const LetsTalk = () => {
  const data = useRealtimeDatabase('letsTalk');

  if (!data) {
    return <></>;
  }

  const { email, paragraph, quotes } = data;

  return (
    <Block>
      <Container id="AboutMeSection">
        <Title>Let&#39;s Talk</Title>
        {quotes.map((quote, index) => (
          <QuoteComponent index={index} key={index} text={quote} />
        ))}
        <Paragraph>{paragraph}</Paragraph>
        <ButtonCnntainer href={`mailto:${email}`}>
          <StyledButton label="Email">
            <img src={MAIL_ICON} alt="email" />
          </StyledButton>
        </ButtonCnntainer>
      </Container>
    </Block>
  );
};

export default LetsTalk;