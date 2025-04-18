/*4. You have now been asked to include a method for levelling a player up, increasing their level number by one.
    * Modify the Player class so that it will accept a Player name string and a level number in two separate arguments.
    * Then, define a shared object method `info()` that will output the following string:
        * `<name> has reached Level <level>`!
    * Finally, define a second shared object method named `levelUp()` that will **increment** the level of the Player.*/

export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  info() {
    console.log(`${this.name} has reached Level ${this.level}!`)
  
    }
  levelUp() {
    this.level +=1;
  }
}