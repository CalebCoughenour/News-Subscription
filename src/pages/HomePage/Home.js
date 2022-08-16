import React from 'react';
import { homeObjOne, homeObjTwo } from './Data';
import { Pricing, InfoSection } from '../../components';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Pricing />
      <InfoSection {...homeObjTwo} />
    </>
  )
}

export default Home;