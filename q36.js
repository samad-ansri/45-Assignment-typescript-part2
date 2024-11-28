function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescipt"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "I Love JavaScript");
