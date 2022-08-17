import React from 'react';
import { homeObjOne, homeObjTwo } from './Data';
import { Pricing, InfoSection, Slider } from '../../components';

const Home = () => {
  return (
    <>
      <Slider />
      <InfoSection {...homeObjOne} />
      <Pricing />
      <InfoSection {...homeObjTwo} />
    </>
  )
}

export default Home;