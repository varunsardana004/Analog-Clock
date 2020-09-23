var dialline=document.getElementsByClassName('dialline');
var clockE=document.getElementsByClassName('clock')[0];
for(var i=1;i<60;i++)
{
    clockE.innerHTML+="<div class='dialline'></div>";
    dialline[i].style.transform="rotate("+6*i+"deg)";
}
function clock()
{
    const weekday=new Array(7);
    const d=new Date(),
    h=d.getHours(),
    m=d.getMinutes(),
    s=d.getSeconds(),
    date=d.getDate(),
    month=d.getMonth()+1,
    year=d.getFullYear(),

    hDeg=h * 30 + m * (360/720),
    mDeg=(m * 30 + s * (360/720))/5,
    sDeg= s * 6,

    hE=document.querySelector('.hour-hand'),
    mE=document.querySelector('.minute-hand'),
    sE=document.querySelector('.second-hand'),
    dateE=document.querySelector('.date'),
    dayE=document.querySelector('.day');

    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";

    var day=weekday[d.getDay()];
    hE.style.transform = "rotate("+hDeg+"deg)";
    mE.style.transform = "rotate("+mDeg+"deg)";
    sE.style.transform = "rotate("+sDeg+"deg)";
    dateE.innerHTML=date+"/"+month+"/"+year;
    dayE.innerHTML=day;
}

setInterval("clock()",100);







