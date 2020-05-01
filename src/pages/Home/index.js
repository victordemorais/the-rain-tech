import React from 'react';
import Header from 'pages/Header';
import Works from 'pages/Works';
import Initial from 'pages/Initial';
import FooterText from 'pages/FooterText';
import Footer from 'pages/Footer';
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
