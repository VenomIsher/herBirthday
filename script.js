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
let lettreTxt = "I love you Anna <3  gtrhzjhtrhjub r jhnbtujnhtbuhjytriztjygjkjgfdhyktuylkjthytuotyyutyertuytl kutrhetytuyyjt rtyutiukyjthytuyk yjthetyuky jtrhytuy";
let pos = 0;

cat.addEventListener("click", function () {

    messageTexte.textContent =
        "Every time you talked about him, I could tell how much you loved him";

    if (!catclicked)
    {
        count++;
        catclicked = true;
    }

    if (count === 4) {
        button.textContent = "You can now open your present";
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
        button.textContent = "You can now open your present";
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
        button.textContent = "You can now open your present";
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
        button.textContent = "You can now open your present";
        canOpen = true;
    }
});

button.addEventListener("click", function () {

    if (canOpen) {
        setInterval(function () {
            messageTexte.textContent = lettreTxt.slice(0, pos);

            pos++;

        }, 100);
    }
});





