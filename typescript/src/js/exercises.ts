

export function exercises() {
  // Exercise 1
  let double = (value: number = 0) => {
      return value * 2;
  };
  console.log(double(10));

  // Exercise 2
  let greet = (name: string = "Max") => {
      console.log("Hello, " + name);
  };
  greet();
  greet("Anna");

  // Exercise 3
  let numbers = [-3, 33, 38, 5];
  console.log(Math.min(...numbers));

  // Exercise 4
  let newArray = [55, 20];
  newArray.push(...numbers);
  console.log(newArray);

  // Exercise 5
  let testResults = [3.89, 2.99, 1.38];
  let results: number[] = testResults;
  console.log(...results);

  // Exercise 6
  let scientist = {firstName: "Will", experience: 12};
  let { firstName, experience } = scientist;
  console.log(firstName, experience);
}