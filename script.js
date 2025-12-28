// console.log("Hello, world!");
// alert("Hello, world!");

// let min = 0
// let max = 100;
// let nb = 5;
// let str = "Bonjour le monde";
// let name = "Hamza";
// let pi = 3.14;
// let random_nb = Math.floor(Math.random() * (max - min + 1)) + min;

// document.write(nb);
// document.write("<br>");
// document.write(str);
// document.write("<br>");
// document.write(name);
// document.write("<br>");
// document.write(pi);
// document.write("<br>");
// document.write(random_nb);

// let temp = 25;
// if (temp < 20) {
//     document.write("Il fait froid");
// } else {
//     document.write("Il fait chaud");
// }

// calculer le prix total avec TVA
let price = parseFloat(prompt("Entrez le prix du produit :"));
let vat = 0.185;
let total_price = price * (1 + vat);
document.write("Le prix total avec TVA est : " + "£" + total_price.toFixed(2));


// table de multiplication
let number;

do {
    number = parseInt(prompt("Entrez un nombre entre 2 et 9 :"));

    if (isNaN(number)) {
        alert("Ce n'est pas un nombre valide. Veuillez réessayer.");
    } else if (number < 2 || number > 9) {
        alert("Veuillez entrer un nombre entre 2 et 9.");
    }
} while (isNaN(number) || number < 2 || number > 9);

document.write("<h2>Multiplication Table of " + number + "</h2>");
for (let i = 1; i <= 10; i++) {
    let result = number * i;
    document.write(number + " x " + i + " = " + result + "<br>");
}


// calculer la somme dun tableau, le maximum et le minimum

let numbers = [12, 45, 7, 23, 89, 5, 67];
let sum = 0;
let max = numbers[0];
let min = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

document.write("<h2>Array Analysis</h2>");
document.write("Sum: " + sum + "<br>");
document.write("Maximum: " + max + "<br>");
document.write("Minimum: " + min + "<br>");


// fonction pour convertir la température de Celsius à Fahrenheit ou linverse
function celsiusToFahrenheit() {
   let choice = prompt(
    "Choisissez une conversion :\n" +
    "1 - Fahrenheit vers Celsius\n" +
    "2 - Celsius vers Fahrenheit"
    );

    if (choice === "1") {
        let f = parseFloat(prompt("Entrez la température en Fahrenheit :"));

        if (isNaN(f)) {
            alert("Erreur : veuillez entrer un nombre valide.");
        } else {
            let c = (f - 32) * 5 / 9;
            document.write(f + " °F = " + c.toFixed(2) + " °C");
        }

    } else if (choice === "2") {
        let c = parseFloat(prompt("Entrez la température en Celsius :"));

        if (isNaN(c)) {
            alert("Erreur : veuillez entrer un nombre valide.");
        } else {
            let f = (c * 9 / 5) + 32;
            document.write(c + " °C = " + f.toFixed(2) + " °F");
        }

    } else {
        alert("Choix invalide.");
    }
}

celsiusToFahrenheit();

// function pour inverser une chaîne de caractères
function reverseString() {
    let str = prompt("Entrez une chaîne de caractères :");
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    document.write("<h2>Reversed String</h2>");
    document.write("Original: " + str + "<br>");
    document.write("Reversed: " + reversed + "<br>");
}
reverseString();

// fonction qui compte le nombre de voyelles dans une chaîne de caractères
function countVowels() {
    let str = prompt("Entrez une chaîne de caractères :");
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    document.write("<h2>Number of Vowels</h2>");
    document.write("Original: " + str + "<br>");
    document.write("Vowels: " + count + "<br>");
}
countVowels();