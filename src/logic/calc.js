export function GetSum(values, neigh) {
  // Calculates the Score of a combination
  const calcScience = (science) => {
    var score = science[0] ** 2 + science[1] ** 2 + science[2] ** 2;
    score += Math.min(science[0], science[1], science[2]) * 7;
    return score;
  };
  console.log(values["compass"]);
  /* Combinations */

  // Normal
  var normal = [values.compass, values.gear, values.tablet];

  // Wildcard
  var wildcard = [0, 0, 0];

  // Copy
  var copy = [0, 0, 0];

  // Maxplus
  var maxplus = [0, 0, 0];

  var combinations = normal;

  var scores = [0, 0, 0];
  combinations.forEach((element) => {
    //scores.push(calcScience(element));
    // Maybe return the combination as well?
  });

  try {
    return Math.max(scores);
  } catch {
    return 0;
  }
}
