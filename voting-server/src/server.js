import Server from 'socket.io';

export default function startServer(store){
  const io = new Server().attach(8090);

  store.subscribe(
      () => io.emit('state', store.getState().toJS()) //sending JSON serialized state to all connections
  );

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store))
  }); //send the state to new connections to update UI
}

//TODO: optimize to send only parts of state, or sending only diffs