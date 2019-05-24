const Adapter = require('./adapter');
const Api = require('./api');

module.exports = new Adapter(new Api());
