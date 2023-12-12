export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const flatArray = (arr, n = 1) => {
  if (n === 0) {
    return arr;
  }

  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      resultArr.push(...flatArray(arr[i], n - 1));
      continue;
    }

    resultArr.push(arr[i]);
  }

  return resultArr;
};
