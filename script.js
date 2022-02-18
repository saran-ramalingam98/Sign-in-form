

  function store(){


    // name and password from sign 

    
    var name = document.getElementById('name');
    var mail = document.getElementById('mail');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in username');

    }else if(mail.value.length == 0){
        alert('Please fill in email');

    }
    else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && mail.value.length ==0 && pw.value.length == 0 ){
        alert('Please fill in email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lowercase letter');

    }else{

        // storing input from sign up   


        localStorage.setItem('name',name.value);
        localStorage.setItem('mail', mail.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
}


//checking

function check()
{

//    stored data from sign up

    var storedName = localStorage.getItem('name'); 
    var storedMail = localStorage.getItem('mail');
    var storedPw = localStorage.getItem('pw');


    // enter data from login form

    var userEmail = document.getElementById('mails');
    var userPw = document.getElementById('userpw');
    
    
    
    //   checking the data 


    if (userEmail.value === storedMail && userPw.value === storedPw)
    {
        alert('you logged in successfully');
    }

    else{
        alert('Login Error');
    }
};
