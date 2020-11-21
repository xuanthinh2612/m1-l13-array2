let arr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

// ===============Bài 1=========
function bai1() {
    for (let i in arr) {
        console.log('row' + i);
        for (let j in arr[i]) {
            console.log(arr[i][j]);
        }
    }
}

// ===============Bài 2=================================================
function bai2() {
    let a = ['c', 's', 'c', '2', '6', '1'];
    let tempt = '';
    document.getElementById('outputbai2').innerHTML = 'Mảng cũ: ' + a;
    for (i = (a.length - 1); i >= 0; i--) {
        tempt = tempt + a[i];
        console.log(i)

    }
    document.getElementById('outputbai22').innerHTML = '<br>Mảng mới: ' + tempt;

}

// ===============Bài 3=================================================
function bai3() {
    let count = 0;
    for (i in arr) {
        for (j in arr[i]) {
            count++
        }
    }
    document.getElementById('outputbai3').innerHTML = 'Số phần tử trong mảng là: ' + count;
}

// ===============Bài 4=================================================
function bai4() {
    let input4 = prompt('Nhập vào chuỗi cần đếm kí tự: ')
    let count = 0;
    // let size = input4.length;
    for (i in input4) {
        count++
    }
    document.getElementById('outputbai4').innerHTML = 'Số phần tử trong mảng là: ' + count;
}

// ===============Bài 5=================================================
function bai5() {
    let password = document.getElementById('password').value;
    let retypepassword = document.getElementById('retypepassword').value;
    for (i in password) {
        if (password[i] !== retypepassword[i] || password.length != retypepassword.length) {
            document.getElementById('outputbai5').innerHTML = 'Nhập lại Password không đúng';
        } else {
            document.getElementById('outputbai5').innerHTML = 'Chúc mừng đã nhập đúng Password';

        }
    }
}

// ===============Bài 5=================================================
function bai6() {
    let input6 = document.getElementById('input6').value;
    let newString = '';
    for (i=0;i<input6.length;i++) {
        // console.log(input6[i])
        if (input6[i] == '-') {
            // console.log(input6[i]);
            newString+='_';
        }
        else {
            newString+=input6[i]
        }
    }
    document.getElementById('outputbai6').innerHTML = newString;

}