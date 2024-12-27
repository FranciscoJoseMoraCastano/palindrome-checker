function checkPalindrome() {
    const str = document.getElementById('text-input').value;
    if (!str) { // Si el valor está vacío
        alert("Please input a value");
        return;
        }
    const result = palindrome(str);
    document.getElementById('result').innerText = result ? `${str} is a palindrome.` : `${str} is not a palindrome.`;
}
// Función original:
// 1. Palindrome Checker
function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, ''); // Convertimos el string a minúsculas eliminando caracteres no alfanuméricos y guiones bajos
    const reversed = str.split('').reverse().join(''); // Lo separamos en letras, revertimos el array y lo volvemos a unir
    return str === reversed; // Si el string original es igual a su versión revertida, devuelve true, de lo contrario, devuelve false
}