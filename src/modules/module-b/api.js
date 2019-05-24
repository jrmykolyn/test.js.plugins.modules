((window, APIS) => {
  class ApiB {
    constructor() {
      console.log('__ INSIDE `ApiB#constructor()`');
    }

    updateData() {
      console.log('__ INSIDE `ApiB#updateData()`');
      return { foo: 'bar' };
    }
  }

  APIS.ApiB = ApiB;
})(window, (window.__APIS__ = window.__APIS__ || {}));
