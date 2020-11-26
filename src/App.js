import React from 'react';
import jumboData from './fixtures/jumbo';
import Jumbotron from './components/jumbotron'
import { JumbotronContainer } from './containers/jumbotron'
import { FooterContainer } from './containers/footer'

export default function App() {
  return (
    <div>

      <JumbotronContainer/>
      < FooterContainer />
    </div>
  );
}