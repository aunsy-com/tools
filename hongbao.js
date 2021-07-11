const TOTAL = 100;
const N = 20;
const MIN = 2;
const MAX = 6;

function div(n1, n2) {
  return parseFloat((n1/n2).toFixed(2));
}

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

const result = [];

function faqian(total, num, min, max) {
  const cmin = Math.max(div(total - max, num - 1), min);
  const cmax = Math.min(div(total - min, num - 1), max);
  // const cmin = div(total - max, num - 1);
  // const cmax = div(total - min, num - 1);
  
  const money = random(cmin, cmax);
  result.push(money)
  if (num === 2) {
    result.push(parseFloat((total - money).toFixed(2)))
    return;
  }
  faqian(total - money, num - 1, min, max);
}

faqian(TOTAL, N, MIN, MAX);

console.log(result);

console.log(
  result.reduce((pre, item) => {
    if(item < 2 || item > 6) {
      throw new Error(`Error value: ${item}`)
    }
    pre += item;
    return pre;
  }, 0)
)