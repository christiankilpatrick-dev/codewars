const fizzBuzz = (num) => {
    for (let i= 1; i <= num; i++){
        console.log("i", i)
        if (i%3 === 0 && i%5 === 0){
            console.log("Fizz Buzz")
        }else if (i%3 === 0) {
            console.log("Fizz")
        }else if (i%5 === 0){
            console.log("Buzz")
        }else {
            console.log(i)
        }
        

    }
    return "Ta Daa"
}

console.log(fizzBuzz(25))