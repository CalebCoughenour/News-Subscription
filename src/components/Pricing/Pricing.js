import React from 'react';
import { Button } from '../../globalStyles';
import { DiGoogleAnalytics } from "react-icons/di";
import { FaNewspaper, FaRegNewspaper } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { IconContext } from 'react-icons/lib';
import {  PricingSection, PricingWrapper, PricingHeading, PricingContainer, PricingCard, PricingCardInfo, PricingCardIcon, PricingCardPlan, PricingCardCost, PricingCardLength, PricingCardFeatures, PricingCardFeature } from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingCardIcon>
            <MdSubscriptions />
          </PricingCardIcon>
          <PricingHeading>Subscription Packages</PricingHeading>
          <PricingContainer>
            <PricingCard to='#'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaNewspaper />
                </PricingCardIcon>
                <PricingCardPlan>Monthly Package</PricingCardPlan>
                <PricingCardCost>$9.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Basic Access</PricingCardFeature>
                  <PricingCardFeature>Unlock Paywalled News</PricingCardFeature>
                  <PricingCardFeature>Mobile App</PricingCardFeature>
                </PricingCardFeatures>
                <Button>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='#' style={{ border: "2px solid blue" }}>
              <PricingCardInfo>
                <PricingCardIcon>
                  <DiGoogleAnalytics />
                </PricingCardIcon>
                <PricingCardPlan>Annual Package</PricingCardPlan>
                <PricingCardCost>$5.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>First Access Pass</PricingCardFeature>
                  <PricingCardFeature>Financial Analytics</PricingCardFeature>
                  <PricingCardFeature>Special Deals</PricingCardFeature>
                </PricingCardFeatures>
                <Button>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='#'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaRegNewspaper />
                </PricingCardIcon>
                <PricingCardPlan>3-Month Package</PricingCardPlan>
                <PricingCardCost>$8.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature><strong>*NEW*</strong> Sports App</PricingCardFeature>
                  <PricingCardFeature>Weather Notifications</PricingCardFeature>
                  <PricingCardFeature>Access To Daily Roundup</PricingCardFeature>
                </PricingCardFeatures>
                <Button>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing  ;