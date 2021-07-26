const $ = document.querySelector.bind(document);

const minute = $('.clock-minute')

const second = $('.clock-second')

const hours = $('.clock-hours')

const beginning = $('.btn-start')

const reset = $('.btn-reset')

const note = $('.btn-note')

const stop =$('.btn-stop')

const addNote = $('.note')

var Interval;
var tens =0;
var minu=0;
var hr =0;


beginning.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval (startTime, 10);
}

stop.onclick = function() {
    clearInterval(Interval);
}

reset.onclick =function (){
    clearInterval(Interval);
    second.innerHTML = '00';
    minute.innerHTML= '00';
}


function startTime (){
    tens ++;
    if (tens <= 9)
        second.innerHTML = '0'+ tens;
    if (tens>9)
        second.innerHTML= tens;
    if (tens >= 99)
    {
        tens =0;
        second.innerHTML = '0'+ tens;
        minu++;
        minute.innerHTML= '0'+ minu;
    }
    if (minu >9)
    {
        minute.innerHTML= minu;
    }
    if (minu >= 59)
    {
        minu =0;
        minute.innerHTML = '0'+ minu;
        hr++;
        hours.innerHTML= '0'+ hr;
    }
    if (hr >9)
    {
        hours.innerHTML= hr;
    }

}

