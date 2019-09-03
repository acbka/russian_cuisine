import { Categories } from "./categories";
import { Dish } from "./dish";


export const Dishes: Dish[] =
   [
      {
         id: 101,
         category: Categories.Soup,
         name: "Shchi",
         ingredients: ["fermented cabbage", "pork", "potato"],
         pict: "./assets/img/gallery/shchi.jpg",
         dairyFree: true,
         calories: 477
      },
      {
         id: 102,
         category: Categories.Soup,
         name: "Borscht",
         ingredients: ["beef", "cabbage", "potato","beetroot","carrot","tomato paste"],
         pict: "./assets/img/gallery/borscht.jpg",
         dairyFree: true,
         calories: 122
      },
      {
         id: 103,
         category: Categories.Soup,
         name: "Solyanka",
         ingredients: ["beef", "ham", "sausages", "onion", "pickled cucumbers", "olives"],
         pict: "./assets/img/gallery/solyanka.jpg",
         dairyFree: true,
         calories: 233
      },
      {
         id: 104,
         category: Categories.Soup,
         name: "Okroshka",
         ingredients: ["sausages", "cucumbers,", "potato", "dill", "sour cream"],
         pict: "./assets/img/gallery/okroshka.jpg",
         dairyFree: false,
         calories: 417
      },
      {
         id: 105,
         category: Categories.Soup,
         name: "Rassolnik",
         ingredients: ["beef", "pickled cucumbers", "pearl barley"],
         pict: "./assets/img/gallery/rassolnik.jpg",
         dairyFree: true,
         calories: 137
      },
      {
         id: 106,
         category: Categories.Soup,
         name: "Sorrel Soup",
         ingredients: ["beef", "sorrel leaves", "potato", "boiled eggs", "sour cream"],
         pict: "./assets/img/gallery/sorrelSoup.jpg",
         dairyFree: false,
         calories: 107
      },
      {
         id: 107,
         category: Categories.Soup,
         name: "Ukha",
         ingredients: ["fish", "carrot", "potato", "onion"],
         pict: "./assets/img/gallery/ukha.jpg",
         dairyFree: true,
         calories: 204
      },
      {
         id: 108,
         category: Categories.Soup,
         name: "Frikadeller Soup",
         ingredients: ["minced meat", "potato", "vermicelli", "onion"],
         pict: "./assets/img/gallery/frikadellerSoup.jpg",
         dairyFree: true,
         calories: 158
      },
      {
         id: 109,
         category: Categories.Soup,
         name: "Kharcho",
         ingredients: ["beef", "rice", "cherry plum", "chopped walnuts"],
         pict: "./assets/img/gallery/kharcho.jpg",
         dairyFree: true,
         calories: 148
      },
      {
         id: 110,
         category: Categories.Soup,
         name: "Pea Soup",
         ingredients: [ "smoked ham ribs", "peas", "potato"],
         pict: "./assets/img/gallery/peaSoup.jpg",
         dairyFree: true,
         calories: 641
      },
      {
         id: 201,
         category: Categories.Main,
         name: "Beef Stroganoff",
         ingredients: ["beef", "sour cream", "onion"],
         pict: "./assets/img/gallery/beefStroganoff.jpg",
         dairyFree: false,
         calories: 147
      },
      {
         id: 202,
         category: Categories.Main,
         name: "Chicken Kiev",
         ingredients: ["chicken", "butter", "dill"],
         pict: "./assets/img/gallery/chickenKiev.jpg",
         dairyFree: false,
         calories: 290
      },
      {
         id: 203,
         category: Categories.Main,
         name: "Pozharsky Cutlet",
         ingredients: ["chicken", "butter"],
         pict: "./assets/img/gallery/pozharskyCutlet.jpg",
         dairyFree: false,
         calories: 190
      },
      {
         id: 204,
         category: Categories.Main,
         name: "Veal Orloff",
         ingredients: ["veal", "mushrooms", "onion", "cheese", "mornay sauce"],
         pict: "./assets/img/gallery/vealOrloff.jpg",
         dairyFree: false,
         calories: 246
      },
      {
         id: 205,
         category: Categories.Main,
         name: "Cabbage Rolls",
         ingredients: ["beef", "cabbage", "rice", "tomato paste"],
         pict: "./assets/img/gallery/cabbageRolls.jpg",
         dairyFree: true,
         calories: 108
      },
      {
         id: 206,
         category: Categories.Main,
         name: "Aspic",
         ingredients: ["pork", "beef", "chicken", "meat broth"],
         pict: "./assets/img/gallery/aspic.jpg",
         dairyFree: true,
         calories: 350
      },
      {
         id: 207,
         category: Categories.Main,
         name: "Cutlet",
         ingredients: ["minced pork", "minced beef", "onion"],
         pict: "./assets/img/gallery/cutlet.jpg",
         dairyFree: true,
         calories: 222
      },
      {
         id: 208,
         category: Categories.Main,
         name: "Chicken Tabaka",
         ingredients: ["сhicken"],
         pict: "./assets/img/gallery/chickenTabaka.jpg",
         dairyFree: true,
         calories: 233
      },
      {
         id: 209,
         category: Categories.Main,
         name: "Greek-Style Fish",
         ingredients: ["fish fillet", " carrots", "onion", "tomato paste"],
         pict: "./assets/img/gallery/greekStyleFish.jpg",
         dairyFree: true,
         calories: 128
      },
      {
         id: 210,
         category: Categories.Main,
         name: "Veal Milanese",
         ingredients: ["veal", "eggs"],
         pict: "./assets/img/gallery/vealMilanese.jpg",
         dairyFree: true,
         calories: 251
      },
      {
         id: 211,
         category: Categories.Main,
         name: "Gefilte Fish",
         ingredients: ["pike", "eggs", "onion"],
         pict: "./assets/img/gallery/gefilteFish.jpg",
         dairyFree: true,
         calories: 113
      },
      {
         id: 301,
         category: Categories.Garnish,
         name: "Mashed Potato",
         ingredients: ["potato", "butter", "milk"],
         pict: "./assets/img/gallery/mashedPotato.jpg",
         dairyFree: false,
         calories: 88
      },
      {
         id: 302,
         category: Categories.Garnish,
         name: "Rice",
         ingredients: ["rice"],
         pict: "./assets/img/gallery/rice.jpg",
         dairyFree: true,
         calories: 130
      },
      {
         id: 303,
         category: Categories.Garnish,
         name: "Buckwheat Porridge",
         ingredients: ["buckwheat"],
         pict: "./assets/img/gallery/buckwheatPorridge.jpg",
         dairyFree: true,
         calories: 132
      },
      {
         id: 304,
         category: Categories.Garnish,
         name: "Macaroni",
         ingredients: ["pasta"],
         pict: "./assets/img/gallery/macaroni.jpg",
         dairyFree: true,
         calories: 371
      },
      {
         id: 305,
         category: Categories.Garnish,
         name: "Braised Cabbage",
         ingredients: ["cabbage", "carrot", "onion"],
         pict: "./assets/img/gallery/braisedCabbage.jpg",
         dairyFree: true,
         calories: 47
      },
      {
         id: 306,
         category: Categories.Garnish,
         name: "Couscous",
         ingredients: ["durum wheat semolina", "carrot", "capsicum", "zucchini"],
         pict: "./assets/img/gallery/couscous.jpg",
         dairyFree: true,
         calories: 112
      },
      {
         id: 401,
         category: Categories.Salad,
         name: "Vinegret",
         ingredients: ["potato", "carrot", "beetroot", "fermented cabbage", "pickled cucumber", "onion", "peas"],
         pict: "./assets/img/gallery/vinegret.jpg",
         dairyFree: true,
         calories: 131
      },
      {
         id: 402,
         category: Categories.Salad,
         name: "Olivier Salad",
         ingredients: ["potato", "meat", "pickled cucumber", "onion", "peas", "eggs", "mayonnaise"],
         pict: "./assets/img/gallery/olivierSalad.jpg",
         dairyFree: true,
         calories: 162
      },
      {
         id: 403,
         category: Categories.Salad,
         name: "Mimosa Salad",
         ingredients: ["canned fish", "potato", "carrot", "onion", "eggs", "mayonnaise"],
         pict: "./assets/img/gallery/mimosaSalad.jpg",
         dairyFree: true,
         calories: 296
      },
      {
         id: 404,
         category: Categories.Salad,
         name: "Dressed Herring",
         ingredients: ["pickled herring", "potato", "carrot", "beetroot", "carrot", "onion", "mayonnaise"],
         pict: "./assets/img/gallery/dressedHerring.jpg",
         dairyFree: true,
         calories: 209
      },
      {
         id: 405,
         category: Categories.Salad,
         name: "Caesar Salad",
         ingredients: ["romaine lettuce", "croutons", "parmesan cheese", "chicken", "tomato", "dijon mustard"],
         pict: "./assets/img/gallery/caesarSalad.jpg",
         dairyFree: true,
         calories: 221
      },
      {
         id: 406,
         category: Categories.Salad,
         name: "Greek Salad",
         ingredients: ["tomato", "cucumber", "feta",  "onion", "olives"],
         pict: "./assets/img/gallery/greekSalad.jpg",
         dairyFree: true,
         calories: 87
      },
      {
         id: 501,
         category: Categories.Dessert,
         name: "Blini",
         ingredients: ["milk", "flour", "sugar"],
         pict: "./assets/img/gallery/blini.jpg",
         dairyFree: false,
         calories: 227
      },
      {
         id: 502,
         category: Categories.Dessert,
         name: "Oladyi",
         ingredients: ["kefir", "flour", "sugar"],
         pict: "./assets/img/gallery/oladyi.jpg",
         dairyFree: false,
         calories: 206
      },
      {
         id: 503,
         category: Categories.Dessert,
         name: "Pirozhki",
         ingredients: ["milk", "flour", "sugar", "seasonal fruits"],
         pict: "./assets/img/gallery/pirozhki.jpg",
         dairyFree: false,
         calories: 225
      },
      {
         id: 504,
         category: Categories.Dessert,
         name: "Syrniki",
         ingredients: ["farmer cheese ", "flour", "eggs", "sugar"],
         pict: "./assets/img/gallery/syrniki.jpg",
         dairyFree: false,
         calories: 274
      },
      {
         id: 505,
         category: Categories.Dessert,
         name: "Vatrushka",
         ingredients: ["milk", "flour", "sugar", "cottage cheese", "raisins"],
         pict: "./assets/img/gallery/vatrushka.jpg",
         dairyFree: false,
         calories: 331
      },
      {
         id: 506,
         category: Categories.Dessert,
         name: "Apple Pie",
         ingredients: ["apples", "flour", "sugar", "eggs"],
         pict: "./assets/img/gallery/applePie.jpg",
         dairyFree: true,
         calories: 237
      }
   ];
