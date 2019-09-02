import { Categories } from "./categories";
import { Dish } from "./dish";


export const Dishes: Dish[] =
   [
      {
         id: 101,
         category: Categories.Soup,
         name: "Shchi",
         ingrideinets: ["fermented cabbage", "pork", "potato"],
         pict: "../img/gallery/Shchi.jpg",
         dairyFree: true,
         calories: 477
      },
      {
         id: 102,
         category: Categories.Soup,
         name: "Borscht",
         ingrideinets: ["beef", "cabbage", "potato","beetroot","carrot","tomato paste"],
         pict: "http://www.site.com/picts/pict1.png",
         dairyFree: true,
         calories: 122
      },
      {
         id: 103,
         category: Categories.Soup,
         name: "Solyanka",
         ingrideinets: ["beef", "ham", "sausages", "onion", "pickled cucumbers", "olives"],
         pict: "http://www.site.com/picts/pict1.png",
         dairyFree: true,
         calories: 233
      },
      {
         id: 104,
         category: Categories.Soup,
         name: "Okroshka",
         ingrideinets: ["sausages", "cucumbers,", "potato", "dill", "sour cream"],
         pict: "http://www.site.com/picts/pict1.png",
         dairyFree: false,
         calories: 417
      },
      {
         id: 105,
         category: Categories.Soup,
         name: "Rassolnik",
         ingrideinets: ["beef", "pickled cucumbers", "pearl barley"],
         pict: "http://www.site.com/picts/pict1.png",
         dairyFree: true,
         calories: 137
      },
      {
      id: 106,
      category: Categories.Soup,
      name: "borshch",
      ingrideinets: ["peas", "meat", "potato"],
      pict: "http://www.site.com/picts/pict1.png",
      dairyFree: true,
      calories: 163
      },
      {
         id: 107,
         category: Categories.Soup,
         name: "Sorrel soup",
         ingrideinets: ["beef", "sorrel leaves", "potato", "boiled eggs", "sour cream"],
         pict: "http://www.site.com/picts/pict1.png",
         dairyFree: false,
         calories: 107
      },
      {
         id: 108,
         category: Categories.Soup,
         name: "Ukha",
         ingrideinets: ["fish", "carrot", "potato", "onion"],
         pict: "http://www.site.com/picts/pict1.png",
         dairyFree: true,
         calories: 204
      },
      {
         id: 109,
         category: Categories.Soup,
         name: "Frikadeller soup",
         ingrideinets: ["minced meat", "potato", "vermicelli", "onion"],
         pict: "http://www.site.com/picts/pict1.png",
         dairyFree: true,
         calories: 158
      },
      {
         id: 110,
         category: Categories.Soup,
         name: "Kharcho",
         ingrideinets: ["beef", "rice", "cherry plum", "chopped walnuts"],
         pict: "http://www.site.com/picts/pict1.png",
         dairyFree: true,
         calories: 148
      },
      {
         id: 111,
         category: Categories.Soup,
         name: "Pea soup",
         ingrideinets: [ "smoked ham ribs", "peas", "potato"],
         pict: "http://www.site.com/picts/pict1.png",
         dairyFree: true,
         calories: 641
      },
      {
         id: 201,
         category: Categories.Main,
         name: "Beef Stroganoff",
         ingrideinets: ["beef", "sour cream", "onion"],
         pict: "http://www.site.com/picts/pict2.png",
         dairyFree: false,
         calories: 147
      },
      {
         id: 202,
         category: Categories.Main,
         name: "Chicken Kiev",
         ingrideinets: ["chicken", "butter", "dill"],
         pict: "http://www.site.com/picts/pict2.png",
         dairyFree: false,
         calories: 290
      },
      {
         id: 203,
         category: Categories.Main,
         name: "Pozharsky cutlet",
         ingrideinets: ["chicken", "butter"],
         pict: "http://www.site.com/picts/pict2.png",
         dairyFree: false,
         calories: 190
      },
      {
         id: 204,
         category: Categories.Main,
         name: "Veal Orloff",
         ingrideinets: ["veal", "mushrooms", "onion", "cheese", "mornay sauce"],
         pict: "http://www.site.com/picts/pict2.png",
         dairyFree: false,
         calories: 246
      },
      {
         id: 205,
         category: Categories.Main,
         name: "cabbage rolls",
         ingrideinets: ["beef", "cabbage", "rice", "tomato paste"],
         pict: "http://www.site.com/picts/pict2.png",
         dairyFree: true,
         calories: 108
      },
      {
         id: 206,
         category: Categories.Main,
         name: "Aspic",
         ingrideinets: ["pork", "beef", "chicken", "meat broth"],
         pict: "http://www.site.com/picts/pict2.png",
         dairyFree: true,
         calories: 350
      },
      {
         id: 207,
         category: Categories.Main,
         name: "Cutlet",
         ingrideinets: ["minced pork", "minced beef", "onion"],
         pict: "http://www.site.com/picts/pict2.png",
         dairyFree: true,
         calories: 222
      },
      {
         id: 208,
         category: Categories.Main,
         name: "Chicken tabaka",
         ingrideinets: ["сhicken"],
         pict: "http://www.site.com/picts/pict2.png",
         dairyFree: true,
         calories: 233
      },
      {
         id: 209,
         category: Categories.Main,
         name: "Greek-style fish",
         ingrideinets: ["fish fillet", " carrots", "onion", "tomato paste"],
         pict: "http://www.site.com/picts/pict2.png",
         dairyFree: true,
         calories: 128
      },
      {
         id: 210,
         category: Categories.Main,
         name: "Veal Milanese",
         ingrideinets: ["veal", "eggs"],
         pict: "http://www.site.com/picts/pict2.png",
         dairyFree: true,
         calories: 251
      },
      {
         id: 211,
         category: Categories.Main,
         name: "Gefilte fish",
         ingrideinets: ["pike", "eggs", "onion"],
         pict: "http://www.site.com/picts/pict2.png",
         dairyFree: true,
         calories: 113
      },
      {
         id: 301,
         category: Categories.Garnish,
         name: "Mashed potato",
         ingrideinets: ["potato", "butter", "milk"],
         pict: "http://www.site.com/picts/pict3.png",
         dairyFree: false,
         calories: 88
      },
      {
         id: 302,
         category: Categories.Garnish,
         name: "Rice",
         ingrideinets: ["rice"],
         pict: "http://www.site.com/picts/pict3.png",
         dairyFree: true,
         calories: 130
      },
      {
         id: 303,
         category: Categories.Garnish,
         name: "Buckwheat porridge",
         ingrideinets: ["buckwheat"],
         pict: "http://www.site.com/picts/pict3.png",
         dairyFree: true,
         calories: 132
      },
      {
         id: 304,
         category: Categories.Garnish,
         name: "Macaroni",
         ingrideinets: ["pasta"],
         pict: "http://www.site.com/picts/pict3.png",
         dairyFree: true,
         calories: 371
      },
      {
         id: 305,
         category: Categories.Garnish,
         name: "Braised cabbage",
         ingrideinets: ["cabbage", "carrot", "onion"],
         pict: "http://www.site.com/picts/pict3.png",
         dairyFree: true,
         calories: 47
      },
      {
         id: 306,
         category: Categories.Garnish,
         name: "Couscous",
         ingrideinets: ["durum wheat semolina", "carrot", "capsicum", "zucchini"],
         pict: "http://www.site.com/picts/pict3.png",
         dairyFree: true,
         calories: 112
      },
      {
         id: 401,
         category: Categories.Salad,
         name: "Vinegret",
         ingrideinets: ["potato", "carrot", "beetroot", "fermented cabbage", "pickled cucumber", "onion", "peas"],
         pict: "http://www.site.com/picts/pict3.png",
         dairyFree: true,
         calories: 131
      },
      {
         id: 402,
         category: Categories.Salad,
         name: "Olivier salad",
         ingrideinets: ["potato", "meat", "pickled cucumber", "onion", "peas", "eggs", "mayonnaise"],
         pict: "http://www.site.com/picts/pict3.png",
         dairyFree: true,
         calories: 162
      },
      {
         id: 403,
         category: Categories.Salad,
         name: "Mimosa salad",
         ingrideinets: ["canned fish", "potato", "carrot", "onion", "eggs", "mayonnaise"],
         pict: "http://www.site.com/picts/pict3.png",
         dairyFree: true,
         calories: 296
      },
      {
         id: 404,
         category: Categories.Salad,
         name: "Dressed herring",
         ingrideinets: ["pickled herring", "potato", "carrot", "beetroot", "carrot", "onion", "mayonnaise"],
         pict: "http://www.site.com/picts/pict3.png",
         dairyFree: true,
         calories: 209
      },
      {
         id: 405,
         category: Categories.Salad,
         name: "Caesar salad",
         ingrideinets: ["romaine lettuce", "croutons", "parmesan cheese", "chicken", "tomato", "dijon mustard"],
         pict: "http://www.site.com/picts/pict3.png",
         dairyFree: true,
         calories: 221
      },
      {
         id: 406,
         category: Categories.Salad,
         name: "Greek salad",
         ingrideinets: ["tomato", "cucumber", "feta",  "onion", "olives"],
         pict: "http://www.site.com/picts/pict3.png",
         dairyFree: true,
         calories: 87
      },
      {
         id: 501,
         category: Categories.Dessert,
         name: "Blini",
         ingrideinets: ["milk", "flour", "sugar"],
         pict: "http://www.site.com/picts/pict3.png",
         dairyFree: false,
         calories: 227
      },
      {
         id: 502,
         category: Categories.Dessert,
         name: "Oladyi",
         ingrideinets: ["kefir", "flour", "sugar"],
         pict: "http://www.site.com/picts/pict3.png",
         dairyFree: false,
         calories: 206
      },
      {
         id: 503,
         category: Categories.Dessert,
         name: "Pirozhki",
         ingrideinets: ["milk", "flour", "sugar", "seasonal fruits"],
         pict: "http://www.site.com/picts/pict3.png",
         dairyFree: false,
         calories: 225
      },
      {
         id: 504,
         category: Categories.Dessert,
         name: "Syrniki",
         ingrideinets: ["farmer cheese ", "flour", "eggs", "sugar"],
         pict: "http://www.site.com/picts/pict3.png",
         dairyFree: false,
         calories: 274
      },
      {
         id: 505,
         category: Categories.Dessert,
         name: "Vatrushka",
         ingrideinets: ["milk", "flour", "sugar", "cottage cheese", "raisins"],
         pict: "http://www.site.com/picts/pict3.png",
         dairyFree: false,
         calories: 331
      },
      {
         id: 506,
         category: Categories.Dessert,
         name: "Apple pie",
         ingrideinets: ["apples", "flour", "sugar", "eggs"],
         pict: "http://www.site.com/picts/pict3.png",
         dairyFree: true,
         calories: 237
      }
   ];
