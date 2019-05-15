import {
    LitElement, html, customElement, property
} from 'lit-element';

import "./components/my-button";

@customElement('my-app')
export class MyApp extends LitElement {
    // Declare and initialize properties
    @property({ type: Number }) count = 5;

    render() {
        return html`
        <my-button count=10 ></my-button>
    `;
    }
}
