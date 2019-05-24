((window) => {
  class Core {
    constructor(opts = {}) {
      this.modules = opts.modules || {};

      Object.keys(this.modules).forEach((k) => {
        const module = this.modules[k];

        module.register().forEach(({ listenOn, emitOn, callbacks }) => {
          window.addEventListener(listenOn, () => {
            callbacks.forEach((callback) => {
              callback()
                .then((data) => {
                  emitOn.forEach((eventName) => {
                    window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
                  });
                })
                .catch((e) => {
                  console.error(e);
                });
            });
          });
        });
      });
    }
  }

  const modules = window.__MODULES__;
  const core = window.__CORE__ = new Core({ modules })
})(window);
