// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health,strength);
    this.name = name;
  }


  receiveDamage(damage){
    super.receiveDamage(damage);
    return this.health <= 0 ?
       `${this.name} has died in act of combat`:
       `${this.name} has received ${damage} points of damage`;
  }

  battleCry(){
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super (health, strength);
  }


  receiveDamage(damage){
    super.receiveDamage(damage);
    return this.health <= 0 ?
       `A Saxon has died in combat`:
       `A Saxon has received ${damage} points of damage`;
  }
}

// War
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
    let vikingPosition = getRandomInt(this.vikingArmy);
    let saxonPosition = getRandomInt(this.saxonArmy);

    let vikingStrength = this.vikingArmy[vikingPosition].attack();
    let result = this.saxonArmy[saxonPosition].receiveDamage(vikingStrength);

    console.log(result);

    if (this.saxonArmy[saxonPosition].health <= 0) {
      this.saxonArmy.splice(saxonPosition,1);
    }

    return result;
  }

  saxonAttack(){
    let vikingPosition = getRandomInt(this.vikingArmy);
    let saxonPosition = getRandomInt(this.saxonArmy);

    let saxonStrength = this.saxonArmy[saxonPosition].attack();
    let result = this.vikingArmy[vikingPosition].receiveDamage(saxonStrength);

    console.log(result);

    if (this.vikingArmy[vikingPosition].health <= 0) {
      this.vikingArmy.splice(vikingPosition,1);
    }

    return result;
  }

  showStatus(){
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}

function getRandomInt(array = []) {
  return Math.floor(Math.random() * (array.length - 0)) + 0;
}