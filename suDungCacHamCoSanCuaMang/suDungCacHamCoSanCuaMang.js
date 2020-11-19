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
    let bigAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '];
    let smallAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
    let inputString = prompt('Nhập vào chuỗi cần chuyển:')
    let size = inputString.length;
    let bigSize = bigAlphabet.length;

    let resultString = new Array();
    for (i = 0; i < size; i++) {
        inputString[i];
        for (j = 0; j < bigSize; j++) {
            if (inputString[i] === bigAlphabet[j]) {
                resultString.push(smallAlphabet[j]);
            } else {
                if (inputString[i] === smallAlphabet[j]) {
                    resultString.push(bigAlphabet[j]);
                }

            }
        }
    }
    console.log(resultString.join(''));
}
