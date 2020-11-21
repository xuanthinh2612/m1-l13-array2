// ================================Bài 1===================
let arr1 = [28, 7, 9, 6, 55, 8, 22, 23, 22, 3, 26, 325, 15, 14, 15];
let arr2 = [123, 411, 921, 426, 155, 318, 222, 213, 232, 943, 526, 325, 615, 114, 115];
let size = arr1.length;
let size2 = arr2.length;

function bai1() {
    let count = 0;
    let outputstringbai1 = [];
    for (i = 0; i < size; i++) {
        if (arr1[i] > 10) {
            count++;
            outputstringbai1.push(arr1[i]);
        }
    }
    document.getElementById('outputbai1').innerHTML = 'Có tất cả: ' + count + ' Phần tử  lớn hơn 10 <br>'
        + 'Gồm các số: ' + outputstringbai1;
}

// ========================Bài 2 ==============================
function bai2() {
    let max = arr1[0];
    let j;
    for (i = 1; i < size; i++) {
        if (max < arr1[i]) {
            max = arr1[i];
            j = i;
        }
    }
    document.getElementById('outputbai2').innerHTML = 'Giá trị lớn nhất là: ' + max + ' tại vị trí: ' + j;
}

// ========================Bài 3 ==============================
function bai3() {
    let max = arr1[0];
    let j = arr1[0]
    for (i = 1; i < size; i++) {
        j += arr1[i]
        if (max < arr1[i]) {
            max = arr1[i];
        }
    }
    let average = j / size;
    document.getElementById('outputbai3').innerHTML = 'Giá trị lớn nhất là: ' + max + ' Giá trị trung bình: ' + average;

}

//=================Bài 4===========================================
function bai4() {
    let arrtempt = arr1.toString();
    for (i = 0; i < (size - 1 / 2); i++) {
        let tempt = arr1[i];
        arr1[i] = arr1[(size - 1 - i)];
        arr1[size - 1 - i] = tempt;

    }
    document.getElementById('outputbai4').innerHTML = 'Hàm cũ: ' + arrtempt + '<br> ' + 'Hàm mới là: ' + arr1;

}

//===================Bài 5======================
function bai5() {
    let count = 0;
    for (i = 0; i < size - 1; i++) {
        if (arr1[i] < 0) {
            count++
        }
    }
    document.getElementById('outputbai5').innerHTML = 'Có: ' + count + ' Số nguyên âm trong chuỗi'

}

// =================Bài 6==============
function bai6() {
    let input = document.getElementById('inputbai6').value;
    for (i = 0; i < size; i++) {
        if (input == arr1[i]) {
            alert(input + ' : is in the array')
            break;
        }
    }
    if (i == size) {
        alert(input + ' : is not in the array')
    }
}

//================ Bài 7====================
function bai7() {
    let count = 0;
    let input = +prompt('Nhập vào giá trị muốn xóa');
    for (i = 0; i < size; i++) {
        if (input == arr1[i]) {
            for (let k = i; k < size; k++) {
                arr1[k] = arr1[k + 1]
            }
            arr1[size - 1] = 0;
            i--
            count++
        }
    }
    if (count > 0) {
        alert('Có tất cả: ' + count + ' số ' + input + ' bị xóa')
        alert(' Chuỗi mới là: ' + arr1)

    } else {
        alert(' Không tìm thấy ')
    }
}

//================Bài 8==============
function bai8() {
    let tempt;
    for (i = 0; i < size; i++) {
        for (j = i + 1; j < size; j++) {
            if (arr1[i] < arr1[j]) {
                tempt = arr1[i];
                arr1[i] = arr1[j]
                arr1[j] = tempt;
            }
        }
    }
    document.getElementById('outputbai8').innerHTML = arr1;
}

//================Bài 9==============
function bai9() {
    let c = new Array();
    c = arr1;
    let sumsize=size
    for (i=0;i<size2;i++) {
        c[sumsize] = arr2[i];
        sumsize++
    }
    document.getElementById('outputbai9').innerHTML= c;
    console.log(sumsize)
}