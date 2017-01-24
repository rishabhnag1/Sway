/*Will dispatch action to original and remote store
takes a redux store, returns a function that takes a next callback
returns another function that takes a redux action
currying
that inner function is where middleware implementation is*/

import objectAssign from 'object-assign';

export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    const clientId = store.getState().get('clientId');
    socket.emit('action', objectAssign({}, action, {clientId}));
  }
  return next(action);
}
