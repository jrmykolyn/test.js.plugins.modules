"use strict";
// Each adapter is defined within an immediately invoked
// function expression. The wrapping function accepts two parameters:
// - `window`:     A reference to the global browser context.
// - `ADAPTERS`:   A reference to the adapters dictionary.
((window, ADAPTERS) => {
    class AdapterA {
        // The constructor accepts a reference to the underlying API (via
        // the `api` parameter), and assigns it to the corresponding
        // property on the adapter instance.
        //
        // We also bind the adapter's instance methods to the correct
        // context (ie. the adapter instance itself).
        constructor(api) {
            this.api = api;
            // Bind.
            this.fetch = this.fetch.bind(this);
        }
        // Here we define the `register()` method, which must be
        // implemented by all adapter-type classes.
        //
        // This method returns an array of 'registration objects',
        // each of which must include the following properties and
        // values:
        // - `listenOn:     A string whose value is an event name.
        //
        // - `emitOn`:      An array of event name strings. Whenever one of
        //                  the callback functions is invoked, 1x event will
        //                  be emitted for each of the `emitOn` events.
        //                  Additionally, each `emitOn` event will include
        //                  the callback's return value as its payload.
        //
        // - `callbacks`:   An array of callback functions. Each callback
        //                  function will be invoked whenever the 'listenOn'
        //                  event is emitted.
        register() {
            return [
                { listenOn: 'NAMESPACE:FETCH', emitOn: ['NAMESPACE:FETCHED'], callbacks: [this.fetch] },
            ];
        }
        // Here we define the adapter-specific `fetch` method. This
        // method is a wrapper around the `fetchData` method, which
        // is exposed by the underlying API.
        fetch() {
            return new Promise((resolve, reject) => {
                try {
                    resolve(this.api.fetchData());
                }
                catch (e) {
                    reject(e);
                }
            });
        }
    }
    // Finally, we expose the adapter class as a property of the
    // adapters dictionary (`ADAPTERS`), which was injected as a
    // parameter of the immediately invoked function expression.
    ADAPTERS.AdapterA = AdapterA;
})(window, (window.__ADAPTERS__ = window.__ADAPTERS__ || {}));
