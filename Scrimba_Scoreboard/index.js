let home_score_num = Number(document.getElementById("home_score_num").innerHTML)
let guest_score_num = Number(document.getElementById("guest_score_num").innerHTML)

// Home adding Buttons
function HOME_add_1 () {
    home_score_num = home_score_num + 1;
    document.getElementById("home_score_num").innerHTML = home_score_num;
}

function HOME_add_2 () {
    home_score_num = home_score_num + 2;
    document.getElementById("home_score_num").innerHTML = home_score_num;
}

function HOME_add_3 () {
    home_score_num = home_score_num + 3;
    document.getElementById("home_score_num").innerHTML = home_score_num;
}

// Guest adding Buttons
function GUEST_add_1 () {
    guest_score_num = guest_score_num + 1;
    document.getElementById("guest_score_num").innerHTML = guest_score_num;
}

function GUEST_add_2 () {
    guest_score_num = guest_score_num + 2;
    document.getElementById("guest_score_num").innerHTML = guest_score_num;
}

function GUEST_add_3 () {
    guest_score_num = guest_score_num + 3;
    document.getElementById("guest_score_num").innerHTML = guest_score_num;
}

// // function check
// function myFunction () {
//     document.getElementById("check").innerHTML = guest_score_num;
// }

