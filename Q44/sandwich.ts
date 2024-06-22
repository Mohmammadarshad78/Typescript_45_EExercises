function make_sandwich(...items: string[]){
    console.log("\n making a sandwich with the following items:\n");
    items.forEach(singleitem => console.log(singleitem));
    console.log("\nnow enjoy sandwich");
}
make_sandwich("Chicken", "chees", "Mayo", "Egg");
make_sandwich("Bread", "Butter");
make_sandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "lettuce");