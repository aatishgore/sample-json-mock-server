# sample-json-mock-server

Requirement: Latest [Node](https://nodejs.org/en/) version

To start mock server run

```
npm start
```

Generate mock api based on json structure

Define different type of api in src/mock-api folder

http://localhost:8000

Sample

```
{
  "uri": "/api/incident/:id",
  "method": "get",
  "request": {
    "filter": {
      "name": "Sample"
    }
  },
  "headers": {
    "Authorization": "Bearer x3n394n23ndadf03nd032sfnasf"
  },
  "response": {
    "status": true,
    "data": {
      "event_name": "Sample Event",
      "event_source": "Sample source",
      "event_details": "Sample Details",
      "event_type": "Warning"
    }
  },
  "responseError": {
    "status": false,
    "data": {
      "message": "Something went wrong"
    }
  }
}
```

Generating error response

![alt text](https://raw.githubusercontent.com/aatishgore/sample-json-mock-server/master/screenshots/manage-error.png "Handling it with header params")

Sample screen

![alt text](https://raw.githubusercontent.com/aatishgore/sample-json-mock-server/master/screenshots/output.png "Handling it with header params")

## TODO

#### mock socket connection
