import React from 'react';
import AppHeader from '../components/AppHeader/AppHeader';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import CodeBox from '../components/CodeBox/CodeBox';
import { Section } from '../styles/MainStyles';
import { Header } from '../gatsby-theme-docz/components/Header';
import Footer from '../components/Footer/Footer';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import { Headline } from '../components/HowItWorks/Styles';
import '../styles/main.css';

const IndexPage = () => {
  return (
    <>
      <AppHeader />
      <Header />
      <Jumbotron />
      <Section>
        <Headline>Get started in minutes</Headline>
        <CodeBox />
      </Section>
      <Section>
        <Headline>How it works</Headline>
        <HowItWorks />
      </Section>
      <Footer />
    </>
  );
};

export default IndexPage;
