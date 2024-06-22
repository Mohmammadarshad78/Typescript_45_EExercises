function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
;
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
;
var magicians_name = ["Harry", "Poter", "Mick"];
var great_magicians = make_great(magicians_name);
console.log(show_magicians(great_magicians));
