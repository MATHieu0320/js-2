// const pro = new Promise((resolve, reject) => {
//   // si je reject il va daans catch

//   // si je resolve il fait then
//   resolve(4);
// });
// console.log(pro);

// pro
//   .then((n) => {
//     console.log("le nombre ", n);
//     return 5;
//   })
//   .then((n) => {
//     console.log(n);
//     throw new error("Erreur hors catch");
//   })
//   .catch((erreur) => {
//     console.log("erreur", erreur);
//     return 15;
//   })
//   .then((n) => console.log(n))
//   .finally(() => console.log("s affiche que ce soit reject ou resolve"));

function wait(duration) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(duration);
    }, duration)
  );
}
//
function waitFAil(duration) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      reject(duration);
    }, duration)
  );
}
0;

wait(1000)
  .then(() => {
    console.log("attendre 1 s");
    return wait(2000);
  })
  .then(() => {
    console.log("attendre 2 s");
  })
  .catch((err) => {
    console.log(err);
  });

waitFAil(1000).then(() => console.log("cc"));

async function main() {
  const duration2 = await wait(2000);
  console.log(`duration :  ${duration2}`);
  try {
    // await waitFAil(2000);
    await wait(2000);
    console.log("c");
    await wait(5000);
    console.log("5s");
    return 2;
  } catch (e) {
    console.log(e);
  }
}
console.log(main().then((n) => console.log(n + 2)));

Promise.all([wait(300), wait(200), wait(5000)])
  .then((value) => {
    console.log(value);
  })
  .catch(console.log());
Promise.allSettled([wait(300), wait(200), waitFAil(5000)])
  .then(() => {
    console.log();
  })
  .catch(console.log());
Promise.any([wait(300), wait(200), waitFAil(5000)])
  .then(() => {
    console.error;
    // renvoie les bonne promesse
  })
  .catch(console.log());
async function fetchuser() {
  const r = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: "first" }),
  });

  //   Headers: {
  // "Accept": "application/json",
  //   }
  if (r.ok === true) {
    console.log("bon");
    return r.json();
  }
  throw new Error("Marche pas");
}

fetchuser().then((res) => console.log(res));
// .then((res) => res.json())

// function isPalindrome(word) {
//   const reversedWord = word.split("").reverse().join("");
//   console.log(reversedWord);
//   return word.toUpperCase() === reversedWord.toUpperCase();
// }
// console.log(isPalindrome("ddafazffaz"));
// let mot = "5d5z5da";
// console.log(mot.split(""));
// const students = [
//   {
//     name: "John",
//     notes: [1, 20, 18, 19, 12],
//   },
//   {
//     name: "Jane",
//     notes: [17, 18, 20, 13, 15],
//   },
//   {
//     name: "Sophie",
//     notes: [17, 12, 14, 15, 13],
//   },
//   {
//     name: "Marc",
//     notes: [2, 3, 5, 8, 9],
//   },
//   {
//     name: "Manon",
//     notes: [18, 17, 18, 19, 12],
//   },
// ];

// function Moyenne(object) {
//   let tab = [];
//   for (var i = 0; i < object.length; i++) {
//     let notes = object[i].notes;
//     let addition = notes.reduce((a, b) => a + b);
//     object[i].moyenne = addition / notes.length;
//     tab.push(object[i].moyenne);
//   }
//   console.log();
//   const classement = tab.sort((a, b) => a + b);
//   console.log(classement);
//   console.log(`Les 3 meilleurs eleves sont : ${classement.slice(2)}`);
// }

// const moyenne = (notes) => {
//   let sum = 0;
//   for (let note of notes) {
//     sum = sum + note;
//   }
//   return sum / notes.length;
// };
// class etudiant {
//   ecole = "jules ferry";
//   constructor(name, nom) {
//     this.name = name;
//     this.nom = nom;
//   }
//   setNote() {
//     return this.name + "le prenom est" + this.nom;
//   }

//   CanPass() {
//     return true;
//   }
// }
// const john = new etudiant("john", "stnaleck");
// // john.setNote([15, 14, 84, 48]);
// john.CanPass();
// john.notes = [12, 45, 4, 5];
// console.log(john.CanPass());
// const marc = new etudiant("marc", "rash");
// marc.notes = 19;
let tab = [
  "cedzfdaff",
  "efqfeffffffffffffzfzzefze",
  "seffffffffffzs",
  "feffzfsf",
];
let tab2 = [];
let ordre;
for (let i = 0; i < tab.length; i++) {
  tab2.push(tab[i].length);
}
console.log(Math.max(...tab2));
console.log(...tab2);

function play(params) {
  // for (let j = 0; j < tab.length; j++) {
  //   if (tab[j].length > tab[j + 1].length) {
  //     console.log(tab[j].length);
  //   }
  // }
}
play();
console.log(Math.round(Math.random(tab) * tab.length));
function afficheEnFonction(params) {
  const random = Math.round(Math.random(tab) * tab.length);
  document.body.innerHTML = tab[random];
}
afficheEnFonction();
function titlecase(str) {
  let returnb;
  let tab5 = [];
  let split = str.split(" ");
  for (let i = 0; i < split.length; i++) {
    let Maj = split[i].charAt(0).toUpperCase();

    returnb = split[i].replace(split[i].charAt(0), Maj);
    tab5.push(returnb);
    console.log(returnb);
  }
  console.log(tab5);

  return [...tab5];
}

// console.log(titlecase("dazfdaz  afeafe ezfze"));
// console.log(titlecase("j' habite dans la ville de paris"));

// const i1 = document.getElementById("input1");
// input1.addEventListener(
//   ("click",
//   () => {
//     console.log("d");
//   })
// );
let dates = new Date("july 4, 1975 23:15:30");
const deux = dates.setDate(dates.getMonth());
deux.toLocaleString();
console.log(deux);
// tolocaldatestring
function addDays(date, days) {
  const newDate = new Date(date.getTime());
  const datesaddition = newDate.getDate() + days;
  const mois = newDate.getMonth() + days;
  if (datesaddition > 31) {
    throw error("Impaussible que days sois superieur à 31");
  } else {
    return `Apres modification la date sera le ${datesaddition}/${mois}/24 `;
  }
}

console.log(addDays(dates, 10));

/////////////////////////////////////////////////////////////////////////
const dates2 = new Date("2024 July 20, 69 00:20:18  ");
const MONTHS = "months";
const DAYS = "days";
const YEARS = "years";
function addInterval(date, n, unit) {
  let newDate2 = new Date(date.getTime());

  if (unit === MONTHS) {
    newDate2.setMonth(newDate2.getMonth() + n);
    console.log(newDate2.getMonth() + n);
  }
  if (unit === DAYS) {
    newDate2.setDate(newDate2.getDate() + n);
    console.log(newDate2.toLocaleString());
  }
  if (unit === YEARS) {
    newDate2.setFullYear(newDate2.getFullYear() + n);
  }

  // if (unit === YEARS) {
  //   newDate2.setDate(newDate2.getMonth() + n);
  // }
  return newDate2;
}
console.log(addInterval(dates2, 5, YEARS));

localStorage.setItem("prenom", "mathieu");
console.log(localStorage);
// getitem recuperelavaleur
// clear
// removeitems


