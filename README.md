# sample-json-mock-server

Generate mock api based on json structure

Define different type of api in src/mock-api folder

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
    "Authorization": "Bearer <token>"
  },
  "response": {
    "status": true,
    "data": {
      "event_name": "Sample Event",
      "event_source": "Sample source",
      "event_details": "Sample Details",
      "event_type": "Warning"
    }
  }
}
```

## TODO

#### mock socket connection
