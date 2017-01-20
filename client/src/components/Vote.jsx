import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Vote extends React.Component{
  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    console.log(this.props.hasVoted)
  }

  getPair() {
    return this.props.pair || [];
  }

  isDisabled() {
    return !!this.props.hasVoted;
  }

  hasVotedFor(entry){
    return this.props.hasVoted === entry;
  }

  render() {
    return(
        <div className="voting">
          {this.getPair().map(entry =>
              <button
                  disabled={this.isDisabled()}
                  onClick={() => this.props.vote(entry)}
                  key={entry}>
                <h1>{entry}</h1>
                {this.hasVotedFor() ?
                    <div className='label'>Voted</div> : null}
              </button>
          )}
        </div>
    )
  }
}
