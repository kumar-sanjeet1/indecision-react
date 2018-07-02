class Person {
    constructor(name = 'Anonimus', age = 0) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return this.name + ' is ' + this.age + ' years old.'
    }

    getName() {
        return this.name;
    }
}



class Employe extends Person {
    constructor(name, age, job){
        super(name, age);
        this.job = job;
    }

    getDetails() {
        let details = super.getDetails();
        details +=details + ` He is ${this.job}.`
        return details;
    }

}

class Intern extends Employe {
    constructor(name, age, job, experience){
        super(name, age, job);
        this.experience = experience;
    }

    getExperience() {
        return `${this.getName()} has ${this.experience} experience.`
    }
}


const me = new Employe('john', 22, 'Engineer');
console.log( me.getDetails());

const sanjeet = new Intern('sanjeet', 23, 'engineer', 1.6);
console.log(sanjeet.getExperience());