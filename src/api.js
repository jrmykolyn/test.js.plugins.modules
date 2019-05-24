class Api {
  constructor() {
    console.log('__ INSIDE `Api#constructor()`');
  }

  fetchData() {
    console.log('__ INSIDE `Api#fetchData()`');
    return { foo: 'bar' };
  }
}

module.exports = Api;
