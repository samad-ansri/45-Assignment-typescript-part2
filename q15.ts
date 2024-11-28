
let guestArray:string[] = ["ali","noman","zain"];

let canNotAttend:string = "noman";
console.log(`${canNotAttend} can not make it , for dinner`);

let newGuest :string = "muhammad"
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;

guestArray.map((items)=> console.log(`Hello,${items}you are invited to dinner`));