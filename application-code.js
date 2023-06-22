//config css
device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'mobile' : 'desktop';

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
        videoId: '4Ti04PYb1rY',
    });
}

//video id
videoIdGroup = ['LtKQbgOR3Ko', 'SkwVvdf2F_Q', 'Ghpx-H_cA9I', '4Ti04PYb1rY'];
posisionSound = -1;

videoId = (e) => {
    if (e == 'next') {
        posisionSound++;
        if (posisionSound == 4) {
            posisionSound = 0;
        }
        player.loadVideoById({ videoId: videoIdGroup[posisionSound] });
    } else {
        posisionSound--;
        if (posisionSound == -1) {
            posisionSound = 3;
        }
        player.loadVideoById({ videoId: videoIdGroup[posisionSound] });
    }
}

activeSound = () => {
    if (player != undefined && typeof player == 'object' && typeof player.playVideo == 'function') {
        setTimeout(() => {
            //player.seekTo(1);
            player.setVolume(10);
            player.playVideo();
        }, 300);
    } else {
        setTimeout(() => {
            activeSound();
        }, 300);
    }
}
activeSound();

//volume config
volumeActive = (e) => {
    if (document.querySelectorAll('.activeVolume').length > 0) {
        document.querySelectorAll('.activeVolume').forEach(function (e) {
            e.classList.remove('activeVolume');
        })
    }
    player.setVolume(parseInt(`${e.getAttribute('data-size')}0`));
    document.querySelectorAll('[data-size]').forEach(function (a) {
        if (parseInt(e.getAttribute('data-size')) > parseInt(a.getAttribute('data-size'))) {
            a.classList.add('activeVolume');
        } else {
            a.style.backgroundColor = 'rgb(0 0 0 / 30%)';
        }
    });
    e.classList.add('activeVolume');
}

for (e of document.querySelectorAll('.volume')) {
    e.addEventListener('click', function () {
        volumeActive(this);
    })
}

// up - down sound
upDownSound = (e) => {
    if (e == 'up') {
        if (document.querySelectorAll('.volume')[document.querySelectorAll('.volume.activeVolume').length] != undefined) {
            document.querySelectorAll('.volume')[document.querySelectorAll('.volume.activeVolume').length].classList.add('activeVolume');
            player.setVolume(`${document.querySelectorAll('.volume')[document.querySelectorAll('.volume.activeVolume').length - 1].getAttribute('data-size')}0`);
        }
    }
    if (e == 'down') {
        if (document.querySelectorAll('.volume')[document.querySelectorAll('.volume.activeVolume').length - 1] != undefined) {
            document.querySelectorAll('.volume')[document.querySelectorAll('.volume.activeVolume').length - 1].classList.remove('activeVolume');
            if (document.querySelectorAll('.volume')[document.querySelectorAll('.volume.activeVolume').length - 1] != undefined) {
                player.setVolume(`${document.querySelectorAll('.volume')[document.querySelectorAll('.volume.activeVolume').length - 1].getAttribute('data-size')}0`);
            } else {
                document.querySelectorAll('.volume')[0].classList.remove('activeVolume');
                player.setVolume(0);
            }
        }
    }
}

