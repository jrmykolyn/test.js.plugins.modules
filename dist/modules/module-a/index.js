"use strict";
(function (window, MODULES) {
    var ApiA = window.__APIS__.ApiA;
    var AdapterA = window.__ADAPTERS__.AdapterA;
    MODULES.moduleA = new AdapterA(new ApiA());
})(window, (window.__MODULES__ = window.__MODULES__ || {}));
