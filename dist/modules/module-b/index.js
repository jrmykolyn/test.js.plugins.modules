"use strict";
((window, MODULES) => {
    const ApiB = window.__APIS__.ApiB;
    const AdapterB = window.__ADAPTERS__.AdapterB;
    MODULES.moduleB = new AdapterB(new ApiB());
})(window, (window.__MODULES__ = window.__MODULES__ || {}));
