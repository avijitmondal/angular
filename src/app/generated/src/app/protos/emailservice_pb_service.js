// package: emailservice
// file: src/app/protos/emailservice.proto

var src_app_protos_emailservice_pb = require("../../../src/app/protos/emailservice_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EmailSubmit = (function () {
  function EmailSubmit() {}
  EmailSubmit.serviceName = "emailservice.EmailSubmit";
  return EmailSubmit;
}());

EmailSubmit.submitEmail = {
  methodName: "submitEmail",
  service: EmailSubmit,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_emailservice_pb.SubmitRequest,
  responseType: src_app_protos_emailservice_pb.SubmitResponse
};

exports.EmailSubmit = EmailSubmit;

function EmailSubmitClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EmailSubmitClient.prototype.submitEmail = function submitEmail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailSubmit.submitEmail, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.EmailSubmitClient = EmailSubmitClient;

var SubmitEmail = (function () {
  function SubmitEmail() {}
  SubmitEmail.serviceName = "emailservice.SubmitEmail";
  return SubmitEmail;
}());

SubmitEmail.submitAsSpamVirusPhish = {
  methodName: "submitAsSpamVirusPhish",
  service: SubmitEmail,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_emailservice_pb.SubmitRequest,
  responseType: src_app_protos_emailservice_pb.SubmitResponse
};

SubmitEmail.submitAsLegitimate = {
  methodName: "submitAsLegitimate",
  service: SubmitEmail,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_emailservice_pb.SubmitRequest,
  responseType: src_app_protos_emailservice_pb.SubmitResponse
};

SubmitEmail.submitAsMarketing = {
  methodName: "submitAsMarketing",
  service: SubmitEmail,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_emailservice_pb.SubmitRequest,
  responseType: src_app_protos_emailservice_pb.SubmitResponse
};

exports.SubmitEmail = SubmitEmail;

function SubmitEmailClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SubmitEmailClient.prototype.submitAsSpamVirusPhish = function submitAsSpamVirusPhish(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SubmitEmail.submitAsSpamVirusPhish, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SubmitEmailClient.prototype.submitAsLegitimate = function submitAsLegitimate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SubmitEmail.submitAsLegitimate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SubmitEmailClient.prototype.submitAsMarketing = function submitAsMarketing(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SubmitEmail.submitAsMarketing, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.SubmitEmailClient = SubmitEmailClient;

