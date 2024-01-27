import AuthLogo from './extensions/my-logo.png'
import { BaseHeaderLayout, HeaderLayout } from '@strapi/design-system';

const config = {
  auth: {
    logo: AuthLogo
  },
  menu: {
    logo: AuthLogo
  },
  head: {

  },
  theme:{
   
    colors:{
      primary100: '#14b8a6', //Button Select Color
      primary200: '#14b8a6', // Button Background Color
     
      primary500: '#14b8a6',
      primary600: '#042f2e', //text color
      primary700: '#042f2e',//Border color
   

      // secondary100: "red",
      // secondary200: "red",
      secondary500: "#042f2e",
      secondary600: "#042f2e",
      secondary700: "#042f2e",
  

      // alternative100: "yellow",
      // alternative200: "yellow",
      // alternative500: "yellow",
      // alternative600: "yellow",
      // alternative700: "yellow",

      neutral100: "#ccfbf1"

    }
  },
  tutorials:false,
  locales: [
    // 'ar',
    "fr",
    // 'cs',
    // 'de',
    // 'dk',
    "es",
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    "pt-BR",
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  translations: {
    ptBR: {
      "app.components.LeftMenu.navbrand.title":"Poker Prime"
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
