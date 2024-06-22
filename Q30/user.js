var username = ["Arshad", "Asif", "Arif", "Admin", "Saleem"];
username.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ",would you like to see status report?"));
    }
    else {
        console.log("Hello ".concat(oneuser, ", Thankyou for login again."));
    }
});
