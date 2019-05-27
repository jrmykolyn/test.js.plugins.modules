"use strict";
((window, COMPONENTS) => {
    // Define template.
    const template = document.createElement('template');
    template.innerHTML = `
    <button ref="btn">
      <slot name="content">Component A</slot>
    </button>
  `;
    // Define component class.
    COMPONENTS.ComponentA = class ComponentA extends HTMLElement {
        static get observedAttributes() {
            return ['outbound-event'];
        }
        constructor() {
            super();
            this.root = this.attachShadow({ mode: 'open' });
            this.root.appendChild(template.content.cloneNode(true));
            this.refs = this.getRefs();
            // Bind.
            this.fetch = this.fetch.bind(this);
        }
        // Lifecycle.
        connectedCallback() {
            this.refs.btn.addEventListener('click', this.fetch);
        }
        disconnectedCallback() {
            this.refs.btn.removeEventListener('click', this.fetch);
        }
        // API.
        getRefs() {
            return [...this.root.querySelectorAll('[ref]') || []]
                .reduce((acc, node) => {
                return Object.assign({}, acc, { [node.getAttribute('ref')]: node });
            }, {});
        }
        fetch() {
            const e = new Event(this.getAttribute('outbound-event') || 'NAMESPACE:DEFAULT', {
                "bubbles": true,
                "composed": true,
            });
            this.refs.btn.dispatchEvent(e);
        }
    };
    // Register component.
    if (window.customElements)
        window.customElements.define('component-a', COMPONENTS.ComponentA);
})(window, (window.__COMPONENTS__ = window.__COMPONENTS__ || {}));
