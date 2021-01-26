import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-brand-1: rgb(57,154,234);
    --color-brand-2: rgb(135,102,219);
    --color-text-dark: #666666;
    --color-text-light: rgba(255,255,255,90);
    --color-link: rgb(0,0,0);
    --color-link-visited: rgba(0,0,0,40);

    --black: rgba(0,0,0,.9);
    --dark-gray: #333;
    --gray: #666;

    --content-width: 740px;
  }

  body {
    display: flex;
    justify-content: center;
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background-color: var(--black);
    color: white;
    box-sizing: border-box;
    padding: 1em;
    border: 0;
    border-radius: 0;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;

    &:hover {
      background-color: var(--color-brand-1);
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: blurred;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  figure {
    margin: 0;
  }

  img {
    max-width: 100%;
    border: 1px solid rgba(0,0,0,.1);
  }

  input {
    padding: 1em;
    border: 0;

    &:focus {
      outline-color: var(--color-brand-1);
      outline-style: solid;
      outline-width: 2px;
      outline-offset: -2px;
    }

    &::-webkit-input-placeholder {
      color: rgb(200, 200, 200);
    }
  }

  code {
    padding: .1em .2em;
    background-color: rgba(0,0,0,.1);
    color: var(--color-brand-2);
    font-size: .9em;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 3px;
  }

  .content {
    width: var(--content-width);
  }
`;

export default GlobalStyles;
