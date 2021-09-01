"use strict";
// 1
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

console.log(sumTo(4));

/**
 * ==========================================================
 */

// 2.1

const uneversitet = {
  chair: "science",
  faculty: "maths",
};

const student = {
  name: "Alex",
  sourname: " Biba",
  gender: "man",
  contact: {
    number: "0674938645",
    adres: "atolhalfu",
  },
  university: uneversitet,
};

function getInformation(infoStr) {
  return student;
}

/**
 * ==========================================================
 */

class Book {
  constructor(author, name, publishing, edition) {
    this.author = author;
    this.name = name;
    this.publishing = publishing;
    this.edition = edition;
  }
}
const books = new Book(
  `Генрих Гайерт`,
  `Аферисты в сетях`,
  `29.05.2001`,
  `garvard`
);

class EBook extends Book {
  constructor(author, name, publishing, edition, format, electronic_number) {
    super(author, name, publishing, edition);
    this.format = format;
    this.electronic_number = electronic_number;
  }
}
const eBooks = new EBook(
  `Генрих Гайерт`,
  `Аферисты в сетях`,
  `29.05.2001`,
  `garvard`,
  `good`,
  241
);

/**
 * =============================================================
 */

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 3 && i % 5 === 0) {
      console.log(`fizzbuzz`);
    } else if (i % 3 === 0) {
      console.log(`fizz`);
    } else if (i % 5 === 0) {
      console.log(`buzz`);
    } else {
      console.log(i);
    }
  }
}

/**
 * ==============================================================
 */

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

function number () {
    arr.forEach(function (item, index) {
        if(index % 2 === 0) {
            console.log(item)
        }
    })
}

function nummer () {
    arr.forEach
    {
        if(arr % 2 === 0) {
           return arr;
        }
}
}