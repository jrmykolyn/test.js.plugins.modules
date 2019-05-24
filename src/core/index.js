((window) => {
  class Core {
    constructor(opts = {}) {
      console.log('__ INSIDE `Core#constructor()`');
      this.modules = opts.modules || {};

      // Register listeners.
      window.addEventListener('NAMESPACE:FETCH', () => {
        console.log('__ INSIDE `NAMESPACE:FETCH` CALLBACK');

        this.modules.moduleA.fetch()
          .then((data) => {
            console.log('__ RECEIVED RESPONSE');
            console.log('__', data);
          })
          .catch((e) => {
            console.error('__ ENCOUNTERED ERROR');
            console.error(e);
          });
      });
    }
  }

  const modules = window.__MODULES__;
  const core = window.__CORE__ = new Core({ modules })
})(window);
