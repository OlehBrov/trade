import { createGlobalStyle } from "styled-components";
import CirceRegular from "../font/Circe-Regular.ttf";
import CirceBold from "../font/Circe-Bold.ttf";
import CirceThin from "../font/Circe-Thin.ttf";
import CirceExtraBold from "../font/Circe-ExtraBold.ttf";
import CirceExtraLight from "../font/Circe-ExtraLight.ttf";
import CirceLight from "../font/Circe-Light.ttf";
const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Circe';
  src: url(${CirceRegular});
  font-weight: normal;
	font-style: normal;
}
@font-face {
  font-family: 'Circe';
  src: url(${CirceBold});
  font-weight: 700;
	font-style: normal;
}
@font-face {
  font-family: 'Circe';
  src: url(${CirceExtraBold});
  font-weight: 800;
	font-style: normal;
}
@font-face {
  font-family: 'Circe';
  src: url(${CirceLight});
  font-weight: 300;
	font-style: normal;
}
@font-face {
  font-family: 'Circe';
  src: url(${CirceExtraLight});
  font-weight: 200;
	font-style: normal;
}
@font-face {
  font-family: 'Circe';
  src: url(${CirceThin});
  font-weight: 100;
	font-style: normal;
}
  body {
    /* background-color: #F8F8F8; */
    background-color: #ECEDEF;
    margin: 0;
    padding: 0;
    color: #151621;
    font-family: 'Circe', cursive;
   
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    display: block;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
   /* .swiper-horizontal {
        height: 100%;
      } */
  `;

export default GlobalStyle;
