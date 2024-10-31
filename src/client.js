import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import { WebSocketProvider } from "./websocket-provider"; // Import the WebSocketProvider
import reactLogo from "./react.svg";

const websocketurl = process.env.RAZZLE_WEBSOCKET_URL;
console.log(process.env.RAZZLE_WEBSOCKET_URL);
hydrate(
  <WebSocketProvider
    url={websocketurl}
    icon={reactLogo}
    brand=''
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WebSocketProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
