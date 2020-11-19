//=============Bai 1================

function joinColor() {
    let myColor = ["Red", "Green", "White", "Black"];
    let size = myColor.length;
    let string = '';
    for (let i = 0; i < size; i++) {
        string = string + myColor[i] + ';';
    }
    document.getElementById('output1').innerText = string;

}


// ===============Bài 2===================
function addSymbol() {
    let myArr = prompt('Nhập vào số cần kiểm tra: ')
    // let myArr = ['025468'];
    myArr = myArr.toString();
    let myNewArr = myArr[0];
    for (let i = 1; i < myArr.length; i++) {
        if (myArr[i - 1] % 2 == 0 && myArr[i] % 2 == 0) {
            myNewArr = myNewArr + '-' + myArr[i];
        } else {
            myNewArr = myNewArr + myArr[i];
        }
    }
    console.log(myNewArr.toString())
}

// =====================Bài 3==========
function typechange() {
    let bigAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let smallAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let inputString = prompt('Nhập vào chuỗi cần chuyển:')
    let size = inputString.length;
    let bigSize = bigAlphabet.length;

    let resultString = new Array();
    for (i = 0; i < size; i++) {
        if (bigAlphabet.indexOf(inputString[i])!==-1) {
            resultString.push(inputString[i].toLowerCase())
        }
        else if (smallAlphabet.indexOf(inputString[i])!==-1) {
            resultString.push(inputString[i].toUpperCase())
        }
        else {
            resultString.push(inputString[i])
        }
    }
    console.log(resultString.join(''));
}
