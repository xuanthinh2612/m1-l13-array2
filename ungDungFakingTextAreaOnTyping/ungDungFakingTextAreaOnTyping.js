let arr = ['', 'I', ' ', 'A', 'M', ' ', 'F', 'U', 'C', 'K', 'I', 'N', 'G', ' ', 'S', 'T', 'U', 'P', 'I', 'D', '!', '!', '!'];
let size = arr.length;
text = ''

function fakingText() {
    let j = document.getElementById('input').value.length;
    if (j > 0) {
        for (i = 0; i <= j; i++) {
            text = text + arr[i];
            if (i == size) {
                document.getElementById('input').value = '';
                text = '';
            }
        }
    }
    document.getElementById('input').value = text;
    text = '';
    setTimeout("fakingText()", 100);


}
