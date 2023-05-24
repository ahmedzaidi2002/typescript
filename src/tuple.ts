let newname = "ahmed";
console.log(newname);

let myTuple: [string, number, boolean] = ["ahmed", 20, false];
let array = [20, " ahmed", true];

array = myTuple; // not an error
// myTuple = array; 
// error becuase explicitily assigned type of data to be inserted at particular index