// Bagian Custom Element
console.log("Hello, web components");

class MyComponent extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<h1>Hello From My Component</h1>`
    }
}

customElements.define('my-component', MyComponent);

// Bagian Shadow DOM
const shadowRoot = document.querySelector('#root').attachShadow({mode: 'open'});
shadowRoot.innerHTML = `
<style type="text/css" media="screen">
h1{
    color: #fff;
    background-color: blue;
}
</style>
<h1>hi</h1>
`;

