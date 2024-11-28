function makeSandwich (item: string[]){
    console.log('Making your sandwich with:');

    item.forEach(element => console.log("-"+ element));

    console.log(`Enjoy your Sandwich !`);
}

makeSandwich(['Ham', 'Cheese', 'lettuce']);

makeSandwich(['Turkey', 'Bacon']);

makeSandwich(['Peanut butter', 'Jelly']);