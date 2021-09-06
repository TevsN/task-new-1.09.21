"use strict";
// 1
function sumTo(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }
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
  gender: true,
  contact: {
    number: "0674938645",
    adres: "atolhalfu",
  },
  university: uneversitet,
};
function infoStudent() {
  console.log(student);
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
  constructor(author, name, publishing, edition, format, electronicNumber) {
    super(author, name, publishing, edition);
    this.format = format;
    this.electronicNumber = electronicNumber;
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
    if (i % 3 === 0 && i % 5 === 0) {
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
const arr = [1,2,3,4,5,6,7,8,9,0,1,2,54,732,1,0,2,3,12,412,24,12,412,412,4,1,234]
// const arr = new Array(25).fill().map((_, i) => Math.random());

function findElement() {
  arr.forEach(function (item, index) {
    if (index % 2 === 0) {
      console.log(item);
    }
  });
}

function evenInfo() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}

function findNullindex() {
  arr.forEach(function (item, index) {
    if (item === 0) {
      console.log(index);
    }
  });
}

function infoNullElement() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      console.log(arr[i]);
    }
  }
}
