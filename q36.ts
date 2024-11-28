function make_shirt (size: string = "Large", printMessage: string = "I Love Typescipt"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

make_shirt();

make_shirt("Medium")

make_shirt("small", "I Love JavaScript")