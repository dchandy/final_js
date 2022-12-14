const question = document.querySelector("#question");
const button = document.querySelector("#button_8");
const answer = document.querySelector("#answer");
const ball_div = document.querySelector("#ball_div");
const inball_div = document.querySelector("#inball_div");


function rand_gen (max_number){
    return Math.floor(Math.random()*max_number);
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
        answer.style.fontSize = "20px";
        answer.innerText = ans_pool[rand_gen(15)];
        
    }else {
        question.placeholder = "Ask me anything!!";
        answer.innerText = "8";
        answer.style.fontSize = "100px";
    };
});

ball_div.addEventListener("mouseenter", () => {
    ball_div.style.backgroundColor = "green";
    ball_div.addEventListener("mousemove",function(e){
        console.log(`Movement X: ${e.screenX}, Y: ${e.screenY}`);
        inball_div.style.top = `${e.screenY}`;
    });
});

ball_div.addEventListener("mouseleave", () => {
    ball_div.style.backgroundColor = "black";
});

question.addEventListener("input", () => {
    answer.innerText = "8";
    answer.style.fontSize = "100px";
});