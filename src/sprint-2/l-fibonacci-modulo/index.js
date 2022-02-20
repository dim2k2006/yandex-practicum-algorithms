function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError('func should be a function.');
  }
  var memoized = function () {
    var args = arguments,
      key = resolver ? resolver.apply(this, args) : args[0],
      cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new memoize.Cache();
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = Map;

const getFibonacci = memoize((number) => {
  if (number === 0 || number === 1) return 1;

  const result = getFibonacci(number - 1) + getFibonacci(number - 2);

  return result;
});

const getFibonacciModule = (number, digitsCount) => {
  const fibonacci = getFibonacci(number);

  if (String(fibonacci).length <= digitsCount) return fibonacci;

  const result = fibonacci % Math.pow(10, digitsCount);

  return result;
};

exports.getFibonacciModule = getFibonacciModule;

// Yandex context required code
const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on('line', (line) => {
  _inputLines.push(line);
});

const solve = () => {
  const [number, digitsCount] = _inputLines[0].split(' ').map(Number);

  const result = getFibonacciModule(number, digitsCount);

  console.log(result);
};

process.stdin.on('end', solve);
