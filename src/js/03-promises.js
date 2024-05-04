let amount = document.getElementsByName("#amount");
let firstDelay = document.getElementsByName("#delay");
let delayStep = document.getElementsByName("#step");

for(let i=0; i < amount; i++){
  const promiseNumber = i + 1;
  const promiseDelay = firstDelay + i * delayStep;
  function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    console.log(`Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    console.log(`Rejected promise ${position} in ${delay}ms`);
  }
};
};




