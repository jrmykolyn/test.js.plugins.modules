"use strict";
((window, APIS) => {
    class ApiA {
        static get API_URL() {
            return 'https://dog.ceo/api/breeds/list/all';
        }
        constructor() {
            console.log('__ INSIDE `ApiA#constructor()`');
        }
        fetchData() {
            console.log('__ INSIDE `ApiA#fetchData()`');
            return fetch(ApiA.API_URL)
                .then((data) => data.json());
        }
    }
    APIS.ApiA = ApiA;
})(window, (window.__APIS__ = window.__APIS__ || {}));
