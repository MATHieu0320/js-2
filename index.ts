class Point {

  name: string;
  nom: string;
  age: number; 

  constructor(name: string,nom: string ,age: number){
    this.name = name
    this.nom = nom
    this.age = age

  }

    set bar(value: boolean) {
console.log(value);

    }
  CanPass() {
    return true;
  }

  Moyenne(){
   return this.name + " est son nom est : " + this.nom;
  }
  MineurOuMajeur( ){
 if (this.age > 18) {
  return  console.log("La personne est majeur");
    
 }
 else{
    return console.log("La personne est mineur");
 }

  }
}

 
console.log("cc");
let john = new Point("john", "stnaleck",15);

console.log();
john.MineurOuMajeur()
