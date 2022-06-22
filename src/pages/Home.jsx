import React from 'react';

import Header from '@containers/Header';
import HeroProject from '@components/HeroProject';
import SectionContainer from '@containers/SectionContainer';
import TopContainer from '@containers/TopContainer';

const Home = () => {
  return (
    <>
      <Header />
      <HeroProject />
      <SectionContainer />
      <SectionContainer />
      <TopContainer />
      <SectionContainer />
      <SectionContainer />
    </>
  )
}

export default Home