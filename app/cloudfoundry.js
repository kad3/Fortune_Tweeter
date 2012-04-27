var port = process.env.VCAP_APP_PORT;

var services = process.env.VCAP_SERVICES?JSON.parse(process.env.VCAP_SERVICES):undefined;

exports.runningInTheCloud = function() {
    return process.env.VCAP_APP_PORT ? true:false;
};

exports.port = port;

exports.services = services;

exports.redis = (services && services["redis-2.2"])?services["redis-2.2"][0]:undefined;
exports.mongo = (services && services["mongodb-1.8"])?services["mongodb-1.8"][0]:undefined;