if (device == 'mobile') {
    document.querySelector('#qrCodeImg').style.display = 'none';
    document.querySelector('#containerMain').style.margin = 0;

    fullScreenMobile = () => {
        document.documentElement.webkitRequestFullScreen();
        document.body.style.zoom = 0.9;
        document.querySelector('#loadin').style.display = 'none';
    }

    hideComunicatin = () => {
        setTimeout(() => {
            document.querySelector('#footerComunication').style.display = 'none';
        }, 10000);
    }

    $('.userInput').css('width', '10em');
    $('.userInput').css('height', '1.5em');
    $('.userInput').css('fontSize', '1.5em');

    mobileCssAjust = () => {
        document.querySelector('#containerMain').style.flexDirection = 'column-reverse';
        document.querySelector('#info').style.display = 'flex';
        document.querySelector('#info').style.flexWrap = 'wrap';
        document.querySelector('#info').style.justifyContent = 'center';
        document.querySelector('#info').style.height = '22%';
        document.querySelector('#info').style.fontSize = '1.5em';
        document.querySelector('#info').style.padding = '10px 0 18px 0';
        document.querySelector('#info').style.borderRadius = '14px 14px 14px 14px';
        document.querySelector('#container').style.borderRadius = '14px 14px 14px 14px';

        document.querySelector('#control').style.display = 'block';
        document.querySelector('#control').style.width = '40%';
        //document.querySelector('#control').style.alignItems = 'center';

        //document.querySelector('#reset').style.display = 'flex';
        //document.querySelector('#reset').style.alignItems = 'center';
        //document.querySelector('#pause').style.display = 'flex';
        //document.querySelector('#pause').style.alignItems = 'center';

        document.querySelector('#reset').style.fontSize = '1.5em';
        document.querySelector('#pause').style.fontSize = '1.5em';
        document.querySelector('#reset').style.width = '8em';
        document.querySelector('#pause').style.width = '8em';

        document.querySelector('#welcome').style.fontSize = '3.5em';


        $('#sound img').css('width', '3em');
        $('#sound img').css('height', '3em');
        $('.volume').css('height', '25px');
        $('.volume').css('margin', '18px 0');

        document.querySelector('#sound').style.width = '40%';
        //document.querySelector('#sound').style.marginTop = '0px';
        //document.querySelector('#sound').style.border = '1px solid';
        document.querySelector('#containerVolume').style.width = '100%';
        document.querySelector('#containerVolume').style.margin = 'auto';
        document.querySelector('#containerVolume').style.transform = 'translate(-11px, 0px)';

        //ele = document.createElement('br');
        //document.querySelector('#records span').append(ele);

        //document.querySelector('#reset').style.padding = '7px 10px 7px 50px';
        document.querySelector('#resetImg').style.width = '65px';
        //document.querySelector('#resetImg').style.marginTop = '-2px';

        document.querySelector('#resetImg').style.position = 'relative';
        document.querySelector('#resetImg').style.margin = 'auto';
        document.querySelector('#reset').style.padding = '7px 25px';
        document.querySelector('#pause').style.padding = '11px 25px';

        document.querySelector('#reset').style.height = '2.5em';
        document.querySelector('#pause').style.height = '2.5em';


        document.querySelector('#rankingPage').style.zoom = '2';
        document.querySelector('#rulesPage').style.zoom = '1.5';
        document.querySelector('#startPage').style.zoom = '1.3';

        $('#contact img').css('width', '75px');
        document.querySelector('footer p').style.fontSize = '1.5em';
        $('#sound-up, #sound-down').css('transform', 'translate(3.5px, -1px)');

    }

    if (window.screen.orientation.angle == 0) {
        document.querySelector('#containerMain').classList.add('mobiliCssContainerMain');
        document.querySelector('#container').classList.add('mobiliCssContainer');
        //document.querySelector('#footerComunication').style.display = 'block';
        hideComunicatin();

        document.querySelector('#containerMain').style.flexDirection = 'column-reverse';
        document.querySelector('#info').style.display = 'inherit';
        $('button').css('font-size', '2em')
        document.querySelector('#homeImg').style.height = '25em';
        mobileCssAjust();
    } else {
        document.body.style.zoom = .7;
        document.querySelector('footer p').style.fontSize = '1.5em';
    }
    document.body.style.position = 'fixed';

    //rotate listner
    window.screen.orientation.addEventListener('change', function () {
        if (window.screen.orientation.angle == 90 || window.screen.orientation.angle != 0) {
            repositionElements();
            document.querySelector('#containerMain').classList.remove('mobiliCssContainerMain');
            document.querySelector('#container').classList.remove('mobiliCssContainer');
            document.body.style.zoom = .7;
            document.querySelector('footer p').style.fontSize = '1.5em';

            toggleFullscreen();

            document.querySelector('#container').style.width = '75%';

            document.querySelector('#containerVolume').style.transform = 'translate(-11px, 0px)';

            document.querySelector('#containerMain').style.flexDirection = '';
            document.querySelector('#info').style.display = '';
            document.querySelector('#info').style.flexWrap = '';
            document.querySelector('#info').style.justifyContent = '';
            document.querySelector('#info').style.height = '';
            document.querySelector('#info').style.fontSize = '1em';
            document.querySelector('#info').style.borderRadius = '0 14px 14px 0';
            document.querySelector('#info').style.padding = '0 25px';

            document.querySelector('#container').style.borderRadius = '14px 0 0 14px';

            //if (document.querySelectorAll('#records span br').length) {
            //  document.querySelector('#records span br').remove();
            //}

            document.querySelector('#control').style.display = 'block';
            document.querySelector('#control').style.width = '';
            document.querySelector('#control').style.alignItems = '';

            document.querySelector('#reset').style.display = '';
            document.querySelector('#reset').style.alignItems = '';
            document.querySelector('#pause').style.display = '';
            document.querySelector('#pause').style.alignItems = '';

            document.querySelector('#welcome').style.fontSize = '1.5em';

            $('button').css('font-size', '');
            document.querySelector('#homeImg').style.height = '13em';

            //$('.userInput').css('width', '13em');
            //$('.userInput').css('height', '1.5em');#sound img
            $('#sound img').css('width', '37px');
            $('#sound img').css('height', '37px');
            document.querySelector('#sound').style.width = '180px';
            //document.querySelector('#sound').style.border = '0px';
            document.querySelector('#sound').style.marginTop = '-13px';
            document.querySelector('#containerVolume').style.width = '180px';
            document.querySelector('#containerVolume').style.margin = '5px';
            $('.volume').css('height', '12px');
            $('.volume').css('margin', '6px 0 0');

            document.querySelector('#pause').style.removeProperty("padding");
            document.querySelector('#resetImg').style.position = 'absolute';
            document.querySelector('#resetImg').style.removeProperty("margin");
            document.querySelector('#resetImg').style.removeProperty("height");
            document.querySelector('#reset').style.padding = '7px 20px 7px 30px';
            document.querySelector('#resetImg').style.width = '35px';
            //document.querySelector('#resetImg').style.marginTop = '-5px';
            // document.querySelector('#resetImg').style.marginLeft = '-31px';
            document.querySelector('#rankingPage').style.zoom = '0';
            document.querySelector('#rulesPage').style.zoom = '0';
            document.querySelector('#startPage').style.zoom = '0';

            $('#contact img').css('width', '43px');
            document.querySelector('footer p').style.fontSize = '1.5em';
            $('#sound-up, #sound-down').css('transform', 'translate(3.5px, -5px)');
        } else {
            repositionElements();
            $('button').css('font-size', '2em');
            toggleFullscreen();
            mobileCssAjust();


            document.querySelector('#homeImg').style.height = '25em';

            document.querySelector('#container').classList.add('mobiliCssContainer');
            document.querySelector('#containerMain').classList.add('mobiliCssContainerMain');
            document.body.style.zoom = 1;
            document.querySelector('footer p').style.fontSize = '1.5em';
            //document.querySelector('#footerComunication').style.display = 'block';
            hideComunicatin();
        }

    })
}

