let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = function (event, context, callback) {


    callback(null, { "message": "Successfully executed change time and mem" });
}