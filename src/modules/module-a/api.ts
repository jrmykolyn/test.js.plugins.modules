declare var window: Window;

// Each API is defined within an immediately invoked
// function expression. The wrapping function accepts two parameters:
// - `window`: A reference to the global browser context.
// - `APIS`:   A reference to the APIs dictionary.
((window: any, APIS) => {
  class ApiA {
    // This API defines a static API URL, which it exposes as a
    // static property.
    //
    // This particular URL has been included for illustrative
    // purposes, and does not otherwise relate to the function
    // or purpose of the repository.
    static get API_URL() {
      return 'https://dog.ceo/api/breeds/list/all';
    }

    // Here we define the API-specific `fetchData()` method,
    // which makes a network request to the API URL, parses the
    // response as JSON, and returns the result as a Promise.
    fetchData() {
      return window.fetch(ApiA.API_URL)
        .then((data) => data.json());
    }
  }

  // Finally, we expose the API class as a property of the
  // APIs dictionary (`APIS`), which was injected as a
  // parameter of the immediately invoked function expression.
  APIS.ApiA = ApiA;
})(window, (window.__APIS__ = window.__APIS__ || {}));
