function makeSandwich(item) {
    console.log('Making your sandwich with:');
    item.forEach(function (element) { return console.log("-" + element); });
    console.log("Enjoy your Sandwich !");
}
makeSandwich(['Ham', 'Cheese', 'lettuce']);
makeSandwich(['Turkey', 'Bacon']);
makeSandwich(['Peanut butter', 'Jelly']);
