const Factorial = (number) => {
    if (number < 0) {
        return "Girilen sayı negatif olamaz";
    } else if (number === 0 || number === 1) {
        return 1;
    } else if (typeof number !== "number" ) {
        return "Girilen veri number tipinde olmalıdır";
    } else if (!Number.isInteger(number)) {
        return "Girilen sayı integer olmalıdır"
    } else {
        let factorial = 1;
        for (let i = 2; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

console.log(Factorial(4));
console.log(Factorial("Ahmet"));
console.log(Factorial(-5));