mosquitoPosi = 0;
countCreate = 0;

createFly = (a, b) => {
    fly = document.createElement('img');
    countCreate++;
    if (countCreate == 10) {
        fly.setAttribute('src', 'img/mosquito-especial1.png');
        fly.setAttribute('class', 'yellow');
        fly.setAttribute('onclick', 'addSpots(5),removeFly(this)');
    } else if (countCreate == 20) {
        fly.setAttribute('src', 'img/mosquito-especial2.png');
        fly.setAttribute('class', 'blue');
        fly.setAttribute('onclick', 'addSpots(10),removeFly(this)');
    } else if (countCreate == 35) {
        fly.setAttribute('src', 'img/abelha.png');
        fly.setAttribute('class', 'yellow bee');
        fly.setAttribute('onclick', 'removeSpots(),removeFly(this)');
    } else if (countCreate == 50) {
        fly.setAttribute('src', 'img/mosquito-alpha.png');
        fly.setAttribute('onclick', 'alphaAtac(),removeFly(this)');
        countCreate = 0;
    } else if (mosquitoPosi % 2 == 0) {
        fly.setAttribute('src', 'img/mosquito-bravo.png');
        fly.setAttribute('onclick', 'removeFly(this)');
    } else {
        fly.setAttribute('src', 'img/mosquito-bravo1.png');
        fly.setAttribute('onclick', 'removeFly(this)');
    }

    if (fly.getAttribute('class') == 'yellow bee') {
        fly.setAttribute('id', 'bee');
    } else {
        fly.setAttribute('id', 'fly');
    }
    fly.setAttribute('style', 'position: absolute; left: ' + a + 'px; top: ' + b + 'px;');
    if (device == 'mobile' && window.screen.orientation.angle == 0) {
        //fly.setAttribute('class', 'flyHeigth2');
        fly.classList.add('flyHeigth2');
    } else {
        fly.classList.add('flyHeigth1');
        //fly.setAttribute('class', 'flyHeigth1');
    }
    document.querySelector('#container').append(fly);
    if (fly.getAttribute('class') == 'yellow bee') {
        timeRemoveBee();
    }
    mosquitoPosi++;
}

