// 1 Array por variable. 
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function random(exc){
   return exc[Math.floor(Math.random()* exc.length)]
};
 
window.onload = function() {
  //write your code here
  let randomWho = random(who);
  let randomAction= random(action);
  let randomWhat = random(what);
  let randomWhen = random(when);

  document.getElementById("excuse").innerText = randomWho + " "  + randomAction + " " + randomWhat + " " + randomWhen;
};

