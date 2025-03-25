/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */


// npm install --save-dev typescript ts-node @types/node

// npx tsc --init
// npm start 

interface Ability {
  use(): void;
}

class SwordAttack implements Ability {
  use(): void {
    console.log('Ataca con una espada');
  }
}

//Tarea ataqaaue con hacha 

class AxeAttack implements Ability {
  use(): void{
    console.log('Ataca con una espada');
  }
}
// agregar una clase magica

class MagicSpell implements Ability {
  use(): void {
    console.log('Lanza un hechizo mágico');
  }
}

// Aqui se implementa el patron Bridge
// la clase abstracta que tiene un metodo abstracto me permite delegar la implementacion del perfom
abstract class Character {
  protected ability: Ability;

  constructor(ability: Ability) {
    this.ability = ability;
  }

  setAbility(ability: Ability): void {
    this.ability = ability;
  }

  abstract performAbility(): void;
}

class Warrior extends Character {
  performAbility(): void {
    console.log("El guerrero esta listo para luchar");
    this.ability.use();
  }
}

class Wizard extends Character {
    performAbility(): void {
    console.log("El mago esta listo para curar");
    this.ability.use();
  }
}

function main(){
    const warrior = new Warrior(new SwordAttack());
    warrior.performAbility();
    

    //Tarea
    warrior.setAbility(new AxeAttack());
    warrior.performAbility();

    const wizard = new Wizard(new MagicSpell());
    wizard.performAbility();
}

main();