pauseGame = (e) => {
    if (pause == false) {
        pause = true;
        e.innerText = 'Play'
    } else {
        pause = false;
        e.innerText = 'Pause'
        timer();
    }
}

alphaAtac = () => {
    if (pause == false) {
        upTimerAlpha(10);
        for (e of document.querySelectorAll('#fly')) {
            if (e.classList.value == 'flyHeigth1' || e.classList.value == 'flyHeigth2') {
                e.setAttribute('src', 'img/gosma.png');
                e.classList.add('gosma');
            } else if (e.classList.value.includes('yellow')) {
                e.setAttribute('src', 'img/gosma-amarelo.png');
                e.classList.add('gosma');
            } else {
                e.setAttribute('src', 'img/gosma-azul.png');
                e.classList.add('gosma');
            }
            setTimeout(() => {
                document.querySelectorAll('.gosma').forEach(e => {
                    e.remove();
                });
            }, 200);
        }
    }
}

validStart = () => {
    run(active = true, pause = false), timer(true), hidenStart(), backgroundImplement();
    document.querySelector('#userLevel').textContent = '1';
    //localStorage.setItem('name', document.querySelector('.userName').value);
}

removeFlyAll = () => {
    for (e of document.querySelectorAll('#fly')) {
        e.remove();
    }
    for (e of document.querySelectorAll('#bee')) {
        e.remove();
    }
}

timeRemoveBee = () => {
    setTimeout(() => {
        for (e of document.querySelectorAll('#bee')) {
            e.remove();
            spots = spots + 10;
        }
    }, 5000);
}

countFly = () => {
    return document.querySelectorAll('#fly').length;
}

resetElements = () => {
    pause = true;
    active = false;
    removeFlyAll();
    document.querySelector('#timerA').textContent = '01';
    document.querySelector('#timerB').textContent = '00';
    timeRun = 1000;
    timerContrl = 2000;
    cont = 0;
    spots = 0;
    levelCount = 1;
    document.querySelector('#cont').textContent = '0';
    document.querySelector('#userLevel').textContent = '0';
    document.querySelector('#reset').style.backgroundImage = 'linear-gradient(red, yellow)';
}

