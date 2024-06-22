function makeshirt(size, printmessage) {
    if (size === void 0) { size = "Large"; }
    if (printmessage === void 0) { printmessage = "I Love TypeScript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printmessage, " on shirt."));
}
makeshirt();
makeshirt("Medium");
makeshirt("Small", "I Love JavaScrip");
