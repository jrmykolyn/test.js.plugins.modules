"use strict";
(function (window, ADAPTERS) {
    var AdapterB = /** @class */ (function () {
        function AdapterB(api) {
            console.log('__ INSIDE `AdapterB#constructor()`');
            this.api = api;
            // Bind.
            this.update = this.update.bind(this);
        }
        AdapterB.prototype.update = function () {
            var _this = this;
            console.log('__ INSIDE `AdapterB#update()`');
            return new Promise(function (resolve, reject) {
                try {
                    resolve(_this.api.updateData());
                }
                catch (e) {
                    reject(e);
                }
            });
        };
        AdapterB.prototype.register = function () {
            return [
                { listenOn: 'NAMESPACE:UPDATE', emitOn: ['NAMESPACE:UPDATED'], callbacks: [this.update] },
            ];
        };
        return AdapterB;
    }());
    ADAPTERS.AdapterB = AdapterB;
})(window, (window.__ADAPTERS__ = window.__ADAPTERS__ || {}));
