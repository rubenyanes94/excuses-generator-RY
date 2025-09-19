// Arreglos con las partes de la excusa
let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
let action = ['se comió', 'orinó sobre', 'aplastó', 'rompió'];
let what = ['mi tarea', 'mi teléfono', 'el carro'];
let when = ['antes de la clase', 'cuando estaba durmiendo', 'mientras hacía ejercicio', 'durante mi almuerzo', 'mientras rezaba'];

// Función para generar un elemento aleatorio de un arreglo
function generateRandomItem(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Función principal para generar la excusa completa
function generateExcuse() {
    let randomWho = generateRandomItem(who);
    let randomAction = generateRandomItem(action);
    let randomWhat = generateRandomItem(what);
    let randomWhen = generateRandomItem(when);
    
    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}

// Onload
window.onload = function() {
    let excuseElement = document.getElementById("excuse");
    excuseElement.innerHTML = generateExcuse();
};

