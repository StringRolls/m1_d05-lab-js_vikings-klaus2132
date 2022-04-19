// Soldier
class Soldier {
  constructor(health, strength) {
  this.health = health;
  this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage)
  {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super (health, strength)
    this.name = name; 
  }
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 1){
      return `${this.name} has received ${damage} points of damage`
    }else{
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry(){
    return 'Odin Owns You All!';
  }
}


// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 1){
      return `A Saxon has received ${damage} points of damage`
    }else{
      return 'A Saxon has died in combat'
    }
  }
}


/*
let randomNumber = Math.floor(Math.random()*100);

let klaus = new Viking('Klaus', 100, 10);
console.log(`${klaus.name} has ${klaus.health} health and ${klaus.strength} strength`);
console.log(klaus.receiveDamage(randomNumber));
console.log(klaus.health);
*/




 War
class War {
  constructor(){
  this.vikingArmy = [];
  this.saxonArmy = [];
  }
 addViking(viking){
  this.vikingArmy.push(viking);
 }
 addSaxon(saxon){
  this.saxonArmy.push(saxon);
 }
 vikingAttack(){
   let randomNumber = Math.floor(Math.random()*this.saxonArmy.length);
   const randomSaxon =  this.saxonArmy[randomNumber]
   randomSaxon.receiveDamage(randomViking.attack());
  this.saxonArmy.pop(randomSaxon);
 }
 saxonAttack(){
  let randomNumber = Math.floor(Math.random()*this.vikingArmy.length);
  const randomViking =  this.vikingArmy[randomNumber]
  randomViking.receiveDamage(randomSaxon.attack());
 this.vikingArmy.pop(randomViking);
 }
 showStatus(){

 }

}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. 
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
*/