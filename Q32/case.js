var current_user = ["Arshad", "Asif", "Arif", "Saleem"];
var new_user = ["Uzair", "Huzaifa", "Asif", "Umer", "Raza", "Saleem"];
new_user.forEach(function (new_one_user) {
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase()
        === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This user name ".concat(new_one_user, " is available"));
    }
});
