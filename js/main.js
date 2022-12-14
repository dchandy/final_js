const question = document.querySelector("#question");
const button = document.querySelector("#button_8");
const answer = document.querySelector("#answer");
const ball_div = document.querySelector("#ball_div");
const inball_div = document.querySelector("#inball_div");
let isDrawing = false;
let x = 0;
let y = 0;


function rand_gen (max_number){
    return Math.floor(Math.random()*max_number);
};

function animation_ball (slope) {
    let 
    aux=0;
    max=20;
    let anim_timeout = setTimeout(clear_aux, 2000);
    let anim_timer = setInterval(myTimer, 10);
    function myTimer() {
        aux += 15;
        inball_div.style.left = aux + "px";
        inball_div.style.top = Math.round(slope*aux) + "px";
        if (aux >= ball_div.clientHeight) {
            aux = -150;
        };
    };
    function clear_aux () {
        clearInterval(anim_timer);
        inball_div.style.top = "0px";
        inball_div.style.left = "0px";
        answer.style.fontSize = "20px";
        answer.innerText = ans_pool[rand_gen(15)];
        let anim_timeout2 = setTimeout(clear_aux2, 3000);
    };
    function clear_aux2 () {
        question.value = "";
        question.placeholder = "Ask me anything!!";
        answer.innerText = "8";
        answer.style.fontSize = "100px";
    };
    return;
};

function line (x,y,x1,y1) {
    return [(y1 -y)/(x1 -x),(x1*y-x*y1)/(x1-x)];
}

const ans_pool = {
    0: "It is certain.",
    1: "It is decidedly so.",
    2: "Without a doubt.",
    3: "Yes definetely.",
    4: "You may rely on it.",
    5: "Reply hazy, try again.",
    6: "Ask again later.",
    7: "Better not tell you now.",
    8: "Cannot predict now.",
    9: "Concentrate and ask again.",
    10: "Don't count on it.",
    11: "My reply is no.",
    12: "My sources say no.",
    13: "Outlook not so good.",
    14: "Very doubtful."
}

button.addEventListener("click", () => {
    if (question.value.length >= 2) {
        animation_ball(0);
    }else {
        question.placeholder = "I'm the seer, ask me anything!!";
        answer.innerText = "8";
        answer.style.fontSize = "100px";
    };
});

ball_div.addEventListener("mousedown",function(e){
    x = e.screenX;
    y = e.screenY;
});
ball_div.addEventListener("mouseup",function(e){
    if (question.value.length >= 2) {
        animation_ball(line(x,y,e.screenX,e.screenY)[0]);
    }else {
        question.placeholder = "Don't be afraid, ask me anything!!";
        answer.innerText = "8";
        answer.style.fontSize = "100px";
    };
});

ball_div.addEventListener("mouseleave", () => {
    inball_div.style.top = "0px";
    inball_div.style.left = "0px";
});

question.addEventListener("input", () => {
    answer.innerText = "8";
    answer.style.fontSize = "100px";
});