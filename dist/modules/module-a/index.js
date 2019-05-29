"use strict";
// Each module is defined within an immediately invoked
// function expression. The wrapping function accepts two parameters:
// - `window`:    A reference to the global browser context.
// - `MODULES`:   A reference to the modules dictionary.
((window, MODULES) => {
    // Here we import the adapter and API for ModuleA...
    const ApiA = window.__APIS__.ApiA;
    const AdapterA = window.__ADAPTERS__.AdapterA;
    // Then we instantiate and expose a new adapter for ModuleA,
    // passing in the corresponding API as the first (and only)
    // argument.
    MODULES.moduleA = new AdapterA(new ApiA());
})(window, (window.__MODULES__ = window.__MODULES__ || {}));
