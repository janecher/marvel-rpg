// find all multiples of 5 or 3 under 1000
// add them all together

//input: 10
//output: sum of all numbers between 1 and 10, which are divisible by 3 or by 5
//1 2 3 4 5 6 7 8 9 
// 3 + 5 + 6 + 9

const multipleAdder = (number) => {
  if (number == 0) {
    return number;
  } else {
    if (number % 5 == 0 || number % 3 == 0){
      return multipleAdder(number - 1) + number;

    } else {
      return multipleAdder(number - 1);
    }
  }
}

console.log(multipleAdder(1000));


