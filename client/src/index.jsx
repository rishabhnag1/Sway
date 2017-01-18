import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
      <Voting winner ={'Trainspotting'}
              pair={pair}
              hasVoted = {'Trainspotting'} />,
    document.getElementById('app')
);

if (module.hot) { // 1
  module.hot.accept();
}