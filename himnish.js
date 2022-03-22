var as = "";
name_1 = localStorage.getItem("name1");
name_2 = localStorage.getItem("name2");
score_1 = 0;
score_2 = 0;
document.getElementById("name-1").innerHTML = name_1 + ":- ";
document.getElementById("name-2").innerHTML = name_2 + ":- ";

document.getElementById("score-1").innerHTML = score_1;
document.getElementById("score-2").innerHTML = score_2;

document.getElementById("q").innerHTML = "QUESTIONER:- " + name_1;
document.getElementById("a").innerHTML = "ANSWERER:- " + name_2;

var ran = Math.round(Math.random() * 3);

function send() {
    no_1 = document.getElementById("no1").value;
    no_2 = document.getElementById("no2").value;

    if (no_1 == "" || no_2 == "") {
        document.getElementById("bah").innerHTML = "PLEASE ENTER A NUMBER";
    } else {
        if (ran == 0) {
            as = " - ";
            act_ans = parseInt(no_1) - parseInt(no_2);
        }
        if (ran == 1) {
            as = " + ";
            act_ans = parseInt(no_1) + parseInt(no_2);
        }
        if (ran == 2) {
            as = " x ";
            act_ans = parseInt(no_1) * parseInt(no_2);
        }
        if (ran == 3) {
            as = " / ";
            act_ans = parseInt(no_1) / parseInt(no_2);
        }

        qword = "<h4 id='word_display'> Q. " + no_1 + as + no_2 + "</h4>";
        input = "<br>A. <input type='number' id='input_check_box'>";
        button = "<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";
        row = qword + input + button;
        document.getElementById("output").innerHTML = row;
        document.getElementById("no1").value = "";
        document.getElementById("no2").value = "";
    }
}
q_turn = "1";
a_turn = "2";

function check() {
    ans = document.getElementById("input_check_box").value;
    if (ans == act_ans) {
        if (a_turn == "1") {
            score_1 = score_1 + 1;
            document.getElementById("score-1").innerHTML = score_1;
        } else {
            score_2 = score_2 + 1;
            document.getElementById("score-2").innerHTML = score_2;
        }
        document.getElementById("output").innerHTML = "<img src='giphy.gif'>";
        window.setTimeout(bah, 3000);
    } else {
        document.getElementById("output").innerHTML = "<img src='poCtNRk.gif'>";
        window.setTimeout(bah, 3000);
    }

    function bah() {
        document.getElementById("output").innerHTML = "";
    }

    if (q_turn == "1") {
        q_turn = "2";
        document.getElementById("q").innerHTML = "QUESTIONER:- " + name_2;
    } else {
        q_turn = "1";
        document.getElementById("q").innerHTML = "QUESTIONER:- " + name_1;
    }

    if (a_turn == "1") {
        a_turn = "2";
        document.getElementById("a").innerHTML = "ANSWERER:- " + name_2;
    } else {
        a_turn = "1";
        document.getElementById("a").innerHTML = "ANSWERER:- " + name_1;
    }
}