var guestArray = ["ali", "noman", "zain"];
var canNotAttend = "noman";
var newGuest = "muhammad";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
guestArray.map(function (items) { return console.log("Hello,".concat(items, "you are invited to dinner")); });
guestArray.unshift("ahmed");
console.log(guestArray);
var middleGuest = "rashid";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
console.log(guestArray);
guestArray.push("muhammad");
console.log("we can invite only two people for dinner!");
guestArray.pop();
console.log(guestArray);
while (guestArray.length > 2) {
    var removeguest = guestArray.pop();
    console.log("\nSorry ".concat(removeguest, "we can't invite you to dinner!"));
}
guestArray.map(function (item) { return console.log("\n".concat(item, " You are still invited to dinner!")); });
guestArray.pop();
guestArray.pop();
console.log(guestArray);
