import React from 'react';
import styled from 'styled-components';
import Header from './header';


const primaryColor = "#0D1B2A"
const secondaryColor = "#FFEDCB"
const tertiaryColor = "#95ADCF"
const morgenWalsh = "Morgenwalsh"

const LandingContainer = styled.section`
    height: 100vh;
    width: calc(100% - 130px);
    background: ${primaryColor};

    @media (max-width: 850px) {
    width: 100%;
    padding-top: 10%;
  }
`



const landing = () => {


  return (
    <LandingContainer>
      <Header />
    </LandingContainer>
  )
}

export default landing
