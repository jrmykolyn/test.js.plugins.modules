"use strict";
(function (window, MODULES) {
    var ApiB = window.__APIS__.ApiB;
    var AdapterB = window.__ADAPTERS__.AdapterB;
    MODULES.moduleB = new AdapterB(new ApiB());
})(window, (window.__MODULES__ = window.__MODULES__ || {}));
