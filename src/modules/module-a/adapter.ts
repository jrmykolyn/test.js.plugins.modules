declare var window;

((window: any, ADAPTERS) => {
  class AdapterA {
    constructor(api) {
      console.log('__ INSIDE `AdapterA#constructor()`');
      this.api = api;

      // Bind.
      this.fetch = this.fetch.bind(this);
    }

    fetch() {
      console.log('__ INSIDE `AdapterA#fetch()`');

      return new Promise((resolve, reject) => {
        try {
          resolve(this.api.fetchData());
        } catch (e) {
          reject(e);
        }
      });
    }

    register() {
      return [
        { listenOn: 'NAMESPACE:FETCH', emitOn: ['NAMESPACE:FETCHED'], callbacks: [this.fetch] },
      ];
    }
  }

  ADAPTERS.AdapterA = AdapterA;
})(window, (window.__ADAPTERS__ = window.__ADAPTERS__ || {}));
