import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import { Feature, OptForm } from '../components';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';
import { HeaderContainer } from '../containers/header'

export default function Home() {
    return (
        <div>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                        <OptForm.Break />
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>Try 30 Days Free</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Only new members are eligible for this offer.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            < FooterContainer />
        </div>
    )
} 