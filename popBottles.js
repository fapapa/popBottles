const investment = function() {
  return process.argv[2] || null;
};

const assertEqual = function(actual, expected) {
  let msg;

  if (actual === expected) {
    msg = `👍👍👍Assertion Passed: ${actual} === ${expected}👍👍👍`;
  } else {
    msg = `☢☢☢Assertion Failed: ${actual} !== ${expected}☢☢☢`;
  }

  console.log(msg);
};

// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase

const popCalcRecursive = function(bottles, recycledBottles, recycledCaps) {
  if (bottles - recycledBottles < 2 && bottles - recycledCaps < 4) {
    console.log(`TOTAL BOTTLES: ${bottles}`);
    console.log(`REMAINING BOTTLES: ${bottles - recycledBottles}`);
    console.log(`REMAINING CAPS: ${bottles - recycledCaps}`);
    console.log('TOTAL EARNED:');
    console.log(`  BOTTLES: ${recycledBottles / 2}`);
    console.log(`  CAPS: ${recycledCaps / 4}`);
    return bottles;
  } else {
    let bottlesToRecycle = bottles - recycledBottles;
    bottles += Math.floor(bottlesToRecycle / 2);
    recycledBottles += bottlesToRecycle - (bottlesToRecycle % 2);

    let capsToRecycle = bottles - recycledCaps;
    bottles += Math.floor(capsToRecycle / 4);
    recycledCaps += capsToRecycle - (capsToRecycle % 4);

    return popCalcRecursive(bottles, recycledBottles, recycledCaps);
  }
};

const popCalc = function(investment) {
  const costPerBottle = 2;
  return popCalcRecursive(Math.floor(investment / costPerBottle), 0, 0);
};

if (investment()) {
  popCalc(investment());
} else {
  assertEqual(popCalc(1), 0);
  assertEqual(popCalc(2), 1);
  assertEqual(popCalc(3), 1);
  assertEqual(popCalc(4), 3);
  assertEqual(popCalc(10), 15);
  assertEqual(popCalc(20), 35);
  assertEqual(popCalc(30), 55);
  assertEqual(popCalc(40), 75);
}
