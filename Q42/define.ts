function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name))};
    function make_great(magicians: string[]){
        return magicians.map(name => `The Great ${name}`)};
        let magicians_name = ["Harry", "Poter", "Mick"];
        let great_magicians = make_great(magicians_name);
        console.log(show_magicians(great_magicians))
    