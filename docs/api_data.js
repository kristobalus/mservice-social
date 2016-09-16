define({ "api": [  {    "type": "http",    "url": "<prefix>.feed.list",    "title": "List feeds registered in the system",    "version": "1.0.0",    "name": "feed_list",    "group": "Feed",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Object",            "optional": false,            "field": "filter",            "description": "<p>Search clauses</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>Auth token</p>"          }        ],        "filter": [          {            "group": "filter",            "type": "String",            "optional": true,            "field": "internal",            "description": "<p>Internal ID to fetch feeds for, if omitted, list all feeds</p>"          }        ]      }    },    "filename": "src/actions/feed.list.js",    "groupTitle": "Feed"  },  {    "type": "http",    "url": "<prefix>.feed.read",    "title": "Read feed by account with optional filters",    "version": "1.0.0",    "name": "feed_read",    "group": "Feed",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Object",            "optional": false,            "field": "filter",            "description": "<p>What to fetch, filters are cumulative (e.g. shows feed for both account id and mentions)</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>Auth token</p>"          }        ],        "filter": [          {            "group": "filter",            "type": "String",            "optional": true,            "field": "account",            "description": "<p>Account ID to fetch feed for</p>"          },          {            "group": "filter",            "type": "String[]",            "optional": true,            "field": "mentions",            "description": "<p>Array of mentions to search for undefined</p>"          },          {            "group": "filter",            "type": "String[]",            "optional": true,            "field": "hashtags",            "description": "<p>Array of hashtags to search for undefined</p>"          }        ]      }    },    "filename": "src/actions/feed.read.js",    "groupTitle": "Feed"  },  {    "type": "http",    "url": "<prefix>.feed.register",    "title": "Register new feed source",    "version": "1.0.0",    "name": "feed_register",    "group": "Feed",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "internal",            "description": "<p>Internal ID to assign this feed to</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "network",            "description": "<p>Social network to fetch feed from</p>"          },          {            "group": "Parameter",            "type": "Object",            "optional": false,            "field": "filter",            "description": "<p>What to fetch</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>Auth token</p>"          }        ],        "filter": [          {            "group": "filter",            "type": "String[]",            "optional": false,            "field": "account",            "description": "<p>Register a batch of accounts undefined</p>"          }        ]      }    },    "filename": "src/actions/feed.register.js",    "groupTitle": "Feed"  }] });
