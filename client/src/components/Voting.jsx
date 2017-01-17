import React from 'react';

export default class Voting extends React.Component {
  constructor(props){
    super(props);
  }

  getPair() {
    return this.props.pair || [];
  }

  render() {
    return(
      <div className="voting" >
        {this.getPair().map(entry =>
          <button key={entry}>
            <h1>{entry}</h1>
          </button>
        )}
      </div>
    )
  }
}