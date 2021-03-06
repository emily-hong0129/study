// 순열
const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((e) => [e]); 

  arr.forEach((fixed, index) => {
  const next = [...arr.slice(0, index), ...arr.slice(index+1)] 
  const permutations = getPermutations(next, selectNumber - 1); 
  const result = permutations.map((e) => [fixed, ...e]); 
  results.push(...result); 
  });

  return results;
}

// 조합
const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((e) => [e]); 
  
  arr.forEach((fixed, index) => {
  const next = arr.slice(index + 1);
  const combinations = getCombinations(next, selectNumber - 1); 
  const result = combinations.map((e) => [fixed, ...e]);
  results.push(...result); 
  });
  return results; 
}

// 중복순열
const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((e) => [e]); 

  arr.forEach((fixed, index) => {
  const permutations = getPermutations(arr, selectNumber - 1); 
  const result = permutations.map((e) => [fixed, ...e]); 
  results.push(...result);
  });
  return results; 
}


// 최대공약수
const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);

// 최소공배수
const lcm = (a, b) => a * b / gcd(a, b);

