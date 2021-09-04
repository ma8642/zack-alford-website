import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          bio: "Bio",
          "biography-text":
            "Born in Manhattan, NYC, Zachary Alford began his musical journey being influenced by musician friends of his older siblings.  \"My neighborhood was full of drummers.\"  Peter \"Phoenix\" Rivera, Sterling Campbell, Ben Perowsky and Poogie Bell (Zack's 1st instructor) all lived within a 10 block radius. At age 15 Zack met Charley Drayton at the 7th Avenue South night club and that would galvanize his commitment and direction as a drummer. \nPrimarily self taught, Zachary played in night clubs throughout his high school years, interacting with scores of New York musicians at the Peppermint Lounge, Danceteria, The Ritz, CBGB's, A7, The Pyramid Club, and the infamous Music Building on 38th st and 8th ave, rubbing shoulders with such future stars as Madonna, Vernon Ried and Jean Michel Basquiat.  This provided him with a rich and diverse atmosphere for playing different styles and gaining professional experience. He also managed to find the time to study with master drummer Kenwood Denard and Tommy Campbell. \nIn 1987 he went to Switzerland with Melvin Gibbs and Vernon Ried and again in 1988 with Kelvynator to play on jazz/funk festival tours. 1989 saw him matched up with the B52's and in the '90s such names as Bruce Springsteen('92-'94) and David Bowie ('95-'98). Zachary 's recording credits include other luminaries such as Billy Joel, Suzanna Hoffs, The Manic Street Preachers, Jeffery Gains, David Torn, Patti Scialfa and international superstars Zucchero Fornaciari, Khaled and Tomoyasu Hotei.",
        },
      },
    },
  });

export default i18n;
