"use strict";
((window, MODULES) => {
    const ApiA = window.__APIS__.ApiA;
    const AdapterA = window.__ADAPTERS__.AdapterA;
    MODULES.moduleA = new AdapterA(new ApiA());
})(window, (window.__MODULES__ = window.__MODULES__ || {}));
