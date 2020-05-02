import React from 'react';
import Header from 'pages/LandingPage/Header';
import Works from 'pages/LandingPage/Works';
import Initial from 'pages/LandingPage/Initial';
import FooterText from 'pages/LandingPage/FooterText';
import Footer from 'pages/LandingPage/Footer';
import { Page } from './styles';

const Home = () => {
  return (
    <Page>
      <Header />
      <Works />
      <Initial />
      <FooterText />
      <Footer />
    </Page>
  );
};
export default Home;
