((window, APIS) => {
  class ApiA {
    constructor() {
      console.log('__ INSIDE `ApiA#constructor()`');
    }

    fetchData() {
      console.log('__ INSIDE `ApiA#fetchData()`');
      return { foo: 'bar' };
    }
  }

  APIS.ApiA = ApiA;
})(window, (window.__APIS__ = window.__APIS__ || {}));
