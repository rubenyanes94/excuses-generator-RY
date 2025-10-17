//step 1 Array for generate excuses
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

//step 2 randomness fuction 
function random(arr){
    return arr[Math.floor(Math.random()* arr.length)];
}

//complete excuse function
function generateExcuse() {
    let randomWho = random(who);
    let randomAction = random(action);
    let randomWhat = random(what);
    let randomWhen = random(when);
    
    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}

// Onload
window.onload = function() {
    let excuseElement = document.getElementById("excuse");
    excuseElement.innerHTML = generateExcuse();
};

