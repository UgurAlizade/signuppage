let button = document.getElementById("button");
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let wrongp = document.getElementById('wrongp');
let wrongp2 = document.getElementById('wrongp2');
let input2check;
let input2check2;

let intervalId;

function done() {
    intervalId = setInterval(() => {
        let password = input2.value;

        if (password.length >= 8) {
            wrongp.innerHTML = "<i class='fa-solid fa-circle-check' id='right'></i> Password is at least 8 characters long.";
            input2check = true;
        } else {
            wrongp.innerHTML = '<i class="fa-solid fa-circle-xmark" id="wrong"></i> Password is at least 8 characters long.';
            input2check = false;
        }

        let includesNumber = false;
        for (let i = 0; i < password.length; i++) {
            if (!isNaN(password[i]) && password[i] !== ' ') {
                includesNumber = true;
                break;
            }
        }
        
        if (includesNumber) {
            wrongp2.innerHTML = "<i class='fa-solid fa-circle-check' id='right'></i> Password includes at least 1 number.";
            input2check2 = true;
        } else {
            wrongp2.innerHTML = '<i class="fa-solid fa-circle-xmark" id="wrong"></i> Password includes at least 1 number.';
            input2check2 = false;
        }

    }, 1000);
}

function stopChecking() {
    clearInterval(intervalId);
}

let users = [];
let id = 1;


button.addEventListener("click",function() {
    let user = {
        id: users.length + 1,
        name: input1.value,
        password: input2.value
    };

    users.push(user);
    console.log(users);

    input1.value = "";
    input2.value = "";
    input2check = false;
    input2check2 = false;
    wrongp.innerHTML = '<i class="fa-solid fa-circle-xmark" id="wrong"></i> Password is at least 8 characters long.';
    wrongp2.innerHTML = "<i class='fa-solid fa-circle-xmark' id='wrong'></i> Password includes at least 1 number.";
})