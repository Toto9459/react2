import React from 'react'
import styled from 'styled-components';
import {ReactComponent as ArrowImg} from '../icons/arrow.svg';

const primaryColor = "#0D1B2A"
const secondaryColor = "#FFEDCB"
const tertiaryColor = "#95ADCF"
const morgenWalsh = "Morgenwalsh"

const Head = styled.header`
    height: auto;
    width: 100%;
    padding-top: 2rem ;
    padding-left: max(5rem, 20px);
`

const Title = styled.h1`
    height: auto;
    width: auto;
    font-size: max(14rem, 20px);
    color: ${tertiaryColor};
    font-family: ${morgenWalsh};
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    letter-spacing: .5rem;
    text-transform: uppercase;
`
const Indent = styled.span`
    display: block;
    height: max(1rem, 5px);
    width: max(6rem, 20px);
    background-color: ${secondaryColor};
    margin-top: 2rem;
`

const Arrow = styled(ArrowImg)`
    height: max(5rem, 25px);
    width: max(5rem, 25px);
    margin: 6rem 0 0 3rem;
`

const WOrkBtn = styled.button`
    height: auto;
    width: auto;
    min-height: 40px;
    min-width: 40px;
`

function header() {
  return (
    <div style={{height: 'auto', width: 100 + "%", display: 'inline-flex', alignItems: 'center'}}>
        <Head>
            <div style={{height: 100 + "%", width: 100 + "%", display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Title>Portfolio&nbsp;<Indent />&nbsp;V1<Arrow /></Title>
            </div>
        </Head>
        <WOrkBtn />
    </div>
  )
}

export default header
