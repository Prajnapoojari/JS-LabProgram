function degitalClock()
{
    let now=new Date();
    document.getElementById("clock").innerText=now.toLocaleTimeString("en-us", {hour12:true});
}
setInterval(degitalClock, 1000);
degitalClock();