#SWAY - Live Voting Application 

A real time voting application built with React/Redux/React Router on the client side, and Node and Redux on the back end. 

#Features
- Client and server applications with synchronized redux stores in both systems
- Uses ImmutableJS and Redux to allow for deterministic components and methods, with unidirectional data flow and pure rendering (PureRenderMixin)
- Seperate endpoint for voting operator and voters
- SocketIO application allowing for multiple voters and real-time results

# Installation/Usage
1) Install the dependencies on both the client and voting-server applications:
  npm install

2) Start server:
  In voting-server directory: 
  npm run start

3) Start Webpack Dev Server:
  In client directory: 
  webpack-dev-server

3) Navigate to http://localhost:8080/ to view the voting platform
Navigate to http://localhost:8080/#/results to view the results and trigger the next vote (hit next at the bottom)

4) Begin voting!

#TODO
-custom datasets
