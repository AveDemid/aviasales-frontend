import { css } from "styled-components";

import OpenSans_Light from "./OpenSans-Light.ttf";
import OpenSans_LightItalic from "./OpenSans-LightItalic.ttf";
import OpenSans_Regular from "./OpenSans-Regular.ttf";
import OpenSans_Italic from "./OpenSans-Italic.ttf";
import OpenSans_SemiBold from "./OpenSans-SemiBold.ttf";
import OpenSans_SemiBoldItalic from "./OpenSans-SemiBoldItalic.ttf";
import OpenSans_Bold from "./OpenSans-Bold.ttf";
import OpenSans_BoldItalic from "./OpenSans-BoldItalic.ttf";
import OpenSans_ExtraBold from "./OpenSans-ExtraBold.ttf";
import OpenSans_ExtraBoldItalic from "./OpenSans-ExtraBoldItalic.ttf";

export const font_face_open_sans = css`
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 300;
    src: url(${OpenSans_Light}) format("truetype");
  }

  @font-face {
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 300;
    src: url(${OpenSans_LightItalic}) format("truetype");
  }

  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    src: url(${OpenSans_Regular}) format("truetype");
  }

  @font-face {
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 400;
    src: url(${OpenSans_Italic}) format("truetype");
  }
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    src: url(${OpenSans_SemiBold}) format("truetype");
  }

  @font-face {
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 600;
    src: url(${OpenSans_SemiBoldItalic}) format("truetype");
  }

  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    src: url(${OpenSans_Bold}) format("truetype");
  }

  @font-face {
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 700;
    src: url(${OpenSans_BoldItalic}) format("truetype");
  }

  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 800;
    src: url(${OpenSans_ExtraBold}) format("truetype");
  }

  @font-face {
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 800;
    src: url(${OpenSans_ExtraBoldItalic}) format("truetype");
  }
`;
