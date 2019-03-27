// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = 300;
    this.strength = 150;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health === 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.health = 60;
    this.strength = 25;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health === 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const randSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    const saxonSoldierDead = `A Saxon has died in combat`;

    this.saxonArmy[randSaxonIndex].receiveDamage(this.vikingArmy[randVikingIndex].strength);
    if (this.saxonArmy[randSaxonIndex].health <= 0) {
      this.saxonArmy.splice(randSaxonIndex);
    }
    return saxonSoldierDead;
  }
  saxonAttack() {
    const randSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    const vikingSoldierDead = `${this.vikingArmy[randVikingIndex].name} has received ${
      this.saxonArmy[randSaxonIndex].strength
    } points of damage`;

    this.vikingArmy[randVikingIndex].receiveDamage(this.saxonArmy[randSaxonIndex].strength);
    if (this.vikingArmy[randVikingIndex].health <= 0) {
      this.vikingArmy.splice(randVikingIndex);
    }
    return vikingSoldierDead;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
