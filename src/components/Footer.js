import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterLinkItems>
        <FooterLink to="https://www.linkedin.com/in/nathalia-siqueira-cecilio-a8043513b/">Developed by Nathalia Cecílio</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
padding: 1rem calc((100vw - 1300px) /2);
display: grid;
color: #c4b998;
background: #010a13;
`

const FooterDesc = styled.div`
padding: 0 2rem;

h1 {
  margin-bottom: 3rem;
  color: #c4b998;
}

@media screen and (max-width: 400px) {
  padding: 1rem;
}
`

const FooterLinksWrapper = styled.div`
display: grid;


@media screen and (max-width: 820px) {
  grid-template-columns: 1fr;
}
`

const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1rem 2rem;

@media screen and (max-width: 400px) {
  padding: 1rem;
}
`

const FooterLinkTitle = styled.h2`
font-size: 14px;
margin-bottom: 16px;
`

const FooterLink = styled(Link)`
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
color: #c4b998;

&:hover {
  color:  #f0e6d2;
  transition: 0.3s ease-out;
}
`
