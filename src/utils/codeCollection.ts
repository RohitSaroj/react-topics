/*

const CAT_API = 'https://catfact.ninja/fact';
const GITHUB_USER_LIST = 'https://api.github.com/users';
const GITHUB_USER = 'https://api.github.com/users/rohit-saroj';
const USER_LIST = 'https://jsonplaceholder.typicode.com/users';
const POSTS = 'https://jsonplaceholder.typicode.com/posts';
const COMMENTS = 'https://jsonplaceholder.typicode.com/comments';
const TODOS = 'https://jsonplaceholder.typicode.com/todos';
const FIRST_TODO = 'https://jsonplaceholder.typicode.com/todos/1';


document.addEventListener('click', () => console.log('clicked'));

//const p1 = fetch('https://catfact.ninja/fact');
//const p2 = fetch('https://catfact.ninja/fact');

const fetchDemo = async () => {
  const res1 = await fetch('https://catfact.ninja/fact');
  res1.json().then(res => console.log(res.fact));
  const res2 = await fetch('https://catfact.ninja/fact');
  res2.json().then(res => console.log(res.fact));
}

//setTimeout(fetchDemo, 5000);
fetchDemo();

const obj = {
  name: 'John'
 }

Function.prototype.myBind = function (ctx, ...args) {
  return (...newArgs) => this.apply(ctx, [...args, ...newArgs]);
};



Function.prototype.newBindWithoutApply = function (ctx, ...args) {
  // Since we are not using call/apply, I'll create a reference of
  // binding method within the context, and method will be invoked
  // as context.methodcall()

  ctx.fnToCall = this;
  // returning the new method with context
  return function (...args1) {
   return ctx.fnToCall([...args, ...args1])
  }
 }

const myFunc = function (id, city) {
  console.log(`${this.name}, ${id}, ${city}`);  // id will be undefined
};

const result = myFunc.newBindWithoutApply(obj, 'Pune');
result(['Mumbai', 'ABC']);


const swapTwoVariables = (a, b) => {
  a = a + b; // 3 = 1 + 2
  b = a - b; // 1 = 3 - 2
  a = a - b;
  return [a, b];
}


var twoSum = function(nums, target) {
  let res;
  const hashMap = {};
  for(let index = 0; index < nums.length; index++) { //O(n)
    hashMap[nums[index]] = index;
  }
  for (let i = 0; i < nums.length; i++) {
    const numNeeded = target - nums[i];
    const currNum = hashMap[numNeeded];

    if (currNum !== undefined && currNum !== i) {
      res = [i, hashMap[numNeeded]];
      break;
    }
  }
  console.log(res);
  return res;
};

twoSum([2,7,11,15], 9);


var isPalindrome = function(x) {
  let reverse = 0;
  let temp = x;
  if (x < 0) return false;
  while(temp != 0)
  {
      const remainder = temp % 10;
      if (remainder < 10) {
        reverse = reverse + remainder;
      } else {
        reverse = reverse * 10 + remainder;
      }
      temp = temp/10;
  }
  console.log(reverse == x);
  return reverse == x;
};

isPalindrome(121);


const iterator = () => {
  let value = 0;
  return {
    value: () => value,
    next: () => ++value,
    prev: () => --value,
  }
}
const a = iterator()


for (var i = 1; i <= 5; i++){
  ((i) => {setTimeout(() => {
    console.log(i);
  }, i * 1000)})(i);
}

const input = ["apple", "mango", "apple", "banana", "apple"];
// Output: ["apple", "mango", "banana"]

const removeDuplicates = (inputArr) => {
  if (Array.isArray(inputArr)) {
    const hashMap = {};
    const outputArr = [];

    inputArr.forEach((val) => {
      hashMap[val] = hashMap[val] > 0 ? hashMap[val] + 1 : 1;
      if (hashMap[val] === 1) {
        outputArr.push(val);
      }
    });

    return outputArr;
  }
  return 'Not a valid input';
}


const catFact = fetch(CAT_API);

catFact
  .then(data => data.json())
  .then(data => console.log(data))
  .catch(error => console.log(`Handled error: ${error}`))

const promise = new Promise((res, rej) => {
  false ? res('Res') : rej('Rej')
});

promise
  .then(data => console.log(data))
  .catch(err => console.log(err))


const factorial = (n) => {
  if (n < 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}


const flatArrRecur = (inputArr) => {
  const outputArr = [];

  const recursion = (index, inputArr, outputArr) => {
    if (index >= inputArr.length) return;

    const currVal = inputArr[index];
    if (Array.isArray(currVal)) {
      recursion(0, currVal, outputArr);
    } else {
      outputArr.push(currVal);
    }

    recursion(index + 1, inputArr, outputArr);
  };
  recursion(0, inputArr, outputArr);

  return outputArr;
}
console.log(flatArrRecur([1, [3, [5, 6], 4], 2]));

const obj = { a: { b: { c: 1 }, d: 2 }, e: 3 }; 
hashtag#output 
["a.b.c", "a.d", "e"];

const keysExtractor = (ob, path = "") => {
 let output = [];
 for (let key in ob) {
 let newPath = path ? `${path}.${key}` : key;
 if (typeof ob[key] === "object" && ob[key] !== null) {
 output = output.concat(keysExtractor(ob[key], newPath));
 } else {
 output.push(newPath);
 }
 }
 return output;
};

const obj = { a: { b: { c: 1 }, d: 2 }, e: 3 };
console.log(keysExtractor(obj)); // ["a.b.c", "a.d", "e"]

*/
