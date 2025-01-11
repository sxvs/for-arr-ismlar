// let names = [];
// for (let i = 0; i < 5; i++) {
//     let name = prompt(`Введите имя #${i + 1}:`);
//     names.push(name);
// }
// let letter = prompt("Введите букву для поиска имен:");

// let filteredNames = names.filter(name => name.toLowerCase().startsWith(letter.toLowerCase()));

// if (filteredNames.length > 0) {
//     alert(`Имена, начинающиеся на "${letter}":\n${filteredNames.join(', ')}`);
// } else {
//     alert(`Нет имен, начинающихся на "${letter}".`);
// }

let names = [];

for (let i = 0; i < 5; i++) {
  names.push(prompt("Ism kiriting:"));
}

console.log(names);

let harf = prompt("Lyuboy bitta harf kirg'izi:");

console.log(harf);

let oxiri = names.filter(
  (name) => name[0].toLowerCase() === harf.toLowerCase()
);

if (oxiri.length > 0) {
  alert("Shu harfli ismlar " + harf + ": " + oxiri.join(", "));
} else {
  alert("Afsuski bu harfga ism yoq.");
}
