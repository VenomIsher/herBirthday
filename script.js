let cat = document.getElementById("cat");
let catclicked = false;
let jeff = document.getElementById("jeff");
let jeffclicked = false;
let miata = document.getElementById("miata");
let miataclicked = false;
let couple = document.getElementById("couple");
let coupleclicked = false;

let count = 0;
let messageTexte = document.getElementById("message");

let button = document.getElementById("cadeau");
let canOpen = false;

let lettre = document.getElementById("lettre");
let lettreTxt = "Happy birthday! I know you didn't want me to give you anything but it's your birthday after all ! Soo here is a present I made for you. The way we met was a lil original lol but I dont regret anything. The month we spent together was truly beautiful. I hope you enjoyed it as much as I did. Every day I was looking forward to getting a text from you (and I still do). I love the way you get excited abt little stuff. I also think you're a strong girl(or woman idk sry) bc you had the strength to end things when you didnt feel happy and I respect that. Thank you so much for everything we shared together, I really loved being your Gambit. I love you Anna <3";
let pos = 0;

cat.addEventListener("click", function () {

    messageTexte.textContent =
        "Every time you talked about him, I could tell how much you loved him. From where he is, he must be so proud of you";

    if (!catclicked)
    {
        count++;
        catclicked = true;
    }

    if (count === 4) {
        button.textContent = "🎁";
        button.style.fontSize = "50px";
        canOpen = true;
    }

});

jeff.addEventListener("click", function () {

    messageTexte.textContent =
        "At first I saw jeff as a random hero but now through the way you love him he means a lot to me (still very satisfying to kill tho)";

    if (!jeffclicked) {
        count++;
        jeffclicked = true;
    }

    if (count === 4) {
        button.textContent = "🎁";
        button.style.fontSize = "50px";
        canOpen = true;
    }
});

miata.addEventListener("click", function () {

    messageTexte.textContent =
        "The first time I saw a miata was in cars and they used to remind me of that film. But now they remind me of you";

    if (!miataclicked) {
        count++;
        miataclicked = true;
    }

    if (count === 4) {
        button.textContent = "🎁";
        button.style.fontSize = "50px";
        canOpen = true;
    }
});

couple.addEventListener("click", function () {

    messageTexte.textContent =
        "Being your gambit was one of the best things that happened to me. Thank you so much";

    if (!coupleclicked) {
        count++;
        coupleclicked = true;
    }

    if (count === 4) {
        button.textContent = "🎁";
        button.style.fontSize = "50px";
        canOpen = true;
    }
});

button.addEventListener("click", function () {

    if (canOpen) {
        setInterval(function () {
            messageTexte.textContent = lettreTxt.slice(0, pos);

            pos++;

        }, 75);
    }
});
