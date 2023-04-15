import axios from "axios";
import WebSocket from 'ws';

export default async function fetchHelper(endpoint) {
  axios.get(endpoint)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
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