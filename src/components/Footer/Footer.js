import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { FooterContainer, FooterSubscription, FooterSubHeading, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, SocialIcon } from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our e-newsletter to receive the latest information
        </FooterSubHeading>
        <Form>
          <FormInput name="email" type="email" placeholder="example@example.com" />
          <Button>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinkTitle>Site Links</FooterLinkTitle>
      <FooterLinksContainer>
        <FooterLinksWrapper>
        <FooterLinksItems>
            <FooterLink to='#'>How it works</FooterLink>
            <FooterLink to='#'>Testimonials</FooterLink>
            <FooterLink to='#'>Careers</FooterLink>
            <FooterLink to='#'>Investors</FooterLink>
            <FooterLink to='#'>Terms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLink to='#'>Customer Service</FooterLink>
            <FooterLink to='#'>Email</FooterLink>
            <FooterLink to='#'>FAQ</FooterLink>
            <FooterLink to='#'>Careers</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLink to='#'>Account</FooterLink>
            <FooterLink to='#'>Settings</FooterLink>
            <FooterLink to='#'>Contact</FooterLink>
            <FooterLink to='#'>Terms of Service</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='#'>
            <SocialIcon />
            NewsFeed
          </SocialLogo>
          <SocialIcons>
          <SocialIconLink href={'//www.facebook.com/'} target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href={'//www.instagram.com'} target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href={'//twitter.com/home'} target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href={'//www.youtube.com'} target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href={'//www.linkedin.com/'} target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer;