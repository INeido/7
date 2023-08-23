export function GetSum(values, neigh) {
  // Calculates the Score of a combination
  const calcScience = (science) => {
    var score = science[0] ** 2 + science[1] ** 2 + science[2] ** 2;
    score += Math.min(science[0], science[1], science[2]) * 7;
    return score;
  };

  // Calculates the possible combinations of the wildcards
  function generateWildcardCombinations(value) {
    const result = [];

    function generateCombinations(sum, arr) {
      if (sum === value) {
        result.push([...arr]);
        return;
      }

      if (arr.length === 3) {
        return;
      }

      for (let i = 0; i <= value - sum; i++) {
        arr.push(i);
        generateCombinations(sum + i, arr);
        arr.pop();
      }
    }

    generateCombinations(0, []);

    return result.map(combination => {
      const remainingZeros = 3 - combination.length;
      const zeros = Array(remainingZeros).fill(0);
      return combination.concat(zeros);
    });
  }

  // Calculates all combinations from the copy cards
  function generateCopyCombinations(limit, neigh) {
    limit = Math.min(limit, neigh.length);

    function backtrack(combination, index) {
      if (combination.length === limit) {
        combinations.push(combination.slice());
        return;
      }

      for (let i = index; i < neighs.length; i++) {
        combination.push(neighs[i]);
        backtrack(combination, i + 1);
        combination.pop();
      }
    }

    const combinations = [];
    const neighs = neigh.map(item => {
      const arr = [0, 0, 0];
      if (item.includes("Compass")) arr[0]++;
      if (item.includes("Gear")) arr[1]++;
      if (item.includes("Tablet")) arr[2]++;
      return arr;
    });

    backtrack([], 0);

    // Use a Set to store unique combinations
    const uniqueCombinationsSet = new Set();

    for (const combination of combinations) {
      const summedCombination = combination.reduce((acc, curr) =>
        acc.map((val, i) => val + curr[i])
      );

      uniqueCombinationsSet.add(JSON.stringify(summedCombination));
    }

    // Convert the Set back to an array
    const uniqueCombinations = [...uniqueCombinationsSet].map(combination =>
      JSON.parse(combination)
    );

    return uniqueCombinations;
  }

  // Calculates all possible combinations from different arrays
  function generateCombinations(normal, wildcard, copy, max) {
    const combinations = [];

    // Add normal array to each wildcard array
    const normalPlusWildcard = wildcard.map(wcArr =>
      wcArr.map((value, index) => value + normal[index])
    );

    // Multiply wildcard and copy arrays to generate combinations
    for (const wcArr of normalPlusWildcard) {
      for (const copyArr of copy) {
        const combination = wcArr.map((value, index) => value + copyArr[index]);

        // Add the max to the one with the highest val
        const highestIndex = combination.indexOf(Math.max(...combination));
        combination[highestIndex] += max;

        combinations.push(combination);
      }
    }

    return combinations;
  }

  var normal = [parseInt(values["Compass"]), parseInt(values["Gear"]), parseInt(values["Tablet"])];
  var wildcard = generateWildcardCombinations(parseInt(values["Wildcard"]));
  var copy = generateCopyCombinations(parseInt(values["Copy"]), neigh);

  var combinations = generateCombinations(normal, wildcard, copy, parseInt(values["Maxplus"]));

  var maxScore = -Infinity;
  var bestCombination = [0, 0, 0];

  combinations.forEach((combination) => {
    var score = calcScience(combination);
    if (score > maxScore) {
      maxScore = score;
      bestCombination = combination;
    }
  });

  try {
    return { score: maxScore, combination: bestCombination };
  } catch {
    return { score: 0, combination: [0, 0, 0] };
  }
}
