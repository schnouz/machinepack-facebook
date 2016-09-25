<h1>
  <a href="http://node-machine.org" title="Node-Machine public registry"><img alt="node-machine logo" title="Node-Machine Project" src="http://node-machine.org/images/machine-anthropomorph-for-white-bg.png" width="50" /></a>
  machinepack-facebook-oauth
</h1>


Communicate with Facebook to authenticate, get profile data, friends, likes, and more.


## Installation &nbsp; [![NPM version](https://badge.fury.io/js/machinepack-facebook.svg)](http://badge.fury.io/js/machinepack-facebook) [![Build Status](https://travis-ci.org/irlnathan/machinepack-facebook.png?branch=master)](https://travis-ci.org/irlnathan/machinepack-facebook)

```sh
$ npm install machinepack-facebook-oauth
```

## Usage

#### Get the URL on facebook.com that a user should visit to allow/deny the specified Facebook Developer app (i.e. your app).

```js
var Facebook = require('machinepack-facebook-oauth');

Facebook.getLoginUrl({
appId: 'YOUR_APPID',
callbackUrl: 'YOUR_CALLBACK_URI',
permissions: [ 'email', 'public_profile', 'user_friends' ],
}).exec({
// An unexpected error occurred.
error: function (err){
 
},
// OK.
success: function (result){
 
},
});
```
#### Generate a new access token for acting on behalf of a particular Facebook user account.

```js
var Facebook = require('machinepack-facebook-oauth');

Facebook.getAccessToken({
appId: 'YOUR_APPID',
appSecret: 'YOUR_APP_SECRET',
code: 'YOUR_CODE', //code returned by the URL we get on getLoginUrl()
callbackUrl: 'YOUR_CALLBACK_URI', //same as getLoginUrl()
}).exec({
// An unexpected error occurred.
error: function (err){
 
},
// OK.
success: function (result){
 
},
});
```

#### Get information about the Facebook user with the specified access token.

```js
var Facebook = require('machinepack-facebook-oauth');

Facebook.getUserByAccessToken({
access_token: 'YOUR_TOKEN',
fields: 'email, name, firts_name',
api_version: 'v2.7'
}).exec({
// An unexpected error occurred.
error: function (err){
 
},
// OK.
success: function (result){
 
},
});
```

## About

This is a [machinepack](http://node-machine.org/machinepacks), an NPM module which exposes a set of related Node.js [machines](http://node-machine.org/spec/machine) according to the [machinepack specification](http://node-machine.org/spec/machinepack).
Documentation pages for the machines contained in this module (as well as all other NPM-hosted machines for Node.js) are automatically generated and kept up-to-date on the <a href="http://node-machine.org" title="Public machine registry for Node.js">public registry</a>.
Learn more at <a href="http://node-machine.org/implementing/FAQ" title="Machine Project FAQ (for implementors)">http://node-machine.org/implementing/FAQ</a>.

## License

MIT &copy; 2016 Mike McNeil and contributors

