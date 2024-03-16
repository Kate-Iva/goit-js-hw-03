'use strict';
function filterArray(numbers, value) {
    const filterOfNums = [];
  
    for (const number of numbers) {
      if (number > value) {
        filterOfNums.push(number);
      }
    }
  
    return filterOfNums;
  }
  
  
  console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
  console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
  console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
  console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
  console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

  //task
  /* const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  const ownerName = apartment.owner.name;
  const ownerPhone = apartment.owner.phone;
  const ownerEmail = apartment.owner.email;
  const numberOfTags = apartment.tags.length;
  const firstTag = apartment.tags[0];
  const lastTag = apartment.tags[2];

  console.log(ownerName);
  console.log(ownerPhone);
  console.log(ownerEmail);
  console.log(numberOfTags);
  console.log(firstTag);
  console.log(lastTag); */

  //task
  /* const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  const aptRating = apartment["rating"];
  const aptDescr = apartment["descr"];
  const aptPrice = apartment["price"];
  const aptTags = apartment["tags"];
  
  console.log(aptRating);
  console.log(aptDescr);
  console.log(aptPrice);
  console.log(aptTags); */

  //task
//   const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };

//   apartment.price = 5000;
//   apartment.rating = 4.7;
//   apartment.name = "Henry Sibola";
//   apartment.tags.push("trusted");

//   console.log(apartment.price);
//   console.log(apartment.rating);
//   console.log(apartment.name);
//   console.log(apartment.tags); 

  //task
//   const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };

//   apartment.area = 60;
//   apartment.rooms = 3;
//   apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
//   };
  
//   console.log(apartment.area);
//   console.log(apartment.rooms);
//   console.log(apartment.location.country);
//   console.log(apartment.location.city); 

  //task
//   const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//     name,
//     price,
//     image,
//     tags,
// };

//task
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment){
//   keys.push(key);
//   values.push(apartment[key]);
//   console.log(key); // Ключ
//   console.log(apartment[key]); // Значення властивості
// }
 //example
// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys){
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

///task
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys){
//   values.push(apartment[key])
//      console.log(key); // Ключ
//      console.log(apartment[key]); // Значення властивості
//    }

///task
// function countProps(object) {
//   let propCount = 0;
//   propCount = Object.keys(object);

//   return propCount.length;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

///task
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

///task
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   for (const salari of values) {
//    totalSalary+=salari
//   } {
//     return totalSalary;
//   }
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

///task
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for( const color of colors){
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb)
// }

// console.log(hexColors);
// console.log(rgbColors);

///task

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for(let product of products)
// if(product.name===productName){
//   return product.price;
// } else {
// }
// return null;
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

///task
// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const arr = [];
//   for (const product of products) {
//     if (propName in product) {
//       arr.push(product[propName]);
//     }
//   }
//   return arr;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


///task
// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for(const product of products){
//     if(product.name === productName){
//       return product.price * product.quantity;
//     }
//       } 
//       return `Product ${productName} not found!`
//   }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

// ///task
// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions";
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };

///task
// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
    
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.getPotions());

///task
// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//    //console.log(potionName);
//      //return 
//      this.potions.push(potionName);
     
//   }
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion("Power potion"));
// console.log(atTheOldToad.getPotions());

///task
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);

//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (const potion of this.potions) {
//       totalPrice += potion.price;
//     } return totalPrice;
//   },
// };

// console.log(atTheOldToad.getTotalPrice());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.getTotalPrice());
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.getTotalPrice());

///task
// function add(...args) {
//   let sum = 0;
// for(let arg of args){
//   sum +=arg;
// }
// return sum;
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));

///task
// function addOverNum(value, ...args) {
//   let sum = 0;
//   for(let arg of args)
//     if(arg > value)
//      sum+= arg; 
// return sum;
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

///task
// function getExtremeScores(scores)  {
// const values = {best: Math.max(...scores), worst: Math.min(...scores)};
// return values;
// }

// //console.log(getExtremeScores);
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));

///task
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

///task 
const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {...defaultSettings, ...overrideSettings};
console.log(finalSettings);