/*
Patron estructurales Bridge
Bridge es un patrón de diseño estructural que te permite 
dividir una clase grande, o un grupo de clases estrechamente
 relacionadas, en dos jerarquías separadas (abstracción e implementación)
que pueden desarrollarse independientemente la una de la otra.

*/ 

interface Ability {
    use(): void;
}

class AxesAtack implements Ability {
    use(): void {
        console.log('Ataca con una hacha');
    }
}

class SwordAttacks implements Ability {
    use(): void {
        console.log('Ataca con una espada');
    }
}

class Health implements Ability {
    use(): void {
        console.log('Recupera salud');
    }
}

abstract class Characters {
    protected ability: Ability;
    constructor(ability: Ability) {
        this.ability = ability;
    }

    setAbility(ability: Ability) {
        this.ability = ability;
    }
    abstract performAbility(): void;
}

class Warriors extends Characters {
    performAbility(): void {
        console.log("Warrior esta atacando");
        this.ability.use();
    }
}

class Wizards extends Characters{
    performAbility(): void {
        console.log("Wizard esta atacando...");
        this.ability.use();
    }
}

function main(){
    const warrior = new Warriors(new SwordAttacks());
    warrior.performAbility();

    warrior.setAbility(new AxesAtack());
    warrior.performAbility();

    // Actividad es terminar la implementacion de Wizard


}

main();