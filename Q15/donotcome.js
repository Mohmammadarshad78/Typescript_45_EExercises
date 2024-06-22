var guestlist = ["arshad", "asif", "arif", "saleem"];
var donotecome = guestlist[0];
console.log(donotecome, "aap nahi aa sakte.");
guestlist.splice(0, 1, "umar");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ",would you like to diner with me")); });
