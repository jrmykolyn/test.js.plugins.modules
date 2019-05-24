((window, ADAPTERS) => {
  class Adapter {
    constructor(api) {
      console.log('__ INSIDE `Adapter#constructor()`');
      this.api = api;
    }

    fetch() {
      console.log('__ INSIDE `Adapter#fetch()`');
      return this.api.fetchData();
    }
  }

  ADAPTERS.Adapter = Adapter;
})(window, (window.__ADAPTERS__ = window.__ADAPTERS__ || {}));
