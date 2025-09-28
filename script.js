//step 1 Array for generate excuses
let who = ['A dog', 'A stranger', 'My Grandma', 'My bother'];
let action = ['stole my', 'pee on my', 'smash', 'broke'];
let what = ['Homework', 'my phone', 'a car'];
let when = ['This morning', 'on the street', 'in the park', 'tonight', 'in this moment'];

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

