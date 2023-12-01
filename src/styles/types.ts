import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      background: string;
      backgroundHeader: string;
      backgroundNavigation: string;
      containerBackground: string;
      mainFont: string;
      secondaryFont: string;
      navigationFont: string;
    };
    typography: {
      mainFontFamily: string;
      propetySize: string;
      titleSize: string;
    };
  }
}
