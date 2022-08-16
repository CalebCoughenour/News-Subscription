import React from 'react';
import { Container } from '../../globalStyles';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle } from './InfoSection.elements';


const InfoSection = ({ lightBg, imgStart, lightTextDesc, description, headline, lightText }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default InfoSection;