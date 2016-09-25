module.exports = {
  friendlyName: 'Get user by access token',
  description: 'Get information about the Facebook user with the specified access token.',
  extendedDescription: '',
  cacheable: true,

  inputs: {
    access_token: {
      example: 'CA2Emk9XsJUIBAHB9sTF5rOdNmAXTDjiHxZaZC1GYtFZCcdYGVnLYZB7jZCvensIpGc22yEzN6CL6wtQ9LPVXTNkuP6eQoUQ0toEVPrmTTqDpj0POijBpsuZBnx7jrZCHaTw8leiZBn0R8u6gZAYZAuD77cA3tnDMYvHhrl42CnljROeC9maWoa5zbsT2TZBXdL9wEuGQDSxKqRPyajRw3P3HEK',
      description: 'The access token which allows you to do things and get information on behalf of a particular Facebook user.',
      required: true
    },
    fields: {
      example: 'email, first_name, last_name, gender, picture, link, locale, name',
      description: 'The fields to be requested to the API. Needs to be a comma separated string. If not send, will return only name and id',
      required: false
    }
  },

  defaultExit: 'success',
  catchallExit: 'error',

  exits: {
    error: {
      description: 'Triggered when the Facebook API returns an error (i.e. a non-2xx status code)'
    },
    success: {
      description: 'Returns all available data for the Facebook user connected to the specified access token. Advanced details about each of the keys below are available at https://developers.facebook.com/docs/graph-api/reference/v2.2/user.',
      example: {
        id: '7653384',
        email: 'foobar@gzail.com',
        first_name: 'Brendan',
        gender: 'female',
        last_name: 'Eich',
        link: 'http://www.facebook.com/7653384',
        locale: 'en_US',
        name: 'Brendan Eich',
        timezone: -6,
        updated_time: '2014-08-16T12:07:43+0000',
        verified: true
      }
    }
  },

  fn: function (inputs,exits) {

    var doJSONRequest = require('../lib/do-request');
    var version = inputs.api_version || 'v2.5';
    var url = '/' + version + '/me';
    delete inputs.api_version;
    // GET projects/ and send the api token as a header
    doJSONRequest({
      method: 'get',
      url: url,
      data: inputs,
      headers: {},
    }, function (err, responseBody) {
      if (err) { return exits.error(err); }
      return exits.success(responseBody);
    });
  }
};


