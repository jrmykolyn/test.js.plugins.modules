"use strict";
// The Core module is defined within an immediately invoked
// function expression. The wrapping function accepts two parameters:
// - `window`:    A reference to the global browser context.
((window) => {
    class Core {
        // The constructor function receives an object of options data,
        // which includes an object of module classes.
        constructor(opts = {}) {
            // Here we capture a reference to the object of modules data
            // for later use.
            this.modules = opts.modules || {};
            // Then we iterate through the modules and execute the following
            // for each:
            // - Extract the event and callback data using the module's `register()` method.
            // - Register 1x listener for each 'inbound' event.
            // - Invoke the corresponding callbacks when an 'inbound' event is emitted.
            // - Dispatch all 'outbound' events using the data return by each callback.
            Object.keys(this.modules).forEach((k) => {
                const module = this.modules[k];
                module.register().forEach(({ listenOn, emitOn, callbacks }) => {
                    window.addEventListener(listenOn, () => {
                        callbacks.forEach((callback) => {
                            callback()
                                .then((data) => {
                                emitOn.forEach((eventName) => {
                                    window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
                                });
                            })
                                .catch((e) => {
                                console.error(e);
                            });
                        });
                    });
                });
            });
        }
    }
    // Finally, we instantiate an instance of the Core class, passing in an
    // options object that itself contains an object of modules data.
    //
    // Additionally, we expose the Core instance as the `__CORE__` property of
    // the window object, which we received as a paramter of the immediately
    // invoked function expression.
    const core = window.__CORE__ = new Core({ modules: window.__MODULES__ || {} });
})(window);
