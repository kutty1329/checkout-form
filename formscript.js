let Action=()=>
{
    let a=document.forms['Application'].fname.value;
     let b=document.forms['Application'].lname.value;
     let c=document.forms['Application'].uname.value;
     let d=document.forms['Application'].add.value;
     let e=document.forms['Application'].country.value;
     let f=document.forms['Application'].google.value;
     let g=document.forms['Application'].state.value;



    let start=true;


    if(a.length<=0)
    {
        document.getElementById('fdetails').innerHTML="Enter your name First";
        start=false;
    }
    else if(!(/^[A-Za-z]+$/).test(a))
    {
        document.getElementById('fdetails').innerHTML="Enter name only";
        start=false;
    }
    if(b.length<=0)
    {
        document.getElementById('ldetails').innerHTML="Enter your name First";
        start=false;
    }
    else if(!(/^[A-Za-z]+$/).test(b))
    {
        document.getElementById('ldetails').innerHTML="Enter name only";
        start=false;
    }
    
    if(c.length<=0)
    {
        document.getElementById('udetails').innerHTML="Enter your username First";
        start=false;
    }
    if(d.length<=0)
    {
        document.getElementById('adetails').innerHTML="Enter your Address First";
        start=false;
    }
    if(e.length<=0)
    {
        document.getElementById('cdetails').innerHTML="select your country";
        start=false;
    }
    if(f.length<=0)
    {
        document.getElementById('googledetails').innerHTML="Enter your E-mail ";
        start=false;
    }
    else if(!((/^(?=.*[0-9])(?=.+[@.])[a-z0-9@.]+$/).test(f)))
    {
        document.getElementById('googledetails').innerHTML="Enter E-Mail @ . keywords use must";
        start=false;
    }
    if(g.length<=0)
    {
        document.getElementById('stedetails').innerHTML="select your state First ";
        start=false;
    }
    
    return start;
}
