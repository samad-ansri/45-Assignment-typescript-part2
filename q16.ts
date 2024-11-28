
let guestArray:string[] = ["ali","noman","zain"];

let canNotAttend:string = "noman";

let newGuest :string = "muhammad"
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;

guestArray.map((items)=> console.log(`Hello,${items}you are invited to dinner`));

console.log("We found a bigger dinner table!");

guestArray.unshift("ahmed");
console.log(guestArray);

let middleGuest:string = "rashid";
let middleIndex = guestArray.length/2;
guestArray.splice(middleIndex,0,middleGuest);

console.log(guestArray);

guestArray.push("muhammad");
console.log(guestArray);

guestArray.map((items)=> console.log(`\nDear ${items} You are invited to dinner!`))