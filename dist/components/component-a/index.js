"use strict";
((window, COMPONENTS) => {
    // Define template.
    const template = document.createElement('template');
    template.innerHTML = `
    <button>
      <slot name="content">Component A</slot>
    </button>
  `;
    // Define component class.
    COMPONENTS.ComponentA = class ComponentA extends HTMLElement {
        constructor() {
            super();
            this.root = this.attachShadow({ mode: 'open' });
            this.root.appendChild(template.content.cloneNode(true));
        }
    };
    // Register component.
    if (window.customElements)
        window.customElements.define('component-a', COMPONENTS.ComponentA);
})(window, (window.__COMPONENTS__ = window.__COMPONENTS__ || {}));
