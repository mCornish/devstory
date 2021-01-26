import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
:root {
    --font-primary: Merriweather, Georgia, serif;
    --font-secondary: Merriweather Sans, Helvetica, Arial, sans-serif;
  }

  html {
    font-family: var(--font-primary);
    color: var(--black);
    font-size: 18px;
    line-height: 1.8;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-secondary);
    color: var(--dark-gray);
    font-weight: bold;
    line-height: 1.3;
    margin: 1.5em 0 .5em;
    padding: 0;

    @include mobile {
        line-height: 1.4;
    }
  }

  h1 {
    font-size: 2.5rem;
    a {
      color: inherit;
    }
    margin-top: 2em;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 1em;
  }

  h4 {
    font-size: 1rem;
    color: var(--gray);
  }

  p, li, label, input, button {
    font-size: 1rem;
  }

  p, li {
    color: var(--color-text-dark);
  }

  ol, ul {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  a {
    color: var(--color-link);
    text-decoration: none;
    cursor: pointer;
    transition: color .2s;
  }
  a:hover, 
  a:active,
  a:visited:hover,
  a:visited:active {
      color: var(--color-brand-1);
      border-bottom-color: var(--color-brand-1);
  }
  a:visited {
    color: var(--color-text-dark);
  }
  p a {
      border-bottom: 1px dotted var(--color-link);
  }

  label {
    font-weight: bold;
  }

  strong {
    font-family: Merriweather;
    font-weight: bold;
  }

  blockquote {
    margin: 1em 0;
    padding: 1em;
    border-left: .4em solid var(--color-brand-1);
    font-size: 1.2rem;
    font-family: Merriweather Sans;
    font-weight: lighter;
    color: rgba(0,0,0,.6);
  }

  .center {
    text-align: center;
  }
`;

export default Typography;
