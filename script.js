console.log("Hello from javascript!");

let name = "Susant";
let age = 20;
let isLearning = true;

console.log(name);
console.log(age);
console.log(isLearning);

let firstname = "susant";
let lastname = "pandit";
let fullname = firstname + "" + lastname;
console.log(fullname);

const city = "sydney"
console.log(city);

let score = 0;
score = 10;
score = 20;
console.log(score);


function greet() {
    console.log("hello susant");
}

greet();

function namaste(PersonName) {
    console.log("hello " + PersonName + "!");
}

namaste("pujan");
namaste("roman");

function add(a, b) {
    return a + b;
}
 const result = add(5, 3);
 console.log(result);

 const agee= 16;
 if (agee >= 18) {
    console.log("you can vote");
 } else {
    console.log("you can't vote");
 }


 const scoree = 55;

 if (scoree >= 90) {
    console.log("grade A");
 } else if (scoree >= 70) {
    console.log("grade is B");
 } else if (scoree >= 50) {
    console.log("grade C"); 
 } else {
    console.log("grade F");
 }

 const skill = ["HTML","CSS","JAVA","GIT"];
 console.log(skill[0]);
 console.log(skill[1]);
 console.log(skill[2]);

 const skills = ["HTML","CSS","JAVA","GIT","react"];

for (let i = 0; i < skills.length; i++) {
console.log(skills[i]);
}

const numbers = [10,20,30,40,50];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
}

console.log("total:" + total);
