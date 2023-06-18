// Problem 1: Let’s play a mind game  ///
// Description : In this function, function name will be mindGame. It will take a number as a parameter.  
function mindGame(number) {
    if (isNaN(number)) {
        return 'Please, give me a number';
      }
    let resultOfMultiplying = number * 3;
    let resultOfAddition = resultOfMultiplying + 10;
    let resultOfDivision = resultOfAddition / 2;
    let resultOfSubtraction = resultOfDivision - 5;
    return resultOfSubtraction;
}
// const output = mindGame(58);
// console.log(output);





// Problem 2: Finding even or odd///
// Description : In this function, function name will be evenOdd. It will take a string as a parameter. It will give as a result, this string's length is even or odd.  
function evenOdd(name) {
    if (name.length % 2 == 0) {
        return 'even'
    }
    else if (name.length % 2 == 1) {
        return 'odd'
    }
    else {

        return 'Please, give a string'
    }
}
// const result = evenOdd(56);
// console.log(result);




// Problem 3: Is Less or Greater than seven
// Description : In this function, function name will be isLGSeven. It will take a number as a parameter. 
function isLGSeven(number) {
    if (isNaN(number)) {
        return 'Please, give me a number';
      }
    let subtraction = number - 7;
    if (subtraction < 7) {
        return subtraction;
    }
    else if (subtraction <= 7) {
        return subtraction * 2;
    }
    else {
        return subtraction * 2;
    }
}
// const result = isLGSeven(15);
// console.log(result);





// Problem 4: Finding Bad data
// Description : In this function, function name will be findingBadData. It will take an array as a parameter. It will give as a result, in this array as many has negative numbers those total amount.

let age = [12, 45, -6, -8,];
function findingBadData(age) {
    if (!Array.isArray(age)) {
        return 'Please, write an Array.';
      }
    let badData = [];
    for (let i = 0; i < age.length; i++) {
        if (age[i] < 0) {
            badData.push(age[i]);
        }
        
    }
    return badData.length;
    

}
// let result = findingBadData(age);
// console.log(result);





// Problem 5: Convert your gems into diamond
// Description : In this function, function name will be gemsToDiamond. It will take three friends gems as three parameter.

function gemsToDiamond(friend1,friend2,friend3){
    if (isNaN(friend1) || isNaN(friend2) || isNaN(friend3)) {
        return 'Please, give me three friends with gem point numbers.';
      }

    let friend1Gems = friend1 * 21;
    let friend2Gems = friend2 * 32;
    let friend3Gems = friend3 * 43;
    let totalGems = friend1Gems + friend2Gems + friend3Gems;
    if(totalGems >= 1000*2){
        let output = totalGems - 2000;
        return output;
    }
    else{
        return totalGems;
    }
}
// let gemsOfFriends = gemsToDiamond( 1, 1, );
// console.log(gemsOfFriends);
