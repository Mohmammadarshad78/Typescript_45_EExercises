let guestlist = ["arshad","asif","arif","saleem"];
let donotecome = guestlist[0];
console.log (donotecome, "aap nahi aa sakte.");
guestlist.splice (0, 1,"umar");
guestlist.forEach(guest=> console.log(`salam ${guest},would you like to diner with me`));