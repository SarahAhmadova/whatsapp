let scrn2 = document.querySelector('.phone2 .msgScreen');
let scrn1 = document.querySelector('.phone .msgScreen');
let cont1 = document.querySelector('#msg1');
let cont2 = document.querySelector('#msg2');

cont1.addEventListener('focus',function(){
    document.querySelector('.phone2 .currentSt').innerHTML='typing...';
    document.querySelector('.phone .send').style.visibility='visible';
    
});
cont1.addEventListener('blur',function(){
    document.querySelector('.phone2 .currentSt').innerHTML='online';
    document.querySelector('.phone .currentSt').innerHTML='online';
    if(cont1.value.length==0){
        document.querySelector('.phone .send').style.visibility='hidden';
    }

});
cont2.addEventListener('focus',function(){
    document.querySelector('.phone .currentSt').innerHTML='typing...';
    document.querySelector('.phone2 .send').style.visibility='visible';
});
cont2.addEventListener('blur',function(){
    document.querySelector('.phone .currentSt').innerHTML='online';
    if(cont2.value.length==0){
        document.querySelector('.phone2 .send').style.visibility='hidden';
    }
});

function crte(el1, el2, el3) {
    let inp = el3.value;
    document.querySelector('#tck').play();
    let mBox = document.createElement('div');
    mBox.classList.add('msgBox', 'snt');
    el2.appendChild(mBox);
    let msg = document.createElement('div');
    msg.classList.add('msg', 'sent');
    mBox.appendChild(msg);
    let content = document.createElement('span');
    content.innerHTML = `${inp}`;
    msg.appendChild(content);
    let time = document.createElement('span');
    time.classList.add('time');
    time.innerHTML = `${tim()}`;
    msg.appendChild(time);
    let tick = document.createElement('img');
    tick.setAttribute('src', "img/ticks.png");
    tick.classList.add('tick');
    time.appendChild(tick);

    let pid = setTimeout(() => {
        sound.play();
        let mBoxD = document.createElement('div');
        mBoxD.classList.add('msgBox', 'cm');
        el1.appendChild(mBoxD);
        let msgD = document.createElement('div');
        msgD.classList.add('msg', 'come');
        mBoxD.appendChild(msgD);
        let contentD = document.createElement('span');
        contentD.innerHTML = `${inp}`;
        msgD.appendChild(contentD);
        let timeD = document.createElement('span');
        timeD.classList.add('time');
        timeD.innerHTML = `${tim()}`;
        msgD.appendChild(timeD);
    }, 2000);

    console.log(pid);

}

function send2() {
    crte(scrn1, scrn2, cont2);
    document.forms[1].reset();
    document.querySelector('.phone2 .send').style.visibility='hidden';

}

function send1() {
   crte(scrn2, scrn1, cont1);
   document.forms[0].reset();
   document.querySelector('.phone .send').style.visibility='hidden';

}
let date=new Date();
document.querySelectorAll('.curTime')[0].innerHTML=`${date.getHours()}:${date.getMinutes()}`;
document.querySelectorAll('.curTime')[1].innerHTML=`${date.getHours()}:${date.getMinutes()}`;

function tim() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    if (min < 10) {
        min = `0${min}`;
    }
    if (hour < 10) {
        hour = `0${hour}`;
    }
    return `${hour}:${min}`;
}

{
    /* <div class="msgBox snt">
                                <div class="msg sent">
                                    <span>Hello</span>
                                    <span class="time">12:29</span>
                                    <img src="img/ticks.png" alt="" class="tick">
                                   </div>
                               </div>*/
}