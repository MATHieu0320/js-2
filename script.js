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
// function wait(duration) {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       reject(duration);
//       console.log("v");
//     }, duration)
//   );
// }
wait(1000).then(() => console.log("cc"));
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
