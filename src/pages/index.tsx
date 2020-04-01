import React from 'react';
import useScrollDisplay from 'use-scroll-display';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import { Section, SubText, FullSection } from '../styles/MainStyles';
import { Header } from '../gatsby-theme-docz/components/Header';
import Footer from '../components/Footer/Footer';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import { Headline } from '../components/HowItWorks/Styles';
import AppHeader from '../components/AppHeader/AppHeader';
import InstallExample from '../components/InstallExample/InstallExample';
import UseExample from '../components/UseExample/UseExample';
import { Button } from '../components/Jumbotron/Styles';
import { Link } from '@reach/router';
import CodeExample from '../components/CodeExample/CodeExample';
import '../styles/main.css';

const IndexPage = () => {
  const [howItsUsed] = useScrollDisplay();
  const [easyToUse] = useScrollDisplay();
  const [getStarted] = useScrollDisplay();

  return (
    <>
      <AppHeader />
      <Header />
      <Jumbotron />
      <FullSection color='#f1f5fa'>
        <Section>
          <Headline>How it works</Headline>
          <SubText>Use the power of React to create your component</SubText>
          <SubText>Build it, then use it and share it as a native Web Component</SubText>
          <HowItWorks />
        </Section>
      </FullSection>
      <FullSection>
        <Section ref={howItsUsed} style={{ opacity: 0 }}>
          <Headline>How it's used</Headline>
          <SubText>✔️ Create rich and completely self-contained Micro Frontends</SubText>
          <SubText>✔️ Build entire UI Libraries and use it across any UI frameworks & libraries</SubText>
          <UseExample />
        </Section>
      </FullSection>
      <FullSection color='#f1f5fa'>
        <Section ref={easyToUse} style={{ opacity: 0 }}>
          <Headline>Easy to use</Headline>
          <SubText>Direflow makes it really easy to get started developing!</SubText>
          <SubText>Create your first Direflow Component in a matter of minutes ⚡️</SubText>
          <CodeExample />
        </Section>
      </FullSection>
      <FullSection>
        <Section ref={getStarted} style={{ opacity: 0 }}>
          <Headline>Get started</Headline>
          <SubText>Install Direflow and set up a new project.</SubText>
          <SubText>Enjoy the smooth ride 🚀</SubText>
          <InstallExample />
          <Link to='/get-started'>
            <Button>→ Get Started</Button>
          </Link>
        </Section>
      </FullSection>
      <Footer />
    </>
  );
};

export default IndexPage;
