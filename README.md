# sample-json-mock-server

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

## TODO

#### mock socket connection
