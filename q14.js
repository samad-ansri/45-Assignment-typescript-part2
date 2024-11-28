var guestArray = ["bilal", "zain", "faraz"];
guestArray.map(function (items) { return console.log("Hello,".concat(items, " you are invited to dinner")); });
var cannotAttend = "zain";
console.log("".concat(cannotAttend, " can not make it ,for dinner"));
var newGuest = "zeeshan";
guestArray[guestArray.indexOf(cannotAttend)] = newGuest;
console.log(guestArray);
guestArray.map(function (items) { return console.log("Hello,".concat(items, " you are invited to dinner")); });