gameOver = () => {
    setRanking();
    getRanking();
    pause = true;
    active = false;
    document.querySelector('#container').style.backgroundImage = "url('img/game-over-personalizado.png')";
    document.querySelector('#container').style.backgroundSize = "100% 100%";
    removeFlyAll();
    document.querySelector('#timerA').textContent = '01';
    document.querySelector('#timerB').textContent = '00';
    timeRun = 1000;
    timerContrl = 2000;
    cont = 0;
    saveUserRecords();
    upRecords(spots, levelCount);
    spots = 0;
    levelCount = 1;
    document.querySelector('#userLevel').innerText = levelCount;
    document.querySelector('#cont').textContent = '0';

}

backgroundImplementCont = 0;

backgroundImplement = () => {
    backgroundImplementCont++;
    if (backgroundImplementCont == 6) {
        backgroundImplementCont = 1;
    }
    document.querySelector('#container').style.backgroundImage = "url(img/paisagem" + backgroundImplementCont + ".png)";
    document.querySelector('#container').style.backgroundSize = "cover";
}

positionTop = () => {
    positionOrientation = 60;
    if (device == 'mobile' && window.screen.orientation.angle == 0) {
        positionOrientation = 120;
    }
    return Math.floor(Math.random() * (parseInt(document.querySelector('#container').getBoundingClientRect().height.toFixed(0)) - positionOrientation)) + parseInt(document.querySelector('#container').getBoundingClientRect().top.toFixed(0));
}

positionLeft = () => {
    positionOrientation = 60;
    if (device == 'mobile' && window.screen.orientation.angle == 0) {
        positionOrientation = 120;
    }
    return Math.floor(Math.random() * (parseInt(document.querySelector('#container').getBoundingClientRect().width.toFixed(0)) - positionOrientation)) + parseInt(document.querySelector('#container').getBoundingClientRect().left.toFixed(0));
}

upTimer = (a) => {
    newTimer('upTimer', a);
}

upTimerAlpha = (a) => {
    newTimer('upTimer', a);
}

dowTimer = (e) => {
    newTimer('dowTimer', e);
}

cont = 0;
spots = 0;

removeFly = (e) => {
    if (pause == false) {
        if (e.classList.value == 'flyHeigth1' || e.classList.value == 'flyHeigth2') {
            e.setAttribute('src', 'img/gosma.png');
        } else if (e.classList.value.includes('yellow')) {
            e.setAttribute('src', 'img/gosma-amarelo.png');
        } else {
            e.setAttribute('src', 'img/gosma-azul.png');
        }
        setTimeout(() => {
            e.remove();
        }, 200);
        cont++;
        spots++;
        ValidLevelUp();
        document.querySelector('#cont').textContent = spots;
        upTimer(1);
    }
}

addSpots = (e) => {
    if (pause == false) {
        spots = spots + e;
    }
}

removeSpots = () => {
    if (pause == false) {
        spots = spots - 11;
        newTimer('dowTimer', 10);
    }
}

timeRun = 1000;
run = () => {
    if (active == true) {
        setTimeout(() => {
            //validate game over
            if (active == true && pause == false && countFly() < 75) {
                a = positionLeft();
                b = positionTop();
                createFly(a, b);
            } else if (countFly() == 75) {
                gameOver();
            }
            setTimeout(() => {
                run();
            }, timeRun);
        }, timeRun);
    }
}
pause = false;
timerContrl = 2000;

timer = (e) => {
    if (pause == false || e == true) {
        setTimeout(() => {
            if (document.querySelector('#container').style.backgroundImage != 'url("img/game-over-personalizado.png")') {
                if (pause == false || e == true) {
                    newTimer('default', '');
                    timer();
                }
            }
        }, timerContrl);
    }
}

hidenStart = () => {
    document.querySelector('#startPage').style.display = "none";
}

