((window, MODULES) => {
  const Api = window.__APIS__.Api;
  const Adapter = window.__ADAPTERS__.Adapter;

  MODULES.moduleA = new Adapter(new Api());
})(window, (window.__MODULES__ = window.__MODULES__ || {}));
