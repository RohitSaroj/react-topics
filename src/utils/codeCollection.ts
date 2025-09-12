/*

const CAT_API = 'https://catfact.ninja/fact';
const GITHUB_USER_LIST = 'https://api.github.com/users';
const GITHUB_USER = 'https://api.github.com/users/rohit-saroj';
const USER_LIST = 'https://jsonplaceholder.typicode.com/users';
const POSTS = 'https://jsonplaceholder.typicode.com/posts';
const COMMENTS = 'https://jsonplaceholder.typicode.com/comments';
const TODOS = 'https://jsonplaceholder.typicode.com/todos';
const FIRST_TODO = 'https://jsonplaceholder.typicode.com/todos/1';
const RECIPES = 'https://dummyjson.com/recipesd/search?select=id,name&q=${query}'


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

/*
  const p1 = new Promise((res, rej) => {
      setTimeout(() => rej({ val: "P1" }), 1000);
    });
    const p2 = new Promise((res, rej) => {
      setTimeout(() => rej({ val: "P2" }), 2000);
    });

    Promise.myAll = (promises) => {
      return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
          return reject("Argument must be an array");
        }
        if (promises.length === 0) return resolve([]);

        const results = [];
        let completed = 0;

        promises.forEach((promise) => {
          Promise.resolve(promise)
            .then((result) => {
              results.push(result);
              completed++;
              if (promises.length === completed) {
                resolve(results);
              }
            })
            .catch((err) => {
              errorOccured = true;
              reject(err);
            });
        });
      });
    };

    Promise.myAny = (promises) => {
      return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
          return new TypeError("Argument must be an array");
        }
        if (promises.length === 0) {
          return new AggregateError([], "All promises were rejected");
        }

        const rejections = [];
        let rejected = 0;

        promises.forEach((promise) => {
          Promise.resolve(promise)
            .then((result) => resolve(result))
            .catch((error) => {
              rejections.push(error);
              rejected++;
              if (rejected === promises.length) {
                reject(
                  new AggregateError(rejections, "All promises were rejected")
                );
              }
            });
        });
      });
    };

    Promise.myAny([p1, p2])
      .then((result) => console.log("myResult", result))
      .catch((err) => console.error("myError", err));
/*


const swapTwoVariables = (a, b) => {
  a = a + b; // 3 = 1 + 2
  b = a - b; // 1 = 3 - 2
  a = a - b;
  return [a, b];
}


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




function debounce(fn, delay) {
 let timer;
 return (...args) => {
  clearTimeout(timer);
  timer = setTimeout(() => fn(...args), delay);
 };
}


function throttle(fn, limit) {
 let lastCall = 0;
 return (...args) => {
  const now = Date.now();
  if (now - lastCall >= limit) {
    lastCall = now;
    fn(...args);
  }
 };
}



function startCountdown(seconds) {
  const endTime = performance.now() + seconds * 1000
  let lastLogged = seconds

  function tick() {
    const now = performance.now()
    const remaining = Math.ceil((endTime - now) / 1000)
    console.log('called');
    if (remaining < lastLogged) {
      console.log(remaining)
      lastLogged = remaining
    }

    if (remaining > 0) {
      requestAnimationFrame(tick)
    } else {
      console.log("Time's up!")
    }
  }

  console.log(seconds)
  requestAnimationFrame(tick)
}
startCountdown(10)

const isLessThanHalf = (event) => {
  const {target} = event;
  const boundingClientRect = target.getBoundingClientRect();
  let mouseAt = event.clientX - boundingClientRect.left;
  mouseAt = Math.round(Math.abs(mouseAt));
  return mouseAt <= boundingClientRect.width / 2;
};


---------------------------------------------------------------
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

const sum = (a, b, c) => a + b + c;

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3), curriedSum(1,2,3));

function curryAll(fn) {
  return function curried(...args) {
    if (args.length === 0) return fn();

    return function (...nextArgs) {
      if (nextArgs.length === 0) return fn.apply(this, args);
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

const sum = (...nums) => nums.reduce((a, b) => a + b, 0);

const curriedSum = curryAll(sum);

console.log(curriedSum(1)(2)(3)(), curriedSum(1, 2, 3)());
---------------------------------------------------------------

*/
