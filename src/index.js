// BEFORE
// Function with many data about a Person
// export function getProfile(name, age, skills) {
//   const skillsList = skills.join(",");
//   return `Hey ${name}, your age is ${age}, your skills are: ${skillsList}`;
// }
// getProfile("Diogo", "30", ["HTML", "CSS", "JS"]);

// AFTER
// Class to replace the parameters
export class Person {
  constructor(name, age, skills) {
    this._data = {
      name: name,
      age: age,
      skills: skills
    };
  }

  get name() {
    return this._data.name;
  }

  get age() {
    return this._data.age;
  }

  get skills() {
    return this._data.skills;
  }

  resume() {
    const skillsList = this._data.skills.join(",");
    return `Hey ${this._data.name}, your age is ${this._data.age}, your skills are: ${skillsList}`;
  }
}

export function getProfile(person) {
  return person.resume();
}

const oneGuy = new Person("Diogo", "30", ["HTML", "CSS", "JS"]);
getProfile(oneGuy);
