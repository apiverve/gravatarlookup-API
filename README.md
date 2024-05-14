Gravatar Lookup API
============

Gravatar Lookup is a simple tool for looking up Gravatar profiles. It returns the Gravatar profile information of the email address provided.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Javascript Wrapper for the [Gravatar Lookup API](https://apiverve.com/marketplace/api/gravatarlookup)

---

## Installation
	npm install @apiverve/gravatarlookup --save

---

## Configuration

Before using the gravatarlookup API client, you have to setup your account and obtain your API Key.  
You can get it by signing up at [https://apiverve.com](https://apiverve.com)

---

## Usage

The Gravatar Lookup API documentation is found here: [https://docs.apiverve.com/api/gravatarlookup](https://docs.apiverve.com/api/gravatarlookup).  
You can find parameters, example responses, and status codes documented here.

### Setup

```
var gravatarlookupAPI = require('@apiverve/gravatarlookup');
var api = new gravatarlookupAPI({
    api_key: [YOUR_API_KEY],
    secure: true //(Optional, defaults to true)
});
```

---


### Perform Request
Using the API client, you can perform requests to the API.

###### Define Query

```
var query = {
  email: "hello@apiverve.com"
};
```

###### Simple Request (using Callback)

```
api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

###### Example Response

```
{
  "status": "ok",
  "error": null,
  "data": {
    "hash": "08ccd5c0bdd88b0ac13f776a4f7914db",
    "requestHash": "08ccd5c0bdd88b0ac13f776a4f7914db",
    "profileUrl": "https://gravatar.com/hello44d60115a9",
    "preferredUsername": "hello44d60115a9",
    "thumbnailUrl": "https://0.gravatar.com/avatar/08ccd5c0bdd88b0ac13f776a4f7914db",
    "photos": [
      {
        "value": "https://0.gravatar.com/avatar/08ccd5c0bdd88b0ac13f776a4f7914db",
        "type": "thumbnail"
      }
    ],
    "last_profile_edit": "2024-04-29 22:08:41",
    "displayName": "APIVerve",
    "company": "APIVerve",
    "contactInfo": [
      {
        "type": "contactform",
        "value": "apiverve.com/contact"
      }
    ],
    "urls": [
      {
        "title": "Website",
        "value": "https://apiverve.com"
      }
    ],
    "profileBackground": {
      "opacity": 1
    },
    "share_flags": {
      "search_engines": true
    }
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the mailboxlayer website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2024 APIVerve, and Evlar LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.