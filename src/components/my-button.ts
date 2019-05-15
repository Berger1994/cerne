import {
    LitElement, html, customElement, property
} from 'lit-element';

@customElement('my-button')
export class MyButton extends LitElement {
    // Declare and initialize properties
    @property({ type: Number }) count = 5;

    render() {
        return html`
        <button @click=${() => this.count++}>${this.count}</button>
    `;
    }
}
