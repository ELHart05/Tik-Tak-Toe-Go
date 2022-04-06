const b11 = document.querySelector('.b11');
const b12 = document.querySelector('.b12');
const b13 = document.querySelector('.b13');
const b21 = document.querySelector('.b21');
const b22 = document.querySelector('.b22');
const b23 = document.querySelector('.b23');
const b31 = document.querySelector('.b31');
const b32 = document.querySelector('.b32');
const b33 = document.querySelector('.b33');
const image = document.querySelector('img');
const p = document.querySelector('.change-p');
const h2 = document.querySelector('h2');
const Winp = document.querySelector('.win-p');
const Resp = document.querySelector('.Respawn');
const Xspan = document.querySelector('.X');
const Ospan = document.querySelector('.O');
const Drawspan = document.querySelector('.Draw');
const ReplayBtn = document.querySelector('.replay');

let turnTime = 0;
row1 = [];
row2 = [];
row3 = [];
col1 = [];
col2 = [];
col3 = [];
cross1 = [];
cross2 = [];
OCounter = 0;
XCounter = 0;
DrawCounter = 0;

function CountDown(element, time) {
    var timeleft = time;
    var UpdateTime = setInterval(function () {
        timeleft -= 1;
        element.textContent = timeleft + 's';
        if (timeleft <= 0) {
            clearInterval(UpdateTime);
        }
        if (timeleft % 2 == 0) {
            element.classList.add('span');
            element.classList.remove('spancolorchange');
        } else {
            element.classList.add('spancolorchange');
            element.classList.remove('span');
        }
    }, 1000);
}

