let img;
let elm;
let rollcube;

// Game buttons object start
let obj = {
    res: document.getElementById("res"),
    cube: document.getElementById("cube"),
    step: document.getElementById("step"),
    note: document.getElementById("note"),
    note2: document.getElementById("note2"),
    option: document.getElementById("option"),
    changeToEng: document.getElementById("eng"),
    changeToHeb: document.getElementById("heb"),
    chooseNum: document.getElementById("chooseNum"),
    title: document.getElementById("Title")
};
// Game buttons object end


// cubes picture and Attribute start
rollcube = document.createElement("img");
rollcube.setAttribute("src", "images/cube.png");
rollcube.setAttribute("height", "120");
rollcube.setAttribute("width", "120");
let pic = document.getElementById("rollcube")
pic.appendChild(rollcube);
// cubes picture and Attribute end


//AddEventListener that change the game to Heb start
obj.changeToHeb.addEventListener('click', function () {
    p1.button.textContent = "שחקן 1";
    p2.button.textContent = "שחקן 2";
    obj.chooseNum.innerHTML = "?תבחר על כמה לשחק, <br/> ואז תלחץ על הקוביות";
    obj.res.textContent = "אפס משחק";
    obj.title.textContent = "משחק הקוביות";

    obj.cube.addEventListener('click', function () {
        obj.random = Math.floor(Math.random() * 4) + 1;
        obj.step.textContent = obj.random;
        if (obj.random == 1) {
            obj.note2.innerText = obj.random + " אתה צריך להתקדם " + " צעד";
            obj.note.textContent = String.fromCodePoint(128562);
        } else if (obj.random == 2) {
            obj.note2.innerText = "אתה צריך להתקדם " + obj.random + " צעדים";
            obj.note.textContent = String.fromCodePoint(128578);
        } else if (obj.random == 3) {
            obj.note2.innerText = "אתה צריך להתקדם " + obj.random + " צעדים";
            obj.note.textContent = String.fromCodePoint(128512);
        } else if (obj.random == 4) {
            obj.note2.innerText = "אתה צריך להתקדם " + obj.random + " צעדים";
            obj.note.textContent = String.fromCodePoint(128526);
        }
    })

});
//AddEventListener that change the game to Heb end


//AddEventListener that change the game to english start
obj.changeToEng.addEventListener('click', function () {
    p1.button.textContent = "Player 1";
    p2.button.textContent = "Player 2";
    obj.chooseNum.innerHTML = "Select a number to play ,<br/>Then press on the dice";
    obj.res.textContent = "Reset";
    obj.title.textContent = "Dice Game";

    obj.cube.addEventListener('click', function () {
        obj.random = Math.floor(Math.random() * 4) + 1;
        obj.step.textContent = obj.random;
        if (obj.random == 1) {
            obj.note2.innerText = "You need to move forward " + obj.random + " Step";
            obj.note.textContent = String.fromCodePoint(128562);
        } else if (obj.random == 2) {
            obj.note2.innerText = "You need to move forward " + obj.random + " Step";
            obj.note.textContent = String.fromCodePoint(128578);
        } else if (obj.random == 3) {
            obj.note2.innerText = "You need to move forward " + obj.random + " Step";
            obj.note.textContent = String.fromCodePoint(128512);
        } else if (obj.random == 4) {
            obj.note2.innerText = "You need to move forward " + obj.random + " Step";
            obj.note.textContent = String.fromCodePoint(128526);
        }
    })
});
//AddEventListener that change the game to english end



//Player function constructor start
let player = function (player, button, score) {
    this.player = player;
    this.button = button;
    this.score = score;
};
//Player function constructor end


//Player 1 settings start
let p1 = new player(document.getElementById("player1"), document.getElementById("btn1"), 0);
//Player 1 settings end

//player 2 settings start
let p2 = new player(document.getElementById("player2"), document.getElementById("btn2"), 0,);
//player 2 settings end


