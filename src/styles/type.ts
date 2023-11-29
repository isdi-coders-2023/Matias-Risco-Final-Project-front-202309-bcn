import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      background: string;
      containerBackground: string;
      mainFont: string;
      secondaryFont: string;
    };
    typography: {
      mainFontFamily: string;
      propetySize: string;
      titleSize: string;
    };
  }
}
