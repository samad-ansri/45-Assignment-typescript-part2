
var guestArray = ["bilal", "zain", "faraz"];

guestArray.map(function (items) { return console.log("Hello,".concat(items, " you are invited to dinner")); });

let cannotAttend:string = "zain";
console.log(`${cannotAttend} can not make it ,for dinner`)

let newGuest :string = "zeeshan";
guestArray[guestArray.indexOf(cannotAttend)]=newGuest;
console.log(guestArray);

guestArray.map((items)=> console.log(`Hello,${items} you are invited to dinner`))