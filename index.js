var planName = '';
var plan = 'Monthly'
var plan2 = 'mo'
var value = 0;
var stage1 = 0;
var stage2 = 0;


const nameCheck = () => {
    if (!document.getElementById('name').value) {
        document.getElementById('name').setAttribute('style', "box-shadow: 0 0 3px red");
        document.getElementsByClassName('err')[0].style.opacity = '1';
        return false;
    }
    else {
        document.getElementById('name').removeAttribute('style');
        document.getElementsByClassName('err')[0].style.opacity = '0';
        return true;
    };


}

const emailCheck = () => {
    if (!document.getElementById('email').value) {
        document.getElementById('email').setAttribute('style', "box-shadow: 0 0 3px red");
        document.getElementsByClassName('err')[1].style.opacity = '1';
        return false;
    }
    else {
        document.getElementById('email').removeAttribute('style');
        document.getElementsByClassName('err')[1].style.opacity = '0';
        return true;
    };


}

const phoneCheck = () => {
    if (!document.getElementById('contact').value) {
        document.getElementById('contact').setAttribute('style', "box-shadow: 0 0 3px red");
        document.getElementsByClassName('err')[2].style.opacity = '1';
        return false;
    }
    else {
        document.getElementById('contact').removeAttribute('style');
        document.getElementsByClassName('err')[2].style.opacity = '0';
        return true;
    };


}


const next1 = () => {
    if (nameCheck() && emailCheck() && phoneCheck()) {
        document.getElementById('form1').style.display = "none";
        document.getElementById('form2').style.display = "block";
        document.getElementsByClassName("widget_no")[0].classList.remove('widget_active');
        document.getElementsByClassName("widget_no")[1].classList.add('widget_active');
    }
    else {
        nameCheck()
        emailCheck()
        phoneCheck()
    }

};


const changePlan = () => {
    document.getElementById('switchBtn_1').classList.contains('active_switch') ?
        (
            document.getElementById('switchBtn_1').classList.remove('active_switch'),
            document.getElementById('switchBtn_2').classList.add('active_switch'),
            document.getElementById('plan_1').innerText = '$90/year',
            document.getElementById('plan_2').innerText = '$120/year',
            document.getElementById('plan_3').innerText = '$150/year',
            document.getElementById('free1').style.display = 'block',
            document.getElementById('free2').style.display = 'block',
            document.getElementById('free3').style.display = 'block',
            document.getElementById('rate1').innerText = "+$10/yr",
            document.getElementById('rate2').innerText = "+$20/yr",
            document.getElementById('rate3').innerText = "+$20/yr",
            plan = 'Yearly',
            plan2 = 'yr',
            document.getElementById('total').innerText='Total (per year)'

        ) : (
            document.getElementById('switchBtn_1').classList.add('active_switch'),
            document.getElementById('switchBtn_2').classList.remove('active_switch'),
            document.getElementById('plan_1').innerText = '$9/month',
            document.getElementById('plan_2').innerText = '$12/month',
            document.getElementById('plan_3').innerText = '$15/month',
            document.getElementById('free1').style.display = 'none',
            document.getElementById('free2').style.display = 'none',
            document.getElementById('free3').style.display = 'none',
            document.getElementById('rate1').innerText = "+$1/mo",
            document.getElementById('rate2').innerText = "+$2/mo",
            document.getElementById('rate3').innerText = "+$2/mo",
            plan = 'Monthly',
            plan2 = 'mo',
            document.getElementById('total').innerText='Total (per month)'

        )
}

const back1 = () => {
    document.getElementById('form1').style.display = "block";
    document.getElementById('form2').style.display = "none";
    document.getElementsByClassName("widget_no")[0].classList.add('widget_active');
    document.getElementsByClassName("widget_no")[1].classList.remove('widget_active');
}

