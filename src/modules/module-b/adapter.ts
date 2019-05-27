declare var window: Window;

((window: any, ADAPTERS) => {
  class AdapterB {
    api: any;

    constructor(api) {
      console.log('__ INSIDE `AdapterB#constructor()`');
      this.api = api;

      // Bind.
      this.update = this.update.bind(this);
    }

    update() {
      console.log('__ INSIDE `AdapterB#update()`');

      return new Promise((resolve, reject) => {
        try {
          resolve(this.api.updateData());
        } catch (e) {
          reject(e);
        }
      });
    }

    register() {
      return [
        { listenOn: 'NAMESPACE:UPDATE', emitOn: ['NAMESPACE:UPDATED'], callbacks: [this.update] },
      ];
    }
  }

  ADAPTERS.AdapterB = AdapterB;
})(window, (window.__ADAPTERS__ = window.__ADAPTERS__ || {}));
