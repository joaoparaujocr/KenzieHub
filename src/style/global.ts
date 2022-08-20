import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    font-family: "Inter";
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --sucess: #3FE864;
    --negative: #E83F5B;
  }

  * {
    font-family: "Inter";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inter";
    background-color: #000000;
  }

  ul { list-style-type: none; }

`

export default GlobalStyle