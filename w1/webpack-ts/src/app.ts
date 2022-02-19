import { name } from "./variable";

// get html components by ID
const alertBtn : HTMLButtonElement  = document.querySelector('#alertBtn') as HTMLButtonElement;
const header : HTMLHeadingElement = document.querySelector('#header') as HTMLHeadingElement

alertBtn.addEventListener('click', (e) => {
    // set text in h1 element
  header.innerHTML = `Hello there, I'm ${name}`;
});
