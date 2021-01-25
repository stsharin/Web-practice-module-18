// callback is -> pass a function as a parameter of another function
// callback -> asynchronous (fetch, api), synchronous (serial wise)
function explain_callback(name, age, task){
    console.log("Hello", name);
    console.log("Your age", age);
    task();
}

function washHand(){
    console.log("wash with soap");
}
function takeShower(){
    console.log("Take shower");
}

explain_callback("Sogir Uddin", 17, washHand);
explain_callback("Kogir Uddin", 13, takeShower);