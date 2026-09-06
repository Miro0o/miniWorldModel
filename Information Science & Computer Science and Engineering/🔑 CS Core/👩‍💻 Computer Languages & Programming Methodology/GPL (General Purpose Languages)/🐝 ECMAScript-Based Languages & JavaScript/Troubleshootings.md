# Troubleshootings

[TOC]



## 👉 Error No 'Access-Control-Allow-Origin' - Nodejs
install the cors dependency and then use it is a middleware
```javascript
app.use(cors());
```

After this, if you make a request to your server, a new header will be returned as follows,
_**`Access-Control-Allow-Origin: *`**_

It determines which origins are allowed to access server resources over CORS.

The * wildcard allows access from any origin or if you want to allow access to particular origin then add origin option to the middleware..
```javascript
app.use(cors({
  origin: 'http://localhost:3000'
}));
```

After this, if you make a request to your server, a new header will be returned as follows,_**`Access-Control-Allow-Origin: http://localhost:3000`**_


[Error No 'Access-Control-Allow-Origin' - Nodejs | Stackoverflow]: https://stackoverflow.com/questions/72475291/error-no-access-control-allow-origin-nodejs



## Ref

