var guestlist = ["Arshad", "Asif", "arif", "Saleem"];
console.log("Unfortunately, the new dinner table won't arrive on time, so i am inviting only two peoples.");
while (guestlist.length > 2) {
    var removeGuest = guestlist.pop();
    console.log("Sorry, ".concat(removeGuest, " I Can't invite you to dinner"));
}
console.log("Invitations to the Last 2 Guests");
guestlist.forEach(function (LastTwo) { return console.log("Lucky ".concat(LastTwo, ", you are still invited to dinner")); });
guestlist.pop();
guestlist.pop();
console.log("Empty List:", guestlist);
