class Adapter {
  constructor(api) {
    console.log('__ INSIDE `Adapter#constructor()`');
    this.api = api;
  }

  fetch() {
    console.log('__ INSIDE `Adapter#fetch()`');
    return this.api.fetchData();
  }
}

module.exports = Adapter;
