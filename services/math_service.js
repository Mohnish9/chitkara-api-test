function fibonacci(n) {
  if (!Number.isInteger(n))
    throw new Error("Fibonacci input must be an integer");

  if (n < 0)
    throw new Error("Fibonacci input cannot be negative");

  if (n > 1000)
    throw new Error("Fibonacci limit exceeded");

  let a = 0, b = 1;
  const res = [];

  for (let i = 0; i < n; i++) {
    res.push(a);
    [a, b] = [b, a + b];
  }
  return res;
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function extractPrimes(arr) {
  if (!Array.isArray(arr))
    throw new Error("Prime input must be an array");

  return arr.filter(
    (num) => Number.isInteger(num) && isPrime(num)
  );
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  return b === 0 ? a : gcd(b, a % b);
}

function hcfArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0)
    throw new Error("HCF input must be a non-empty array");

  return arr
    .filter(Number.isInteger)
    .reduce((acc, curr) => gcd(acc, curr));
}

function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}

function lcmArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0)
    throw new Error("LCM input must be a non-empty array");

  return arr
    .filter(Number.isInteger)
    .reduce((acc, curr) => lcm(acc, curr));
}

module.exports = {
  fibonacci,
  extractPrimes,
  hcfArray,
  lcmArray
};
