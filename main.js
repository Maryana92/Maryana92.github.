function isElementDisplayed(el) {
    return el.getBoundingClientRect().bottom - screen.height < 100
}

function func1() {
    let sq = document.getElementById('square1');
    if (isElementDisplayed(sq)) {
        sq.style.transform = "rotate(0deg)"
    }
}

function func2() {
    let sq = document.getElementById('square2');
    if (isElementDisplayed(sq)) {
        sq.style.transform = "rotate(-90deg)"
    }
}

function func3() {
    let sq = document.getElementById('square3');
    if (isElementDisplayed(sq)) {
        sq.style.transform = "rotate(-180deg)"
    }
}

function func4() {
    let sq = document.getElementById('square4');
    if (isElementDisplayed(sq)) {
        sq.style.transform = "rotate(-240deg)"
    }
}





function func11() {
    let sq = document.getElementById('square11');
    if (isElementDisplayed(sq)) {
        sq.style.transform = "rotate(0deg)"
    }
}

function func12() {
    let sq = document.getElementById('square12');
    if (isElementDisplayed(sq)) {
        sq.style.transform = "rotate(-90deg)"
    }
}

function func13() {
    let sq = document.getElementById('square13');
    if (isElementDisplayed(sq)) {
        sq.style.transform = "rotate(-180deg)"
    }
}

function func14() {
    let sq = document.getElementById('square14');
    if (isElementDisplayed(sq)) {
        sq.style.transform = "rotate(-220deg)"
    }
}




function func21() {
    let sq = document.getElementById('square21');
    if (isElementDisplayed(sq)) {
        sq.style.transform = "rotate(0deg)"
    }
}

function func22() {
    let sq = document.getElementById('square22');
    if (isElementDisplayed(sq)) {
        sq.style.transform = "rotate(-90deg)"
    }
}

function func23() {
    let sq = document.getElementById('square23');
    if (isElementDisplayed(sq)) {
        sq.style.transform = "rotate(-180deg)"
    }
}




function func41() {
    let sq = document.getElementById('square41');
    if (isElementDisplayed(sq)) {
        sq.style.transform = "rotate(0deg)"
    }
}

function func42() {
    let sq = document.getElementById('square42');
    if (isElementDisplayed(sq)) {
        sq.style.transform = "rotate(-90deg)"
    }
}

function func43() {
    let sq = document.getElementById('square43');
    if (isElementDisplayed(sq)) {
        sq.style.transform = "rotate(-180deg)"
    }
}

function func44() {
    let sq = document.getElementById('square44');
    if (isElementDisplayed(sq)) {
        sq.style.transform = "rotate(-240deg)"
    }
}




 function skillsGo() {
    let skills = document.getElementById('language');
    if (isElementDisplayed(skills)){
        document.getElementById('bar1').style = "width: 75px";
        document.getElementById('bar2').style = "width: 120px";
        document.getElementById('bar3').style = "width: 200px";
    }}



function pskills (){
    let prskills = document.getElementById('pro-skill');
    if (isElementDisplayed(prskills)) {
        document.getElementById('pro-1').style = "width: 75%";
        document.getElementById('pro-2').style = "width: 50%";
        document.getElementById('pro-3').style = "width: 60%";
        document.getElementById('pro-4').style = "width: 80%";
        document.getElementById('pro-5').style = "width: 55%";
        document.getElementById('pro-6').style = "width: 80%";
        document.getElementById('pro-7').style = "width: 60%";
        document.getElementById('pro-8').style = "width: 40%";
        document.getElementById('pro-9').style = "width: 80%";
        document.getElementById('pro-10').style = "width: 50%";

    }}


window.onscroll = function() {
    func1();
    func2();
    func3();
    func4();

    func11();
    func12();
    func13();
    func14();

    func21();
    func22();
    func23();

    func41();
    func42();
    func43();
    func44();

    skillsGo();
    pskills();
}