showStart = () => {
    document.querySelector('#startPage').style.display = "block";
    document.querySelector('#container').style.backgroundImage = '';
    document.querySelector('#rankingPage').style.display = "none";
    if (sessionStorage.getItem("login") == 'active') {
        document.querySelector('#inputCadaster').style.display = 'none';
        document.querySelector('#errorPass').classList.add('lets');
        document.querySelector('#errorPass').innerText = "Let's go to the next game";
        document.querySelector('.returnEnter').style.display = 'none';
        document.querySelector('.exitGame').style.display = 'inline-block';
    }
}

//valid level up
levelCount = 1;
ValidLevelUp = () => {
    if (cont > 20) {
        levelCount++;
        document.querySelector('#userLevel').innerText = levelCount;
        dowTimer(countFly());
        removeFlyAll();
        document.querySelector('#container').style.backgroundImage = "url('img/level-up.png')";
        document.querySelector('#container').style.backgroundSize = "100% 100%";
        document.querySelector('#container').style.backgroundColor = 'red';
        timeRun = timeRun - 50;
        timerContrl = timerContrl - 50;
        cont = 0;
        pause = true;
        setTimeout(() => {
            backgroundImplement();
            document.querySelector('#container').style.backgroundColor = 'white';
            pause = false;
            timer();
        }, 4000);
    }
}

upRecords = (a, b) => {
    e = document.querySelectorAll('#records span');
    if (b > parseInt(e[0].textContent)) {
        document.querySelectorAll('#records span')[0].textContent = b;
    }
    if (a > parseInt(e[1].textContent)) {
        document.querySelectorAll('#records span')[1].textContent = a;
    }
}

saveUserRecords = () => {
    //localStorage.setItem('name', document.querySelector('.userName').value);
    //localStorage.setItem('level', document.querySelectorAll('#records span')[0].textContent);
    //localStorage.setItem('points', document.querySelectorAll('#records span')[1].textContent);
}

getUserInfos = () => {
    a = localStorage.getItem('name');
    if (a != null) {
        document.querySelector('.userName').value = a;
    }
    b = localStorage.getItem('level');
    if (b != null) {
        document.querySelectorAll('#records span')[0].textContent = b;
    }
    c = localStorage.getItem('points');
    if (c != null) {
        document.querySelectorAll('#records span')[1].textContent = c;
    }
}
getUserInfos();

newTimer = (intaraction, val) => {
    a = () => { return parseInt(document.querySelector('#timerA').textContent) * 60 };
    b = () => { return parseInt(document.querySelector('#timerB').textContent) };
    e = a() + b();
    switch (intaraction) {
        case 'default':
            e = e - 1;
            break;

        case 'dowTimer':
            e = e - val;
            break;

        case 'upTimer':
            e = e + val;
            break;

        default:
            break;
    }
    if (e == 0) {
        gameOver();
    } else {
        if (parseInt(e / 60) < 10) {
            document.querySelector('#timerA').textContent = `0${parseInt(e / 60)}`;
        } else {
            document.querySelector('#timerA').textContent = parseInt(e / 60);
        }
        if ((e % 60) < 10) {
            document.querySelector('#timerB').textContent = `0${e % 60}`;
        } else {
            document.querySelector('#timerB').textContent = e % 60;
        }
    }
}

//rules page active
rulesPageInteraction = (e) => {
    if (e == 'on') {
        hidenStart();
        document.querySelector('#rulesPage').style.display = 'block';
    } else {
        document.querySelector('#rulesPage').style.display = 'none';
    }
}

selectLanguage = () => {
    e = document.querySelector('.hideElemens').classList.value;
    if (e.includes('language2')) {
        for (let i = 0; i < document.querySelectorAll('.language2').length; i++) {
            document.querySelectorAll('.language2')[i].classList.remove('hideElemens');
        }
        for (let i = 0; i < document.querySelectorAll('.language1').length; i++) {
            document.querySelectorAll('.language1')[i].classList.add('hideElemens');
        }
    } else {
        for (let i = 0; i < document.querySelectorAll('.language1').length; i++) {
            document.querySelectorAll('.language1')[i].classList.remove('hideElemens');
        }
        for (let i = 0; i < document.querySelectorAll('.language2').length; i++) {
            document.querySelectorAll('.language2')[i].classList.add('hideElemens');
        }
    }
}

