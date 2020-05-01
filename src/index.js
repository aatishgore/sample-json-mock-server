const server = require("mock-json-server");
var notification = require("./mock-api/notification.json");
var incidentList = require("./mock-api/incidentList.json");
var incident = require("./mock-api/incident.json");

const mockFolder = __dirname + "/mock-api/";
let serverData = {};
const fs = require("fs");
fs.readdirSync(mockFolder).forEach((file) => {
  // console.log(mockFolder + file);
  let data = require(mockFolder + file);
  // console.log(data);
  let api = {};
  api[data.method] = {};
  api[data.method]["response"] = data.response;
  if (data.request !== undefined) api[data.method]["request"] = data.request;
  if (data.headers !== undefined) api[data.method]["headers"] = data.headers;

  serverData[data.uri] = api;
});

const app = server(serverData, 8001, "localhost"); // Start the server with a JSON object;

// Start the server;
app.start();
