//Q10













//Q9

const mathPassed = 10;
const computerPassed = 20;
const englishPassed = 8;
function logIn() {
    let mathMarks = parseInt(document.querySelector("#math").value);
    let computerMarks = parseInt(document.querySelector("#computer").value);
    let englishMarks = parseInt(document.querySelector("#english").value);
    let isMathPass = mathMarks <= mathPassed;
    let isComputerPass = computerMarks <= computerPassed;
    let isEnglishPass = englishMarks <= englishPassed;
    let isTestPassed = isMathPass || isComputerPass || isEnglishPass;
    if (isTestPassed = true) {
        alert("Test is passed");
    } else {
        alert("Test is failed");
    }
}



//     if ("mathMarks > 10"  "computerMarks>20" + "englishMarks > 8") {
//         alert("You have passed the test");

//     } else {
//         alert("You have failed the test");
//     }
//     function checkComputer() {
//         if (computerMarks > 20) {
//             alert("You have passed the test");

//         } else {
//             alert("You have failed the test");
//         }
//     }
//     function checkEnglish() {
//         if (englishMarks > 8) {
//             alert("You have passed the test");

//         } else {
//             alert("You have failed the test");
//         }
//     }
// }









//Q8


// function logIn() {
//     let userBalance = document.querySelector("input").value;
//     if (userBalance < 10) {
//         alert("Moazziz sarif, aap ka balance khatam honay wala hai ,");
//     } else if (userBalance < 1) {
//         alert("Moazziz Sarif, aap ka mojooda balance iss call k lye naa kaafi hai. Please re-charge karain");
//     } else if (userBalance > 10) {
//         alert("Ring Ring!!");
//     }
// }





//Q7

// function logIn() {
//     let evenUser = document.querySelector("input").value;
//     if (evenUser % 2 == 0) {
//         alert("This is EVEN");
//     } else {
//         alert("This is ODD");
//     }
// }



//Q4
// function logIn() {
//     let millinaire = 1000000;
//     let userMoney = document.querySelector("input").value;
//     if (userMoney >= millinaire) {
//         alert('congratulation! You are a millinaire.');
//     } else {
//         alert("I'm sorry, You are not a millinaire.");
//     }
// }





//Q3

// function logIn() {
//     let temperature = document.querySelector("input").value;

//     if (temperature > 40) {
//         alert('IMPORTANT ANNOUNCEMENT!!! UIT is clossed tomorrow due to heat wave.')
//     }

// }
//Q2

// function logIn() {
//     let name = prompt("Plese enter your name");
//     // let userName = document.querySelector("input").value;
//     let logInName = name;

//     if (name == "") {
//         alert("please log in again");

//     } else {
//         alert("welcome" + name);

//     }
// }
