const pwd=document.getElementById("password");
const toggle=document.getElementById("toggle");
toggle.addEventListener("click",()=>
{
    if(pwd.type==="password")
    {
        pwd.type="text";
        toggle.innerText="Hide";
    }
    else{
        pwd.type="password";
        toggle.innerText="Show";
    }
});