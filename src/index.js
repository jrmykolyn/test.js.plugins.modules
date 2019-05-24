// Import modules.
const Adapter = require('./adapter');
const Api = require('./api');

// Declare variables.
const api = new Api();
const adapter = new Adapter(api);

// Init.
adapter.fetch();
