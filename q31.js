var current_users = ["Usman", "Ali", "Areeba", "Zain", "Osama"];
var new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];
new_users.forEach(function (new_one_users) {
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_users.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_users, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_users, " is available"));
    }
});
