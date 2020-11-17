import { css } from "styled-components";

export const fontFaces = css`
  @font-face {
    font-family: "Goldman Bold";
    src: url("/fonts/Goldman/Goldman-Bold.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Source Sans Pro Regular";
    src: url("/fonts/SourceSansPro/SourceSansPro-Regular.ttf")
      format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Source Sans Pro Light";
    src: url("/fonts/SourceSansPro/SourceSansPro-Light.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
    font-display: fallback;
  }
`;
