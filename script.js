let dis = document.getElementById('display');
let button = document.querySelectorAll('.btn');
button.forEach(btn => {
    btn.addEventListener("click", function (e) {
        // display.value += value;
        display.value += e.target.innerText;
    })
})
function demo() {
    let dis = document.getElementById('display');
    console.log(dis);
    let multi = display.value;
    // multi = multi.replace("*")
    let res = eval(multi);
    dis.value= res; 
}


function ac(){
    display.value = "";
    // document.getElementById('display').innerText = '';
}