do {
    let numQ = parseInt(prompt("Enter an odd number"));
    if((1 < numQ < 50) && (numQ % 2 != 0)) {
        alert("Nice");
        //loop to output odd numbers while skipping input
        // while(true) {
        for (let i = 0; i < 50; i++) {
            if (i % 2 == 0) {
                continue;
            } else if (i === numQ) {
                console.log("Yikes! Skipping number: " + numQ)
            } else {
                console.log("Here is an odd number: " + i);
            }
        }
        // }
        break;
    } else {
        alert("Yo that number is NOT odd")
    }
} while(true);