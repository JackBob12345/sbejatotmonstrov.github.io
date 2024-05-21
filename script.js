mon=["monster1","monster2","monster3"];
igra=1;
monster=0;
ost=0;
ball=5;
proigspeed=0;
speed=0;
level=0;
function nextlevel(){
    level++;
    if(level==1){
        levelTEXT.innerHTML=("Уровень: 1");
        itog.innerHTML=("Первый уровень пройден!");
        speed=0;
        ball=5;
        game();
    }
    if(level==2){
        levelTEXT.innerHTML=("Уровень: 2");
        itog.innerHTML=("Второй уровень пройден!");
        speed=200;
        proigspeed=200;
        ball=6;
        
        game();
    }if(level==3){
        levelTEXT.innerHTML=("Уровень: 3");
        itog.innerHTML=("Третий уровень пройден!");
        speed=350;
        proigspeed=350;
        ball=7;
        game();
    }if(level==4){
        levelTEXT.innerHTML=("Уровень: 4");
        itog.innerHTML=("Четвёртый уровень пройден!");
        ball=10;
        proigspeed=500;
        speed=500;
        game();
        
    }if(level==5){img
        levelTEXT.innerHTML=("Уровень: 5");
        itog.innerHTML=("Пятый уровень пройден!");
        ball=15;
        proigspeed=660;
        speed=1000;
        
    }
    if(level==6){
    levelTEXT.innerHTML=("ВЫ ПРОШЛИ ИГРУ!");    
    itog.innerHTML=("Все уровни пройдены!");
    start.innerHTML=("Играть снова");
    ball=15;
    proigspeed=660;
    speed=1000;
    }
    if(level==7){
        level=1;
        clearInterval(newinterval);
        clearInterval(interval1);

    }
    clearInterval(newinterval);
    clearInterval(interval1);
    
}
function game(){
    ochki.innerHTML=("Осталось монстров: "+ball);
    randomT=Math.floor(Math.random()*2500);
    interval1=setInterval(play,randomT-speed);
    start.innerHTML=("Игра началась!");
    itog.innerHTML=("");
    igra=0;
    if(ball==0){
        win();
    }
}
function play(){;
    igra=0;
    rndD=Math.floor(Math.random()*3+1);
    rndMon=Math.floor(Math.random()*3)
    MonsterD=document.getElementById("door"+rndD);
    MonsterD.src=("IMG/"+mon[rndMon]+".png");
    monster=rndD;
    newinterval=setInterval(proig,2000-proigspeed);
    clearInterval(interval1);
        
}

function check(){
    MonsterD.src=("IMG/door.png");
    ball--;
    monster=0;
    ochki.innerHTML=("Осталось монстров: "+ball);
    clearInterval(newinterval);
    clearInterval(interval1);
    game();
}


function proig(){
        MonsterD.src=("IMG/door.png");
        itog.innerHTML=("Проиграл!");
        ochki.innerHTML=("Осталось монстров: "+ball);
        level=0;
        igra=1;
        monster=0;
        start.innerHTML=("Играть снова");
        clearInterval(newinterval);
        clearInterval(interval1);
        ball=0;
        return;
}

function win(){
    MonsterD.src=("IMG/door.png");
    ochki.innerHTML=("Осталось монстров: "+ball);
    igra=1;
    monster=0;
    start.innerHTML=("След. уровень");
    clearInterval(newinterval);
    clearInterval(interval1);
    ball=0;
    return;
}
