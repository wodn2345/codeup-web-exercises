(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    //     var person = {};
    //     var person = {firstname:"Jaewoo", lastname:"Baek"}
    // console.log(person.firstname)
    // console.log(person.lastname)
    // console.log(typeof person);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
        // person.sayHello = "Hello from " + person.firstname + " " + person.lastname + "!";
        // console.log(person.sayHello)
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
        console.log(typeof shoppers);
        console.log("The first shopper is a " + shoppers[0].name + " spent " + shoppers[0].amount + ".")
        console.log("The second shopper is a " + shoppers[1].name + " spent " + shoppers[1].amount + ".")
        console.log("The third shopper is a " + shoppers[2].name + " spent " + shoppers[2].amount + ".")
    shoppers.forEach(function(shopper ){
        console.log("The shopper " + shopper.name + " spent " + (shopper.amount - shopper.amount * 0.12) + " after 12% discount : " + shopper.amount * 0.12)
    })


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();





























// var myCarObject = ["dodge", "Challenger", "grey", "2doors"]
// console.log(myCarObject)
//
// myCarObject.make = "dodge";
// console.log("Which brand is your car?")
// myCarObject["model"]="Challenger"
// myCarObject["color"] = "grey";
// myCarObject["Type"]="2doors";
//
// console.log(myCarObject);
//
// myCarObject.year = 2021;
//
// myCarObject.owner = {firstName: "Jaewoo", lastName: "Baek", nextService: "2023 Mar 20" }
//
// console.log(myCarObject)
//
//
// var myFeatures= ["Bose sound", "Sports Mode", "Remote start and stop", "Keyless entry"]
//
// myCarObject.features=myFeatures;
//
// console.log(myCarObject);
//
// myCarObject.turnOn=Function()
// {
//     console.log(" Please warm up car and hit start")
// }
//
// console.log(myCarObject);
