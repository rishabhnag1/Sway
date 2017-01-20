/*Will dispatch action to original and remote store
takes a redux store, returns a function that takes a next callback
returns another function that takes a redux action
currying
that inner function is where middleware implementation is*/


export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
}