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

var Facebook = require('machinepack-facebook-oauth');

// Get the URL on facebook.com that a user should visit to allow/deny the specified Facebook Developer app (i.e. your app).
Facebook.getLoginUrl({
appId: '215798311808508',
callbackUrl: 'http://localhost:1337/user/facebook/login',
permissions: [ 'email' ],
}).exec({
// An unexpected error occurred.
error: function (err){
 
},
// OK.
success: function (result){
 
},
});

var Facebook = require('machinepack-facebook');

// Generate a new access token for acting on behalf of a particular Facebook user account.
Facebook.getAccessToken({
appId: '215798311808508',
appSecret: 'dsg4901g0123456',
code: 'AQDvCav5zRSafS795TckAerUV53xzgqRyrcfYX2i_PJFObCvACVRP-V7sfemiMPBh3TWypvagfZ6aoqfwKCNcBxg8XR_skdYUe5tsY9UzX9Z_8q4mRrqaLhwSh5OHj9ORmE4ocyd-neZtdceTZjlmEVeO38UH9QOe_md7h5hy2gMhOS6TL9IBk5Guxg3O6I0WmjpFNPoj6JzWIvG9cgj7RQqxMA2q_8EJxGPTqEbmTqOBqqCIOlvPEPCeIiy21VD9__tuzB0JvgqbVh-U_WW8mjwGBqsfxlNvjYwIxk4zBNAxuRJijkkn0TwyogFpZqIlkY',
callbackUrl: 'http://localhost:1337/user/facebook/login',
}).exec({
// An unexpected error occurred.
error: function (err){
 
},
// OK.
success: function (result){
 
},
});

var Facebook = require('machinepack-facebook');

// Get information about the Facebook user with the specified access token.
Facebook.getUserByAccessToken({
access_token: 'CA2Emk9XsJUIBAHB9sTF5rOdNmAXTDjiHxZaZC1GYtFZCcdYGVnLYZB7jZCvensIpGc22yEzN6CL6wtQ9LPVXTNkuP6eQoUQ0toEVPrmTTqDpj0POijBpsuZBnx7jrZCHaTw8leiZBn0R8u6gZAYZAuD77cA3tnDMYvHhrl42CnljROeC9maWoa5zbsT2TZBXdL9wEuGQDSxKqRPyajRw3P3HEK',
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

## About  &nbsp; [![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/node-machine/general?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is a [machinepack](http://node-machine.org/machinepacks), an NPM module which exposes a set of related Node.js [machines](http://node-machine.org/spec/machine) according to the [machinepack specification](http://node-machine.org/spec/machinepack).
Documentation pages for the machines contained in this module (as well as all other NPM-hosted machines for Node.js) are automatically generated and kept up-to-date on the <a href="http://node-machine.org" title="Public machine registry for Node.js">public registry</a>.
Learn more at <a href="http://node-machine.org/implementing/FAQ" title="Machine Project FAQ (for implementors)">http://node-machine.org/implementing/FAQ</a>.

## License

MIT &copy; 2016 Mike McNeil and contributors

