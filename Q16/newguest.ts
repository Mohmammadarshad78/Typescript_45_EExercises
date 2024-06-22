let guestlist = ["Arshad","Asif","arif","Saleem"];
let dontcome = guestlist[0];
console.log("Good News ! We have found a bigger table for dinner.");
guestlist.splice  (0, 1, "Arif");
console.log(dontcome, "Aap nhi aa sakte.");
guestlist.unshift("Abdullah");
guestlist.push("Umar");
let middleindex: number= Math.floor(guestlist.length /2);
guestlist.splice(middleindex, 0, "Osama");
console.log("updated list of our Guests")
guestlist.forEach(oneguest=>console.log(`Salam, ${oneguest}, 
 would you like to dinner with  me.`));
