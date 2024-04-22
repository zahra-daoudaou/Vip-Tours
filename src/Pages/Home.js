import React from 'react';
import Services from '../Components/Services';
import FindYourGuide from '../Components/FindYourGuide';
import About from '../Components/About';
import styled from 'styled-components';
import AreyouGuideCard from '../Components/AreyouGuideCard';
import BestTours from '../Components/BestTours';
import BestGuidesRanks from '../Components/BestGuidesRanks';
import TestimonyCard from '../Components/TestimonyCard';

const Container = styled.div`
  padding: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const GapContainer = styled.div`
  margin-top: 20px;
`;

function Home() {

  return (
    <Container>
      <GapContainer>
        <FindYourGuide />
      </GapContainer>
      <GapContainer>
        <About />
      </GapContainer>
      <GapContainer>
        <Services />
      </GapContainer>
      <GapContainer>
        <BestGuidesRanks />
      </GapContainer>
      <GapContainer>
        <BestTours />
      </GapContainer>
      <GapContainer>
        <TestimonyCard />
      </GapContainer>
      <GapContainer>
        <AreyouGuideCard />
      </GapContainer>
    </Container>
  );
}

export default Home;
