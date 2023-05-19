

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

var plan = 'monthly'
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
            plan = 'yearly'

        ) : (
            document.getElementById('switchBtn_1').classList.add('active_switch'),
            document.getElementById('switchBtn_2').classList.remove('active_switch'),
            document.getElementById('plan_1').innerText = '$9/month',
            document.getElementById('plan_2').innerText = '$12/month',
            document.getElementById('plan_3').innerText = '$15/month',
            document.getElementById('free1').style.display = 'none',
            document.getElementById('free2').style.display = 'none',
            document.getElementById('free3').style.display = 'none',
            plan = 'monthly'

        )
}

const back1 = () => {
    document.getElementById('form1').style.display = "block";
    document.getElementById('form2').style.display = "none";
    document.getElementsByClassName("widget_no")[0].classList.add('widget_active');
    document.getElementsByClassName("widget_no")[1].classList.remove('widget_active');
}

var value=0;
var stage1=0;
var stage2=0;
const next2 = () => {
    if (document.getElementById('radio1').checked) {
        document.getElementById('form2').style.display = "none";
        document.getElementById('form3').style.display = "block";
        document.getElementsByClassName("widget_no")[1].classList.remove('widget_active');
        document.getElementsByClassName("widget_no")[2].classList.add('widget_active');
        if (plan == 'monthly') {
            value += 9
        }
        else value += 90
    }

    else if (document.getElementById('radio2').checked) {
        document.getElementById('form2').style.display = "none";
        document.getElementById('form3').style.display = "block";
        document.getElementsByClassName("widget_no")[1].classList.remove('widget_active');
        document.getElementsByClassName("widget_no")[2].classList.add('widget_active');
        if (plan == 'monthly') {
            value += 12
        }
        else value += 120
    }
    else if (document.getElementById('radio3').checked) {
        document.getElementById('form2').style.display = "none";
        document.getElementById('form3').style.display = "block";
        document.getElementsByClassName("widget_no")[1].classList.remove('widget_active');
        document.getElementsByClassName("widget_no")[2].classList.add('widget_active');
        if (plan == 'monthly') {
            value += 15
        }
        else value += 150
    }
    else {
        document.getElementById('.err2').style.display = 'block';
    }
    console.log(value);
    stage1=value;
}

const back2 = () => {
    value=0;
    document.getElementById('form2').style.display = "block";
    document.getElementById('form3').style.display = "none";
    document.getElementsByClassName("widget_no")[1].classList.add('widget_active');
    document.getElementsByClassName("widget_no")[2].classList.remove('widget_active');
    console.log(value)
}
const next3 = () => {
    if (plan == 'monthly') {
        if (document.getElementById('check1').checked) {
            value += 1
        }
        if (document.getElementById('check2').checked) {
            value += 2
        }
        if (document.getElementById('check3').checked) {
            value += 2
        }
    }
    if (plan == 'yearly') {
        if (document.getElementById('check1').checked) {
            value += 12
        }
        if (document.getElementById('check2').checked) {
            value += 24
        }
        if (document.getElementById('check3').checked) {
            value += 24
        }
    }


    document.getElementById('form2').style.display = "none";
    document.getElementById('form3').style.display = "block";
    document.getElementsByClassName("widget_no")[2].classList.remove('widget_active');
    document.getElementsByClassName("widget_no")[3].classList.add('widget_active');
    console.log(value)
    stage2=value;

}

const back3 = () => {
    value=stage1;
    document.getElementById('form2').style.display = "block";
    document.getElementById('form3').style.display = "none";
    document.getElementsByClassName("widget_no")[2].classList.add('widget_active');
    document.getElementsByClassName("widget_no")[3].classList.remove('widget_active');
    console.log(value)
}