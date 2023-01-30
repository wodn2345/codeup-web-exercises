// var i = 0;
// while{console.log(2 * (2 * i)); i++;
//  (i<12);}

// var i=2;
// while(i <=65536)
//   console.log(i);
// i = i+2 ;
// }

var cones = Math.floor((Math.random() * 50) + 50)
do {
 var coneSold = Math.floor((Math.random() * 4) +1);
if (coneSold < cones) {
 console.log(coneSold + " conse sold...");
 cones -= coneSold;
} else if (coneSold > cones) {
  console.log("Cannot sell you " + coneSold + " cones i only have " + cones);
 } else {
  console.log("Yay! I sold them all!");
  cones =- coneSold
 }
} while(cones>0)

//
//  while(cones >0)
//  var conesBought = Math.floor(Math.random() * 4) + 1);
//  if(conesBought <= cones) {
//   console.log(conesold)
//  }
//
// }