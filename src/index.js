const server = require("mock-json-server");
var notification = require("./mock-api/notification.json");
var incidentList = require("./mock-api/incidentList.json");
var incident = require("./mock-api/incident.json");
const app = server(
  {
    "api/notification": {
      get: notification,
    },
    "api/incident/": {
      get: incidentList,
    },
    "api/incident/:id": {
      get: incident,
    },
  },
  8001,
  "localhost"
); // Start the server with a JSON object;

// Start the server;
app.start();
