((window, ADAPTERS) => {
  class Adapter {
    constructor(api) {
      console.log('__ INSIDE `Adapter#constructor()`');
      this.api = api;
    }

    fetch() {
      console.log('__ INSIDE `Adapter#fetch()`');

      return new Promise((resolve, reject) => {
        try {
          resolve(this.api.fetchData());
        } catch (e) {
          reject(e);
        }
      });
    }
  }

  ADAPTERS.Adapter = Adapter;
})(window, (window.__ADAPTERS__ = window.__ADAPTERS__ || {}));
