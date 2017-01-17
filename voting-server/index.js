import makeStore from './src/store';
import startServer from './src/server';

export const store = makeStore();
//returns immutable store
startServer(store);

store.dispatch({
  type: "SET_ENTRIES",
  entries: require('./testentries.json')
});
store.dispatch({type: 'NEXT'});