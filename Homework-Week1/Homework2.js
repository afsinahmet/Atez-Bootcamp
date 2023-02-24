const Multiplication = (...args) => {
    if((arg => typeof arg == "number")){
        let result = 1;
        args.forEach((i) =>
        {
            result *= i;
        });

        console.log(result);
    }
    else{
        console.log("Lütfen sayı türünde bir değer girin:",args);
    }
};

Multiplication(2,2)