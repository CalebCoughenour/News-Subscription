import React from 'react';
import { homeObjOne } from './Data';
import { Pricing, InfoSection } from '../../components';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Pricing />
    </>
  )
}

export default Home;