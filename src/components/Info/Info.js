import React from 'react';
import Hero from '../Hero/Hero';
import { infoData } from '../../data/dataStore';
import Container from '../Container/Container';

const Info = () => (
  <Container>
    <h2><Hero titleText={infoData.title} heroImage={infoData.image}/></h2>
    <p>{infoData.description}</p>
  </Container>
);

export default Info;