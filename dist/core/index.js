"use strict";
(function (window) {
    var Core = /** @class */ (function () {
        function Core(opts) {
            if (opts === void 0) { opts = {}; }
            var _this = this;
            this.modules = opts.modules || {};
            // For each module provided via `opts`:
            // - Extract the module-specific event and callback data.
            // - Register 1x listener for each 'inbound' event.
            // - Invoke the corresponding callbacks when an 'inbound' event is emitted.
            // - Dispatch all 'outbound' events using the data return by each callback.
            Object.keys(this.modules).forEach(function (k) {
                var module = _this.modules[k];
                module.register().forEach(function (_a) {
                    var listenOn = _a.listenOn, emitOn = _a.emitOn, callbacks = _a.callbacks;
                    window.addEventListener(listenOn, function () {
                        callbacks.forEach(function (callback) {
                            callback()
                                .then(function (data) {
                                emitOn.forEach(function (eventName) {
                                    window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
                                });
                            })
                                .catch(function (e) {
                                console.error(e);
                            });
                        });
                    });
                });
            });
        }
        return Core;
    }());
    var modules = window.__MODULES__;
    var core = window.__CORE__ = new Core({ modules: modules });
})(window);