function OnlyOneValue(array, value) {
    let c = 0;
    if (array.length == 3) {
        for (let i = 0; i <= array.length; i++) {
            if (array[i] == value) {
                c += 1;
            }
        }
        if (c == array.length) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function Freez(button) {
    button.disabled = true;
    button.style.boxShadow = 'none';
}

function UnFreez(button) {
    button.disabled = false;
    button.style.boxShadow = '';
}

function FreezAll() {
    Freez(b11);
    Freez(b12);
    Freez(b13);
    Freez(b21);
    Freez(b22);
    Freez(b23);
    Freez(b31);
    Freez(b32);
    Freez(b33);
}

function UnFreezAll() {
    UnFreez(b11);
    UnFreez(b12);
    UnFreez(b13);
    UnFreez(b21);
    UnFreez(b22);
    UnFreez(b23);
    UnFreez(b31);
    UnFreez(b32);
    UnFreez(b33);
}

function Winner() {
    if (((OnlyOneValue(col1, 'o')) == true) || ((OnlyOneValue(col2, 'o') == true)) || ((OnlyOneValue(col3, 'o')) == true) || ((OnlyOneValue(row1, 'o')) == true) || ((OnlyOneValue(row2, 'o')) == true) || ((OnlyOneValue(row3, 'o')) == true) || ((OnlyOneValue(cross1, 'o')) == true) || ((OnlyOneValue(cross2, 'o')) == true)) {
        image.setAttribute('src', 'images/O.png');
        image.classList.add('somemargin');
        p.textContent = 'is the winner';
        p.classList.add('spancolorchange');
        FreezAll();
        OCounter += 1;
        Ospan.textContent = OCounter;
        Resp.textContent = 'Respawn in ';
        Winp.textContent = '5s';
        Winp.classList.add('spancolorchange');
        Freez(ReplayBtn);
        CountDown(Winp, 5);
        return true;
    } else if (((OnlyOneValue(col1, 'x')) == true) || ((OnlyOneValue(col2, 'x')) == true) || ((OnlyOneValue(col3, 'x')) == true) || ((OnlyOneValue(row1, 'x')) == true) || ((OnlyOneValue(row2, 'x')) == true) || ((OnlyOneValue(row3, 'x')) == true) || ((OnlyOneValue(cross1, 'x')) == true) || ((OnlyOneValue(cross2, 'x')) == true)) {
        image.setAttribute('src', 'images/X.png');
        p.textContent = 'is the winner';
        p.classList.add('span');
        FreezAll();
        XCounter += 1;
        Xspan.textContent = XCounter;
        Resp.textContent = 'Respawn in ';
        Winp.textContent = '5s';
        Winp.classList.add('spancolorchange');
        Freez(ReplayBtn);
        CountDown(Winp, 5);
        return true;
    } else {
        return false;
    }
}

function Draw() {
    if ((row1.length == 3) && (row2.length == 3) && (row3.length == 3) && (col1.length == 3) && (col2.length == 3) && (col3.length == 3) && (cross1.length == 3) && (cross2.length == 3)) {
        image.style.display = 'none';
        p.textContent = 'No winner spotted';
        FreezAll();
        DrawCounter += 1;
        Drawspan.textContent = DrawCounter;
        Resp.textContent = 'Respawn in ';
        Winp.textContent = '5s';
        Winp.classList.add('spancolorchange');
        Freez(ReplayBtn);
        CountDown(Winp, 5);
        return true;
    } else {
        return false;
    }
}

function AddButtonWinner(element1, element2, element3) {
    element1.classList.add('buttonWinner');
    element2.classList.add('buttonWinner');
    element3.classList.add('buttonWinner');
}

function RemoveBG(element) {
    element.classList.remove('backgroundO');
    element.classList.remove('backgroundX');
    element.classList.remove('buttonWinner');
}

function RemoveBGAll() {
    RemoveBG(b11);
    RemoveBG(b12);
    RemoveBG(b13);
    RemoveBG(b21);
    RemoveBG(b22);
    RemoveBG(b23);
    RemoveBG(b31);
    RemoveBG(b32);
    RemoveBG(b33);
}

function ReplayAll() {
    turnTime = 0;
    row1 = [];
    row2 = [];
    row3 = [];
    col1 = [];
    col2 = [];
    col3 = [];
    cross1 = [];
    cross2 = [];
    RemoveBGAll();
    UnFreezAll();
    UnFreez(ReplayBtn);
    Winp.style.display = image.style.display = 'flex';
    image.classList.remove('somemargin');
    image.setAttribute('src', 'images/X.png');
    p.textContent = "'s turn now!";
    p.classList.remove('span');
    p.classList.remove('spancolorchange');
    Resp.textContent = Winp.textContent = '';
}

function WinnerShown() {
    if ((OnlyOneValue(row1, 'x')) || (OnlyOneValue(row1, 'o'))) {
        AddButtonWinner(b11, b12, b13);
    } else if ((OnlyOneValue(row2, 'x')) || (OnlyOneValue(row2, 'o'))) {
        AddButtonWinner(b21, b22, b23);
    } else if ((OnlyOneValue(row3, 'x')) || (OnlyOneValue(row3, 'o'))) {
        AddButtonWinner(b31, b32, b33);
    } else if ((OnlyOneValue(col1, 'x')) || (OnlyOneValue(col1, 'o'))) {
        AddButtonWinner(b11, b21, b31);
    } else if ((OnlyOneValue(col2, 'x')) || (OnlyOneValue(col2, 'o'))) {
        AddButtonWinner(b12, b22, b32);
    } else if ((OnlyOneValue(col3, 'x')) || (OnlyOneValue(col3, 'o'))) {
        AddButtonWinner(b13, b23, b33);
    } else if ((OnlyOneValue(cross1, 'x')) || (OnlyOneValue(cross1, 'o'))) {
        AddButtonWinner(b11, b22, b33);
    } else if ((OnlyOneValue(cross2, 'x')) || (OnlyOneValue(cross2, 'o'))) {
        AddButtonWinner(b13, b22, b31);
    }
}

ReplayBtn.addEventListener('click', function Respawn() {
    OCounter = XCounter = DrawCounter = 0;
    Xspan.textContent = Drawspan.textContent = Ospan.textContent = '0';
    ReplayAll();
    Resp.textContent = Winp.textContent = '';
    Winp.style.display = 'none';
})

b11.addEventListener('click', function () {
    turnTime += 1;
    Freez(b11);
    if (turnTime % 2 == 0) {
        image.setAttribute('src', 'images/X.png');
        b11.classList.add('backgroundO');
        row1.push('o');
        col1.push('o');
        cross1.push('o');
    } else {
        image.setAttribute('src', 'images/O.png');
        b11.classList.add('backgroundX');
        row1.push('x');
        col1.push('x');
        cross1.push('x');
    }
    WinnerShown()
    if ((Winner() == true) || (Draw() == true)) {
        setTimeout(ReplayAll, 6000);
    }
})

b12.addEventListener('click', function () {
    turnTime += 1;
    Freez(b12);
    if (turnTime % 2 == 0) {
        image.setAttribute('src', 'images/X.png');
        b12.classList.add('backgroundO');
        row1.push('o');
        col2.push('o');
    } else {
        image.setAttribute('src', 'images/O.png');
        b12.classList.add('backgroundX');
        row1.push('x');
        col2.push('x');
    }
    WinnerShown()
    if ((Winner() == true) || (Draw() == true)) {
        setTimeout(ReplayAll, 6000);
    }
})

b13.addEventListener('click', function () {
    turnTime += 1;
    Freez(b13);
    if (turnTime % 2 == 0) {
        image.setAttribute('src', 'images/X.png');
        b13.classList.add('backgroundO');
        row1.push('o');
        col3.push('o');
        cross2.push('o');
    } else {
        image.setAttribute('src', 'images/O.png');
        b13.classList.add('backgroundX');
        row1.push('x');
        col3.push('x');
        cross2.push('x');
    }
    WinnerShown()
    if ((Winner() == true) || (Draw() == true)) {
        setTimeout(ReplayAll, 6000);
    }
})

b21.addEventListener('click', function () {
    turnTime += 1;
    Freez(b21);
    if (turnTime % 2 == 0) {
        image.setAttribute('src', 'images/X.png');
        b21.classList.add('backgroundO');
        row2.push('o');
        col1.push('o');
    } else {
        image.setAttribute('src', 'images/O.png');
        b21.classList.add('backgroundX');
        row2.push('x');
        col1.push('x');
    }
    WinnerShown()
    if ((Winner() == true) || (Draw() == true)) {
        setTimeout(ReplayAll, 6000);
    }
})

b22.addEventListener('click', function () {
    turnTime += 1;
    Freez(b22);
    if (turnTime % 2 == 0) {
        image.setAttribute('src', 'images/X.png');
        b22.classList.add('backgroundO');
        row2.push('o');
        col2.push('o');
        cross1.push('o');
        cross2.push('o');
    } else {
        image.setAttribute('src', 'images/O.png');
        b22.classList.add('backgroundX');
        row2.push('x');
        col2.push('x');
        cross1.push('x');
        cross2.push('x');
    }
    WinnerShown()
    if ((Winner() == true) || (Draw() == true)) {
        setTimeout(ReplayAll, 6000);
    }
})

b23.addEventListener('click', function () {
    turnTime += 1;
    Freez(b23);
    if (turnTime % 2 == 0) {
        image.setAttribute('src', 'images/X.png');
        b23.classList.add('backgroundO');
        row2.push('o');
        col3.push('o');
    } else {
        image.setAttribute('src', 'images/O.png');
        b23.classList.add('backgroundX');
        row2.push('x');
        col3.push('x');
    }
    WinnerShown()
    if ((Winner() == true) || (Draw() == true)) {
        setTimeout(ReplayAll, 6000);
    }
})

b31.addEventListener('click', function () {
    turnTime += 1;
    Freez(b31);
    if (turnTime % 2 == 0) {
        image.setAttribute('src', 'images/X.png');
        b31.classList.add('backgroundO');
        row3.push('o');
        col1.push('o');
        cross2.push('o');
    } else {
        image.setAttribute('src', 'images/O.png');
        b31.classList.add('backgroundX');
        row3.push('x');
        col1.push('x');
        cross2.push('x');
    }
    WinnerShown()
    if ((Winner() == true) || (Draw() == true)) {
        setTimeout(ReplayAll, 6000);
    }
})

b32.addEventListener('click', function () {
    turnTime += 1;
    Freez(b32);
    if (turnTime % 2 == 0) {
        image.setAttribute('src', 'images/X.png');
        b32.classList.add('backgroundO');
        row3.push('o');
        col2.push('o');
    } else {
        image.setAttribute('src', 'images/O.png');
        b32.classList.add('backgroundX');
        row3.push('x');
        col2.push('x');
    }
    WinnerShown()
    if ((Winner() == true) || (Draw() == true)) {
        setTimeout(ReplayAll, 6000);
    }
})

b33.addEventListener('click', function () {
    turnTime += 1;
    Freez(b33);
    if (turnTime % 2 == 0) {
        image.setAttribute('src', 'images/X.png');
        b33.classList.add('backgroundO');
        row3.push('o');
        col3.push('o');
        cross1.push('o');
    } else {
        image.setAttribute('src', 'images/O.png');
        b33.classList.add('backgroundX');
        row3.push('x');
        col3.push('x');
        cross1.push('x');
    }
    WinnerShown()
    if ((Winner() == true) || (Draw() == true)) {
        setTimeout(ReplayAll, 6000);
    }
})