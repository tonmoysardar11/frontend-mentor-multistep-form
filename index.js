

const nameCheck=()=>{
    if(!document.getElementById('name').value){
        document.getElementById('name').setAttribute('style',"box-shadow: 0 0 3px red");
        document.getElementsByClassName('err')[0].style.opacity='1';
        return false;
    }
    else {
        document.getElementById('name').removeAttribute('style');
        document.getElementsByClassName('err')[0].style.opacity='0';
        return true;
    };


}

const emailCheck=()=>{
    if(!document.getElementById('email').value){
        document.getElementById('email').setAttribute('style',"box-shadow: 0 0 3px red");
        document.getElementsByClassName('err')[1].style.opacity='1';
        return false;
    }
    else {
        document.getElementById('email').removeAttribute('style');
        document.getElementsByClassName('err')[1].style.opacity='0';
        return true;
    };


}

const phoneCheck=()=>{
    if(!document.getElementById('contact').value){
        document.getElementById('contact').setAttribute('style',"box-shadow: 0 0 3px red");
        document.getElementsByClassName('err')[2].style.opacity='1';
        return false;
    }
    else {
        document.getElementById('contact').removeAttribute('style');
        document.getElementsByClassName('err')[2].style.opacity='0';
        return true;
    };


}


const next1=()=>{
    if(nameCheck() && emailCheck() && phoneCheck()){
        document.getElementById('form1').style.display="none";
    }
    else{
        nameCheck()
        emailCheck()
        phoneCheck()
    }
    
};


const changePlan=()=>{
    document.getElementById('switchBtn_1').classList.contains('active_switch')?
       (
        document.getElementById('switchBtn_1').classList.remove('active_switch'),
       document.getElementById('switchBtn_2').classList.add('active_switch'),
       document.getElementById('plan_1').innerText='$90/year',
       document.getElementById('plan_2').innerText='$120/year',
       document.getElementById('plan_3').innerText='$150/year',
       document.getElementsByClassName('free').forEach(element => {
        element.style.opacity='1'
       }) 
       ):(
           document.getElementById('switchBtn_1').classList.add('active_switch'),
           document.getElementById('switchBtn_2').classList.remove('active_switch'),
           document.getElementById('plan_1').innerText='$9/month',
           document.getElementById('plan_2').innerText='$12/month',
           document.getElementById('plan_3').innerText='$15/month',
           document.getElementsByClassName('free').forEach(element => {
            element.style.opacity='0'
           }) 
       )
}

