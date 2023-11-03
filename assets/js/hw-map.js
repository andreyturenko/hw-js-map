// // // Tasks: JS.Map

// // Нехай даний масив масивів ([[1,"first"], [3,"third"]]). Створіть колекцію Map з цього масиву
// // (по суті, вона співставляє значенням чисел їх порядковий числівник).
const collection = new Map([
  [1, "first"],
  [3, "third"],
]);
console.log("collection :>> ", collection);

// // Отримайте кількість елементів.
console.log("collection.size :>> ", collection.size);

// // Додати та видалити елемент.
collection.set(2, "second");
collection.delete(2);

// // Здійсніть пошук за ключом.
console.log("collection.get(1) :>> ", collection.get(1));

// // Перевірити, чи є в мапі числівник для числа 2.
console.log(collection.has(2));

// // Отримайте список ключів та значень окремо.
console.log([...collection.keys()]);
console.log([...collection.values()]);

// // // *Написати функцію, яка перероблятиме текст з числами
// // "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents."
// //  на текст з порядковими числівниками за допомогою мапи вище:
// // "This year I will enter the first grade. I have two brothers. I am the third child of my parents."

function replaceNumWithText(text, numberMap) {
  return text
    .split(" ")
    .map((w) => numberMap.get(+w) || w)
    .join(" ");
}

const numberMap = new Map([
  [1, "first"],
  [2, "second"],
  [3, "third"],
]);

const inputText =
  "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.";

const resultText = replaceNumWithText(inputText, numberMap);

console.log(resultText);