const next2 = () => {
    if (document.getElementById('radio1').checked) {
        document.getElementById('form2').style.display = "none";
        document.getElementById('form3').style.display = "block";
        document.getElementsByClassName("widget_no")[1].classList.remove('widget_active');
        document.getElementsByClassName("widget_no")[2].classList.add('widget_active');
        planName = 'Arcade';
        if (plan == 'Monthly') {
            value += 9
        }
        else value += 90
    }

    else if (document.getElementById('radio2').checked) {
        document.getElementById('form2').style.display = "none";
        document.getElementById('form3').style.display = "block";
        document.getElementsByClassName("widget_no")[1].classList.remove('widget_active');
        document.getElementsByClassName("widget_no")[2].classList.add('widget_active');
        planName = 'Advanced';
        if (plan == 'Monthly') {
            value += 12
        }
        else value += 120
    }
    else if (document.getElementById('radio3').checked) {
        document.getElementById('form2').style.display = "none";
        document.getElementById('form3').style.display = "block";
        document.getElementsByClassName("widget_no")[1].classList.remove('widget_active');
        document.getElementsByClassName("widget_no")[2].classList.add('widget_active');
        planName = 'Pro';
        if (plan == 'Monthly') {
            value += 15
        }
        else value += 150
    }
    else {
        document.getElementById('.err2').style.display = 'block';
    };
    stage1 = value;
}

const back2 = () => {
    value = 0;
    document.getElementById('form2').style.display = "block";
    document.getElementById('form3').style.display = "none";
    document.getElementsByClassName("widget_no")[1].classList.add('widget_active');
    document.getElementsByClassName("widget_no")[2].classList.remove('widget_active');
}
const next3 = () => {
    if (plan == 'Monthly') {
        if (document.getElementById('check1').checked) {
            value += 1
            document.getElementById('add1').innerText='+$1/mo'
            document.getElementById('addon1').style.display='flex'

        }
        if (document.getElementById('check2').checked) {
            value += 2
            document.getElementById('add2').innerText='+$2/mo'
            document.getElementById('addon2').style.display='flex'

            
        }
        if (document.getElementById('check3').checked) {
            value += 2
            document.getElementById('add3').innerText='+$2/mo'
            document.getElementById('addon3').style.display='flex'

        }
    }
    if (plan == 'Yearly') {
        if (document.getElementById('check1').checked) {
            value += 10
            document.getElementById('add1').innerText='+$10/yr'
            document.getElementById('addon1').style.display='flex'

            
        }
        if (document.getElementById('check2').checked) {
            value += 20
            document.getElementById('add2').innerText='+$20/yr'
            document.getElementById('addon2').style.display='flex'
            
        }
        if (document.getElementById('check3').checked) {
            value += 20
            document.getElementById('add3').innerText='+$20/yr'
            document.getElementById('addon3').style.display='flex'
            
        }
        
    }


    document.getElementById('form3').style.display = "none";
    document.getElementById('form4').style.display = "block";
    document.getElementsByClassName("widget_no")[2].classList.remove('widget_active');
    document.getElementsByClassName("widget_no")[3].classList.add('widget_active');
    stage2 = value;
    document.getElementById('planName').innerHTML = `${planName} (${plan})`
    document.getElementById('planValue').innerHTML = `$${stage1}/${plan2}`
    document.getElementById('totalvalue').innerHTML=`$${stage2}/${plan2}`;

    

}

const back3 = () => {
    value = stage1;
    document.getElementById('form3').style.display = "block";
    document.getElementById('form4').style.display = "none";
    document.getElementsByClassName("widget_no")[2].classList.add('widget_active');
    document.getElementsByClassName("widget_no")[3].classList.remove('widget_active');
    addOn=[];
    document.getElementById('addon1').style.display='none'
    document.getElementById('addon2').style.display='none'
    document.getElementById('addon3').style.display='none'
}

const change = () => {
    addOn=[];
    document.getElementById('form4').style.display = 'none';
    document.getElementById('form2').style.display = 'block';
    value = 0;

}





const next4 = () => {


}
const back4 = () => {

}