hideEnter = (e) => {
    document.querySelector('#enter').style.display = 'none';
    document.querySelector('#cadaster').style.display = 'block';
    document.querySelector('.startGame').setAttribute('data-start', e.innerText.toLowerCase());
    document.querySelector('.startGame').innerText = e.innerText;
    buttonEscape('');
    if (e.innerText.toLowerCase() != 'cadaster') {
        document.querySelector('.userE-mail').removeAttribute('required');
        document.querySelector('.userE-mail').style.display = 'none';
    } else {
        document.querySelector('.userE-mail').setAttribute('required', '');
        document.querySelector('.userE-mail').style.display = 'inline-block';
    }
}

returnEnter = () => {
    document.querySelector('#enter').style.display = 'block';
    document.querySelector('#cadaster').style.display = 'none';
    document.querySelector('#errorPass').style.opacity = '0';
    document.querySelector('.retriPassword').style.display = 'none';
    document.querySelector('.retriPassword').classList.remove('buttonEscape');

}

set = (dados) => {
    if (atribute == 'cadaster') {
        if (dados.indexOf('PRIMARY') == -1) {
            validStart();
            document.querySelector('.startGame').innerText = 'Start';
            document.querySelector('.retriPassword').style.display = 'none';
        } else {
            document.querySelector('#errorPass').innerText = "User already registered";
            document.querySelector('#errorPass').style.opacity = '1';
            document.querySelector('.retriPassword').style.display = 'inline-block';
        }
    } else {
        if (dados == 1) {
            validStart();
            document.querySelector('.startGame').innerText = 'Start';
            document.querySelector('#errorPass').style.opacity = '0';
            document.querySelector('.retriPassword').style.display = 'none';
            sessionStorage.setItem("login", "active");
            getRecordsFromUser();
        } else {
            document.querySelector('#errorPass').innerText = "Incorrect password or name";
            document.querySelector('#errorPass').style.opacity = '1';
            document.querySelector('.retriPassword').style.display = 'inline-block';
            document.querySelector('.startGame').classList.add('buttonEscape');
        }
    }
}

testStart = (ele) => {
    name = document.querySelector('.userName').value;
    pass = document.querySelector('.userPass').value;
    email = document.querySelector('.userE-mail').value;
    if (validInputs() == true) {
        atribute = document.querySelector('.startGame').getAttribute('data-start');
        if (atribute == 'cadaster') {
            $.post('cadaster.php', { name, pass, email }, function (e) {
                set(e);
            });
        } else {
            $.post('login.php', { name, pass }, function (e) {
                set(e);
            });
        }
    } else if (ele.innerText.toLowerCase().indexOf('start') != -1) {
        validStart();
    } else {
        if (name != '' && pass != '' && email.indexOf('@') == -1) {
            document.querySelector('#errorPass').innerText = "Incorrect e-mail";
        } else {
            document.querySelector('#errorPass').innerText = "Fill in all fields";
        }
        document.querySelector('#errorPass').style.opacity = '1';
    }
}

setRanking = () => {
    name = document.querySelector('.userName').value;
    level = document.querySelector('#userLevel').innerText;
    points = document.querySelector('#divCont #cont').innerText;
    $.post('setRanking.php', { name, level, points }, function (e) {
    });
}

getRanking = () => {
    if (document.querySelectorAll('#divTableRanking').length > 0) {
        document.querySelector('#divTableRanking').remove();
    }
    setTimeout(() => {
        $.post('ranking.php', function (e) {
            element = document.createElement('div');
            element.setAttribute('id', 'divTableRanking');
            element.innerHTML = '<table id="tableRanking"><tr><th>Name</th><th>Level</th><th>Points</th></tr>' + e + '</table>';
            document.querySelector('#rankingPage').append(element);
        });
        document.querySelector('#rankingPage').style.display = "";
        document.querySelector('#container').style.backgroundImage = '';
        document.querySelector('#reset').style.backgroundImage = 'linear-gradient(#0de10d,#0de10d)';
    }, 4500);
}

