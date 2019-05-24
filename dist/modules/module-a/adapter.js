"use strict";
(function (window, ADAPTERS) {
    var AdapterA = /** @class */ (function () {
        function AdapterA(api) {
            console.log('__ INSIDE `AdapterA#constructor()`');
            this.api = api;
            // Bind.
            this.fetch = this.fetch.bind(this);
        }
        AdapterA.prototype.fetch = function () {
            var _this = this;
            console.log('__ INSIDE `AdapterA#fetch()`');
            return new Promise(function (resolve, reject) {
                try {
                    resolve(_this.api.fetchData());
                }
                catch (e) {
                    reject(e);
                }
            });
        };
        AdapterA.prototype.register = function () {
            return [
                { listenOn: 'NAMESPACE:FETCH', emitOn: ['NAMESPACE:FETCHED'], callbacks: [this.fetch] },
            ];
        };
        return AdapterA;
    }());
    ADAPTERS.AdapterA = AdapterA;
})(window, (window.__ADAPTERS__ = window.__ADAPTERS__ || {}));
