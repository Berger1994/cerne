var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import "./components/my-button";
let MyApp = class MyApp extends LitElement {
    constructor() {
        super(...arguments);
        // Declare and initialize properties
        this.count = 5;
    }
    render() {
        return html `
        <my-button count=10 ></my-button>
    `;
    }
};
__decorate([
    property({ type: Number })
], MyApp.prototype, "count", void 0);
MyApp = __decorate([
    customElement('my-app')
], MyApp);
export { MyApp };
//# sourceMappingURL=my-app.js.map