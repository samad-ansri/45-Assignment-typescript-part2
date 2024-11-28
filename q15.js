var guestArray = ["ali", "noman", "zain"];
var canNotAttend = "noman";
console.log("".concat(canNotAttend, " can not make it , for dinner"));
var newGuest = "muhammad";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
guestArray.map(function (items) { return console.log("Hello,".concat(items, "you are invited to dinner")); });
