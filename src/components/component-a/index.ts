declare var window: Window;

// Each component is defined within an immediately invoked
// function expression. The wrapping function accepts two parameters:
// - `window`:       A reference to the global browser context.
// - `COMPONENTS`:   A reference to the components dictionary.
((window, COMPONENTS) => {
  // Here we define the template for the component by:
  // - Creating a new <template> element and capturing it in a constant.
  // - Setting the inner HTML of the element.
  const template = document.createElement('template');
  template.innerHTML = `
    <button ref="btn">
      <slot name="content">Component A</slot>
    </button>
  `;

  // Here we create the class that will define the state and behaviour
  // for our new component.
  class ComponentA extends HTMLElement {
    root: any;
    refs: any;

    // Then we use the `observedAttributes()` method to specify which
    // HTML attributes a developer may set or update. In this case,
    // a developer may set or update the 'outbound-event' attribute.
    static get observedAttributes() {
      return ['outbound-event'];
    }

    // We use our constructor to:
    // - Define and attach the Shadow DOM to the component instance.
    // - Insert the components template into the Shadow DOM.
    // - Capture references to each significant node within the template.
    // - Bind the component's methods to the correct context.
    constructor() {
      super();
      this.root = this.attachShadow({ mode: 'open' });
      this.root.appendChild(template.content.cloneNode(true));
      this.refs = this.getRefs();

      // Bind.
      this.fetch = this.fetch.bind(this);
    }

    // Here we use the `connectedCallback()` method to register
    // a new event listener when the component instance is first
    // injected into the DOM.
    //
    // In this case, we're registering a listen against the
    // <button> element within the component's template. We
    // access the <button> element via the `refs` property,
    // which is set at instantiation time.
    connectedCallback() {
      this.refs.btn.addEventListener('click', this.fetch);
    }

    // When the component instance is removed from the DOM,
    // we unregister the <button> click handler.
    disconnectedCallback() {
      this.refs.btn.removeEventListener('click', this.fetch);
    }

    // The `getRefs()` method generates an object that contains
    // references to each element within the component's template
    // that includes a `ref` property. This object is used to
    // register and unregister event listeners, and in other cases
    // where DOM access is required.
    getRefs() {
      return [...this.root.querySelectorAll('[ref]') || []]
        .reduce((acc, node) => {
          return {
            ...acc,
            [node.getAttribute('ref')]: node,
          };
        }, {});
    }

    // The `fetch()` method emits and event that pierces the Shadow DOM
    // and bubbles up through the document. If the developer provided
    // a value for the `outbound-event` attribute, that value is used
    // for the new event's name. If no `outbound-event` attribute is
    // provided, a default event name is used.
    fetch() {
      const e = new Event(this.getAttribute('outbound-event') || 'NAMESPACE:DEFAULT', {
        "bubbles": true,
        "composed": true,
      });
      this.refs.btn.dispatchEvent(e);
    }
  }

  // After we've defined the component class, we expose it as a property of
  // the components dictionary (`COMPONENTS`), which was injected as a
  // parameter of the immediately invoked function expression.
  COMPONENTS.ComponentA = ComponentA;

  // Finally, if the current browser supports Web Components, we register
  // the current component using the 'kebab case' version of the class
  // name.
  if (window.customElements) window.customElements.define('component-a', COMPONENTS.ComponentA);
})(window, (window.__COMPONENTS__ = window.__COMPONENTS__ || {}));
