"use strict";
((window, APIS) => {
    class ApiB {
        static get API_URL() {
            return 'https://api.exchangeratesapi.io/latest';
        }
        constructor() {
            console.log('__ INSIDE `ApiB#constructor()`');
        }
        updateData() {
            console.log('__ INSIDE `ApiB#updateData()`');
            return window.fetch(ApiB.API_URL)
                .then((data) => data.json());
        }
    }
    APIS.ApiB = ApiB;
})(window, (window.__APIS__ = window.__APIS__ || {}));
