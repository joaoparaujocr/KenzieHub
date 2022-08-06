import { createGlobalStyle } from "styled-components";
import eot from "./../fonts/inter-v12-latin-regular.eot";
import woff2 from "./../fonts/inter-v12-latin-regular.woff2";
import woff from "./../fonts/inter-v12-latin-regular.woff"

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url(${eot}); /* IE9 Compat Modes */
    src: url('../fonts/inter-v12-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url(${woff2}) format('woff2'), /* Super Modern Browsers */
        url(${woff}) format('woff') /* Modern Browsers */
  }

  :root {
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