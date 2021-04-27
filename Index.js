/* var kidsArray = ['cassandra', 'Alejandro', 'William'];
var emptyArray = [];
emptyArray.push(kidsArray); */

/* use const for global scope */

// function createFullName (firstName, lastName) {
//     console.log(firstName + " " + lastName);
//  }
//  createFullName('John', 'Wayne');




// /*let fullName = (firstName, lastName) => `${firstName} ${lastName}`;
// console.log(fullName('Patrick', 'Kane') */
// setTime0ut(myAlert, 3000);

// setTimeout(() => alert('Time is up!'), 2000);



// setInterval(() => alert('are we there yet?') , 2000);

let names = ['John', 'Susan', 'Bill', 'Ted', 'Jennifer']; 
    function processSplicedValue(arr, index, cbf)  {
            
            var result =arr.splice(index, 1)
            cbf(result)
    }
    function logPatrickKane(text)
    {console.log("Hi from the logPatrickKane: ",text) 
    }
    processSplicedValue(names, 2, console.log);
    processSplicedValue(names, 2, alert);
    processSplicedValue(names, 1, (text)=>{alert(text)});
    processSplicedValue(names, 2, logPatrickKane);


    


// //    let luckyOne = processSplicedValueNames.splice(1,4);
// //     console.log(processSplicedValueNames);



//Well, processSplicedValue() takes three parameters, and you're only giving it two. That's no good. So, let's work with the following skeleton:
// arr is the array to work with, idx is the index in the array to remove and extract, and f is the callback which will operate on the extracted value
//let processSplicedValue = ( arr, idx, f ) => {
    // first figure out how to use arr.splice() to both remove the element at index idx and capture it
    // store the element at index idx into a variable, say, "val"
    // now give val to f()
// }
// You might need to research precisely what splice() does.
// Once you have a definition, call it like so:

// let names = ['John', 'Susan', 'Bill', 'Ted', 'Jennifer'];
// processSplicedValue(arr, idx, f);
// console.log(processSplicedValue) //