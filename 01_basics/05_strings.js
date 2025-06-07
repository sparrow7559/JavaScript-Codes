const name ="viraj-RG";
const repocount =34;
// console.log(name+repocount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String("GTA 5");

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("T"));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-2,1);
console.log(anotherString);

const newString1 ="     Viraj     ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://viraj.com/viraj%20gupta";
console.log(url.replace('%20','-')
);
console.log(url.includes("viraj"));
console.log(url.includes("hc"));

console.log(name.split('-'));


