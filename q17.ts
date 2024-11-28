
let guestArray:string[] = ["ali","noman","zain"];

let canNotAttend:string = "noman";

let newGuest :string = "muhammad"
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;

guestArray.map((items)=> console.log(`Hello,${items}you are invited to dinner`));


guestArray.unshift("ahmed");
console.log(guestArray);

let middleGuest:string = "rashid";
let middleIndex = guestArray.length/2;
guestArray.splice(middleIndex,0,middleGuest);

console.log(guestArray);

guestArray.push("muhammad");

console.log("we can invite only two people for dinner!");

guestArray.pop();
console.log(guestArray);

while(guestArray.length>2){
    let removeguest = guestArray.pop();
    console.log(`\nSorry ${removeguest}we can't invite you to dinner!`);
}
guestArray.map((item)=> console.log(`\n${item} You are still invited to dinner!`))

guestArray.pop();
guestArray.pop();
console.log(guestArray);
