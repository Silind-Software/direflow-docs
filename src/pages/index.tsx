import React from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import { Section } from '../styles/MainStyles';
import { Header } from '../gatsby-theme-docz/components/Header';
import Footer from '../components/Footer/Footer';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import { Headline } from '../components/HowItWorks/Styles';
import AppHeader from '../components/AppHeader/AppHeader';
import CodeExample from '../components/CodeExample/CodeExample';
import UseExample from '../components/UseExample/UseExample';
import useAnimateDisplay from '../hooks/useAnimateDisplay';
import '../styles/main.css';

const IndexPage = () => {
  const perfectForRef = useAnimateDisplay();
  const getStartedRef = useAnimateDisplay();

  return (
    <>
      <AppHeader />
      <Header />
      <Jumbotron />
      <Section>
        <Headline ref={perfectForRef}>Perfect for</Headline>
        <UseExample />
      </Section>
      <Section>
        <Headline ref={getStartedRef}>Get started in minutes</Headline>
        <CodeExample />
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
