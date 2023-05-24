type Person = {
    name: string;
    skills: (string | number)[];
    roles: (string | number)[];
    age: number;
}

let person1: Person;
person1 = {
    name: "ahmed",
    skills: ["js", "ts", "react", "nodejs"],
    roles: [1, 2, 3, 4],
    age: 20
}
console.log(person1);