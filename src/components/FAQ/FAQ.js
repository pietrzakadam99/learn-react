import React from 'react';
import Hero from '../Hero/Hero';
import Container from '../Container/Container';
import {faqData} from './../../data/dataStore';

const FAQ = () => (
  <Container>
    <h2><Hero titleText={faqData.title} heroImage={faqData.image}/></h2>
    <p>{faqData.description}</p>
  </Container>
);

export default FAQ;