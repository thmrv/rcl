import axios from "axios";
import WebSocket from 'ws';

export default async function fetchHelper(endpoint) {
  return fetch(endpoint)
  .then((response) => {
      if (!response.ok) {
          throw new Error(
              `This is an HTTP error: The status is ${response.status}`
          );
      }
      return response.json();
  })
  .then((actualData) => { return actualData })
  .catch((err) => {
      console.log(err.message);
  })
}

export function wsHelper(endpoint, data) {
  const ws = new WebSocket('ws://' + endpoint);
  ws.on('error', console.error);
  ws.on('open', function open() {
    ws.send(data);
  });
  ws.on('message', function message(data) {
    return data;
  });
}