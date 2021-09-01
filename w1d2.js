//question 1
function computeSalesComission(a, b) {
  if (a) {
    if (b < 300) {
      console.log("no commision");
    } else if (b >= 300 && b <= 500) {
      console.log("commison " + (1 / 100) * b);
    } else if (b > 500) {
      console.log("commision " + (2 / 100) * b);
    }
  } else {
    if (b < 300) {
      console.log("no commision");
    } else if (b >= 300 && b < 500) {
      console.log("commision " + (2 / 100) * b);
    } else {
      console.log("commision " + (3 / 100) * b);
    }
  }
}
computeSalesComission(false, 3500);

//question 2
function balanceOfSavingAccount(initAmout, annInntialRate, numOfYears) {
  let result = 0;
  for (let i = 0; i <= numOfYears * 12; i++) {
    result = initAmout * (1 + annInntialRate / 100 / 12) ** (12 * numOfYears);
  }
  return result;
}
console.log(balanceOfSavingAccount(100, 10, 1));
//question 3
function calcDownPayment(cost) {
  let sum;
  if (cost < 50000) {
    console.log(cost * (5 / 100));
  } else if (cost >= 50000 && cost < 100000) {
    sum = 2500 + (10 / 100) * (cost - 50000);
    console.log(sum);
  } else if (cost >= 100000 && cost < 200000) {
    sum = 7500 + (15 / 100) * (cost - 100000);
    console.log(sum);
  } else if (cost > 200000) {
    sum = 5000 + (10 / 100) * (cost - 200000);
    console.log(sum);
  }
}
calcDownPayment(250000);

//question 4a
function sumDigit(num) {
  let temp = num;
  let sum = 0;
  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }
  return sum;
}
//question 4b
function mullDigit(num) {
  let temp = num;
  let mul = 1;
  while (temp > 0) {
    mul *= temp % 10;
    temp = Math.floor(temp / 10);
  }
  return mul;
}
console.log(mullDigit(8));

//question 5
function convertFahrenheit(fer) {
  let cel = (fer - 32) * (5 / 9);
  return cel;
}
console.log(convertFahrenheit(212));

//question 6
function distanceOfcoordnires(x1, y1, x2, y2) {
  let d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return d;
}
console.log(distanceOfcoordnires(0, 0, 5, 5));
