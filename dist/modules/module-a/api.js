"use strict";
(function (window, APIS) {
    var ApiA = /** @class */ (function () {
        function ApiA() {
            console.log('__ INSIDE `ApiA#constructor()`');
        }
        Object.defineProperty(ApiA, "API_URL", {
            get: function () {
                return 'https://dog.ceo/api/breeds/list/all';
            },
            enumerable: true,
            configurable: true
        });
        ApiA.prototype.fetchData = function () {
            console.log('__ INSIDE `ApiA#fetchData()`');
            return fetch(ApiA.API_URL)
                .then(function (data) { return data.json(); });
        };
        return ApiA;
    }());
    APIS.ApiA = ApiA;
})(window, (window.__APIS__ = window.__APIS__ || {}));