//Anonymous function disables all buttons start
(function () {
    if (p1.button.disabled == false) {
        p2.button.disabled = true;
        p1.button.disabled = true;
        obj.cube.disabled = true;
        obj.option = disabled = true;
        obj.res.disabled = true;
        rollcube.setAttribute('style', 'display: none');
    }
})();
//Anonymous function disables all buttons end

// Function activates the game start
function clic() {
    p2.button.disabled = false;
    p1.button.disabled = false;
    obj.cube.disabled = false;
    obj.option = disabled = false;
    img = document.createElement("img");
    obj.res.disabled = false;
    rollcube.removeAttribute('style', 'display: none');
};
// Function activates the game end


//Anonymous function that create the select option tag start
(function () {
    elm = document.getElementById('foo');
    df = document.createDocumentFragment();
    for (var i = 0;i <= 20;i++) {
        let option = document.createElement('option');
        option.value = i;
        option.appendChild(document.createTextNode(i));
        df.appendChild(option);
    }
    elm.appendChild(df);
}());
//Anonymous function that create the select option tag end


// Create a random number and adding an emoji by the number start
obj.cube.addEventListener('click', function () {
    obj.random = Math.floor(Math.random() * 4) + 1;
    obj.step.textContent = obj.random;
    if (obj.random == 1) {

        obj.note2.innerText = "You need to move forward " + obj.random + " Step";
        obj.note.textContent = String.fromCodePoint(128562);
    } else if (obj.random == 2) {
        obj.note2.innerText = "You need to move forward " + obj.random + " Steps";
        obj.note.textContent = String.fromCodePoint(128578);
    } else if (obj.random == 3) {
        obj.note2.innerText = "You need to move forward " + obj.random + " Steps";
        obj.note.textContent = String.fromCodePoint(128512);
    } else if (obj.random == 4) {
        obj.note2.innerText = "You need to move forward " + obj.random + " Steps";
        obj.note.textContent = String.fromCodePoint(128526);
    }
});
// Create a random number and adding an emoji by the number end


// Reset the game start
res.addEventListener('click', function () {
    for (let p of [p1, p2]) {
        p.player.textContent = 0;
        p.player.style.color = "black"
        p.score = 0;
        p.button.disabled = true;
    }
    obj.cube.disabled = true;
    x = 0;
    elm.value = "";
    obj.step.textContent = 0;
    obj.note.textContent = "";
    obj.note2.textContent = "";
    src = document.getElementById("x");
    rollcube.setAttribute('style', 'display: none');
    src.removeChild(img);
    elm.disabled = false;
});
// Reset the game end



// P1 call to gameover function start
p1.button.addEventListener('click', function () {
    if (elm.value === "0" || elm.value === "") {
        alert("you need to select number to play \n אתה צריך לבחור על כמה לשחק")
    } else {
        GameOver(p1, p2)
    }

});
// P1 call to gameover function end


// P2 call to gameover function start
p2.button.addEventListener('click', function () {
    if (elm.value === "0" || elm.value === "") {
        alert("you need to select number to play\nאתה צריך לבחור על כמה לשחק")
    } else {
        GameOver(p2, p1)
    }

});
// P2 call to gameover function end


// A function that passes over both players and performs manipulation on each of them in turn start
function GameOver(player, opponet) {
    player.score++;
    player.player.textContent = player.score;

    if (player.score >= elm.value) {
        player.player.style.color = "green"
        if (obj.title.textContent === "משחק הקוביות") { player.player.textContent = `${player.button.textContent} ניצח`; } else { player.player.textContent = `${player.button.textContent} win`; }
        img.setAttribute("src", "images/source.gif");
        img.setAttribute("height", "372");
        img.setAttribute("width", "355");
        let src = document.getElementById("x");
        src.appendChild(img);
        opponet.player.style.color = "red"
        if (obj.title.textContent === "משחק הקוביות") { opponet.player.textContent = `${opponet.button.textContent} הפסיד`; } else { opponet.player.textContent = `${opponet.button.textContent} lose` }
        player.button.disabled = true;
        opponet.button.disabled = true;
        elm.disabled = true;
    }
};
// A function that passes over both players and performs manipulation on each of them in turn end








