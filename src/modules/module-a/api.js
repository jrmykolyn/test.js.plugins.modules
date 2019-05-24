((window, APIS) => {
  class Api {
    constructor() {
      console.log('__ INSIDE `Api#constructor()`');
    }

    fetchData() {
      console.log('__ INSIDE `Api#fetchData()`');
      return { foo: 'bar' };
    }
  }

  APIS.Api = Api;
})(window, (window.__APIS__ = window.__APIS__ || {}));
