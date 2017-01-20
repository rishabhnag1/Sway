import React from 'react';
import Vote from './Vote';
import Winner from './Winner';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actionCreators from '../action_creators';

export class Voting extends React.Component {
  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return(
      <div className="voting" >
        {this.props.winner ? <Winner ref="winner" winner={this.props.winner}/> :
            <Vote {...this.props}/>
        }
        </div>
    )
  }
}

function mapStateToProps(state){
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner'),
    hasVoted: state.get('hasVoted')
  }
}

export const VotingContainer = connect(mapStateToProps, actionCreators)(Voting); // this is the connected component, doesn't mutate the above component, returns a new one that is synced to redux store state. the dumb one above relies solely on props to change itself

//passing in actioncreators passes in a vote prop into Voting which dispatches the action to the store