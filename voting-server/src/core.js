import {List, Map} from 'immutable';

export function setEntries(state, entries){
  return state.set('entries', List(entries));

  //use List constructor to coerce to immutable data structure

}

function getWinners(vote) {
  if(!vote) return [];
  const [a,b] = vote.get('pair');
  const aVotes = vote.getIn(['tally', a], 0);
  const bVotes = vote.getIn(['tally', b], 0);
  if(aVotes > bVotes) return [a];
  else if(aVotes < bVotes) return [b];
  else return [a,b];
}

export function next(state) {
  //will use immutable merge function to update old state
  const entries = state.get('entries')
      .concat(getWinners(state.get('vote')));
  if(entries.size === 1) {
    return state.remove('vote').remove('tally').set('winner', entries.first())
  } else {
    return state.merge({
      vote: Map({
        round: state.getIn(['vote','round'], 0) + 1,
        pair: entries.take(2)}),
      entries: entries.skip(2)
    });
  }
  //better to remove from old state than to return entirely new Map, just in case the state contains fields that you want to return with the winner, basically future proofing. always good practice to morph old state into new one
}

export function vote(voteState, entry) {
  if(voteState.get('pair').includes(entry)){
    return voteState.updateIn(
        ['tally', entry],
        0,
        tally => tally + 1
    );
  } else {
    return voteState;
  }
}

export const INITIAL_STATE = Map();

