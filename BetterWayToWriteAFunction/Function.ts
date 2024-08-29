function addTwo(num: number): number {
  return num + 2;
  //   return "Hello";
}

addTwo(5);

// This is one of scenerio we could handle the error later
// function getValue(val: number): String {
//   if (val > 5) {
//     return true;
//   }

//   return "200 OK";
// }

// Arrow
// const arrowFunc = (s: string): string => {
//   return "Haii";
// };

//                               Map()

// const heroes = ["Captain America", "Superman", "Batman", "Thor"];
const heroes = [1, 2, 3];

// heroes.map((hero : string):string => {
//     return `My heroes are ${hero}`
// });

// heroes.map((hero : string):string => {
//     return 1
// });

heroes.map((hero): string => {
  return `My heroes are ${hero}`;
});

function consoleError(msg: string): void {
  console.log(msg);
}

function handleError(msg: string): never {
  throw new Error(msg);
}

export {};
