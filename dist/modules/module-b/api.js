"use strict";
(function (window, APIS) {
    var ApiB = /** @class */ (function () {
        function ApiB() {
            console.log('__ INSIDE `ApiB#constructor()`');
        }
        Object.defineProperty(ApiB, "API_URL", {
            get: function () {
                return 'https://api.exchangeratesapi.io/latest';
            },
            enumerable: true,
            configurable: true
        });
        ApiB.prototype.updateData = function () {
            console.log('__ INSIDE `ApiB#updateData()`');
            return window.fetch(ApiB.API_URL)
                .then(function (data) { return data.json(); });
        };
        return ApiB;
    }());
    APIS.ApiB = ApiB;
})(window, (window.__APIS__ = window.__APIS__ || {}));
