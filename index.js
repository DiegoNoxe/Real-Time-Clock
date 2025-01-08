const clock = document.querySelector('.clock');

function formatTime(time) 
{
    return time.toString().padStart(2, '0');
}


function segundos() 
{
    const date = new Date(); 
    return formatTime(date.getSeconds());
}


function minutos() 
{
    const date = new Date(); 
    return formatTime(date.getMinutes()); 
}


function horas() 
{
    const date = new Date(); 
    return formatTime(date.getHours()); 
}


clock.innerHTML = `${horas()}:${minutos()}:${segundos()}`;
setInterval(function() 
{
    clock.innerHTML = `${horas()}:${minutos()}:${segundos()}`; 
}, 1000);
