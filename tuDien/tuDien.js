let engStore = ['bird', 'fish', 'flies', 'ant', 'lion', 'tiger', 'elephant', 'bear'];
let vietStore = ['con chim', 'con cá', 'con ruồi', 'con kiến', 'con sư tử', 'con hổ', 'con voi', 'con gấu'];
let output = document.getElementById('output');
let size = engStore.length;


function dich() {
    let input = document.getElementById("inputid").value;
    let out = [];
    for (i = 0; i < size; i++) {
        if (input == engStore[i]) {
            out.push(vietStore[i])
            output.innerHTML = out;
            break;
        }

    }
    if (input!==engStore[i]) {
        alert('Không tìm thấy từ vừa nhập')

    }

}
