import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = 'My card';
    this.link = '#';
    this.image = null;
    this.description = 'text';
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }

      div {
        padding: 8px;
        width: 300px;
        border-radius: 8px;
        text-align: center;
        background-color: white;
        border: 2px solid black;
      }

      h1 {
        font-size:24px;
      }

      img {
        margin: auto;
        display: flex;
        height: 150px;
        width: 200px;
      }

      button {
        margin: auto;
        display: flex;
        background-color: blue;
      }

      a:focus,
      a:hover {
        color: yellow;
      }

      a {
        text-decoration: none;
        color: white;
      }
    `;
  }

  render() {
    return html`<div>
      <img src=${this.image}>
      <h1>${this.title}</h1>
      <p>${this.description}</p>
      <button><a href=${this.link}>Details</a></button>
      </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: Image},
      link: {type: String},
      description: {type: String}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
