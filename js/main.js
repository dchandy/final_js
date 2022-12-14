const question = document.querySelector("#question");
const button = document.querySelector("#button_8");
const answer = document.querySelector("#answer");
const ball_div = document.querySelector("#ball_div");
const inball_div = document.querySelector("#inball_div");


function rand_gen (max_number){
    return Math.floor(Math.random()*max_number);
};

function animation_ball () {
    let 
    aux=0;
    max=20;
    let anim_timeout = setTimeout(clear_aux, 2000);
    let anim_timer = setInterval(myTimer, 10);
    function myTimer() {
        aux += 15;
        inball_div.style.top = Math.round(aux) + "px";
        if (aux >= ball_div.clientHeight) {
            aux = -150;
        };
    };
    function clear_aux () {
        clearInterval(anim_timer);
        inball_div.style.top = "0px";
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
        animation_ball();
    }else {
        question.placeholder = "Ask me anything!!";
        answer.innerText = "8";
        answer.style.fontSize = "100px";
    };
});

ball_div.addEventListener("mousemove",function(e){
    // let new_top = e.layerY - ball_div.offsetTop - (inball_div.clientHeight);
    // inball_div.style.top = `${new_top}px`;
    // let new_offset = e.offsetX - inball_div.clientWidth/2;
    // inball_div.style.left = `${new_offset}px`;
});

ball_div.addEventListener("mouseenter", () => {

});

ball_div.addEventListener("mouseleave", () => {
    inball_div.style.top = "0px";
    inball_div.style.left = "0px";
});

question.addEventListener("input", () => {
    answer.innerText = "8";
    answer.style.fontSize = "100px";
});