exitGame = () => {
    document.querySelector('#inputCadaster').style.display = 'inline-block';
    document.querySelector('#errorPass').classList.remove('lets');
    document.querySelector('#errorPass').innerText = "Incorrect password or name";
    document.querySelector('.returnEnter').style.display = 'inline-block';
    document.querySelector('.exitGame').style.display = 'none';
    sessionStorage.setItem('login', 'off');
    document.querySelectorAll('#records span')[0].textContent = '0';
    document.querySelectorAll('#records span')[1].textContent = '0';
}

getUserInfoResetPass = () => {
    name = document.querySelector('.userName').value;
    $.post('validateCadaster.php', { name }, function (e) {
        sendEmail(e);
    });

}
sendEmail = (e) => {
    name = document.querySelector('.userName').value;
    if (e == 1) {
        $.post('sendEmail.php', { name }, function (e) {
        });
        document.querySelector('#errorPass').innerText = 'An email has been sent to your registered email address.';
    } else {
        document.querySelector('#errorPass').innerText = 'Unregistered user: ' + name;
        document.querySelector('.retriPassword').classList.add('buttonEscape');
    }
}
buttonEscape = () => {
    if (validInputs() == false) {
        document.querySelector('.startGame').classList.add('buttonEscape');
    } else {
        document.querySelector('.startGame').classList.remove('buttonEscape');
        document.querySelector('#errorPass').style.opacity = '0';
    }
}

validInputs = () => {
    e = document.querySelector('.startGame').innerText;
    r = document.querySelectorAll('#inputCadaster input');
    if (e == 'Login') {
        if (r[0].value == '' || r[1].value == '') {
            return false;
        } else {
            return true;
        }
    } else if (e == 'Cadaster') {
        if (r[0].value == '' || r[1].value == '' || r[2].value == '' || r[2].value.indexOf('@') == -1) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

getRecordsFromUser = () => {
    name = document.querySelector('.userName').value;
    $.post('userRanking.php', { name }, function (e) {
        setRankingUser(e);
    });
}

setRankingUser = (e) => {
    e = JSON.parse(e);
    document.querySelectorAll('#records span')[0].textContent = e.level;
    document.querySelectorAll('#records span')[1].textContent = e.points;
}


toggleFullscreen = () => {
    if (document.fullscreenEnabled) {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    }
}

openQrCode = () => {
    document.querySelector('#homeImg').setAttribute('src', 'img/flowcode.png');
    if (document.querySelector('#startPage').style.display == 'block') {
        document.querySelector('#qrCode').style.display = 'block';
    }
}

closeQrcode = () => {
    document.querySelector('#homeImg').setAttribute('src', 'img/fundo2.png');
    document.querySelector('#qrCode').style.display = 'none';
}

repositionElements = () => {
    newPositin(document.querySelectorAll('#fly'));
    newPositin(document.querySelectorAll('#bee'));
}

newPositin = (e) => {
    document.querySelector("#loadin").style.display = 'flex';
    setTimeout(() => {
        for (let i = 0; i < e.length; i++) {
            a = positionLeft();
            b = positionTop();
            e[i].setAttribute('style', 'position: absolute; left: ' + a + 'px; top: ' + b + 'px;');
            if (device == 'mobile' && window.screen.orientation.angle == 0) {
                if (e[i].classList.value.indexOf('flyHeigth1') != -1) {
                    e[i].classList.remove('flyHeigth1');
                }
                e[i].classList.add('flyHeigth2');
            } else {
                if (e[i].classList.value.indexOf('flyHeigth2') != -1) {
                    e[i].classList.remove('flyHeigth2');
                }
                e[i].classList.add('flyHeigth1');
            }
        }
        document.querySelector("#loadin").style.display = 'none';
    }, 500);
}