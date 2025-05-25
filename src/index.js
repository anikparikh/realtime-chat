import InboxSubscription from './inboxSubscription';
const RECIPIENT = 'Bobby';

// Polyfills for WebSocket and localStorage (if running in a non-browser env)
if (!global.WebSocket) {
  global.WebSocket = require('ws');
}
if (!global.window) {
  global.window = {
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    WebSocket: global.WebSocket,
    ArrayBuffer: global.ArrayBuffer,
    addEventListener: function () {},
    navigator: { onLine: true }
  };
}
if (!global.localStorage) {
  global.localStorage = {
    store: {},
    getItem: function (key) { return this.store[key]; },
    setItem: function (key, value) { this.store[key] = value; },
    removeItem: function (key) { delete this.store[key]; }
  };
}

// Promise + fetch polyfill for older environments
require('es6-promise').polyfill();
require('isomorphic-fetch');

// AppSync setup
const AppSyncConfig = require('./config').default;
const AWSAppSyncClient = require('aws-appsync').default;

const client = new AWSAppSyncClient({
  url: AppSyncConfig.graphqlEndpoint,
  region: AppSyncConfig.region,
  auth: {
    type: AppSyncConfig.authenticationType,
    apiKey: AppSyncConfig.apiKey,
  },
  disableOffline: true
});

// DOM helper to display messages
function displayMessage(msg) {
  const div = document.createElement('div');
  div.innerText = `[${msg.sentAt}] ${msg.from}: ${msg.body}`;
  document.body.appendChild(div);
}

// Start real-time subscription
client.hydrated().then(client => {
  const observable = client.subscribe({
    query: InboxSubscription,
    variables: { to: RECIPIENT }
  });

  observable.subscribe({
    next: ({ data }) => {
      if (data && data.inbox) {
        displayMessage(data.inbox);
      }
    },
    error: err => {
      console.error("Subscription error:", err);
    },
    complete: () => {
      console.log("Subscription completed");
    }
  });
});
