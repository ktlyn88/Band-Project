// show cart
const shoppingCart = document.getElementById('shopping-cart');
const caaart = document.getElementById('cart');

shoppingCart.addEventListener('click', () => {
    caaart.classList.toggle('showww');
})




const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    navUl.classList.toggle('show');
})
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('show');
    navUl.classList.remove('show');
}))


// functie pentru video Slider:
function videoSlider(links){
    document.querySelector(".slider").src = links; 
}


// account Log in/sign up
let LoginForm = document.getElementById('LoginForm');
let RegForm = document.getElementById('RegForm');
let Indicator = document.getElementById('Indicator');

function moveRegister() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}

function moveLogin() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}



// Header Buttons
// Account
let btnAccount = document.getElementById('account');
let dropDown = document.getElementById('logOutDrop');

btnAccount.addEventListener('click', () => {
    btnAccount.classList.toggle('active');
    dropDown.classList.toggle('active');
    
    let name = localStorage.getItem('name')?localStorage.getItem('name'):'';

    if (name == '') {
        dropDown.classList.toggle('inactive');
        alert('You need to create an account first');
        window.location.href = 'account.html';
    }
})
// ------------------
// LogOut function
let logOutBtn = document.getElementById('logOutBtn');
logOutBtn.addEventListener('click', () => {
    localStorage.removeItem('name');
    window.location.href = 'account.html';
})



// function logOut() {
//     localStorage.removeItem('name');
//     window.location.href = 'account.html';
// }

// let logOutUser = document.getElementById('logOutBtn');
// logOutUser.addEventListener('click', logOut());



// ------------------
// let btnAccount = document.getElementById('account');

// btnAccount.addEventListener('click', () => {
//     window.location.href = 'account.html';
// });

// ********************************************************************************

// ********************************************************************************


 // For user registration 

function register() {
    event.preventDefault();

    const firstName = document.getElementById('firstN').value;
    const lastName = document.getElementById('lastN').value;
    const email = document.getElementById('eml').value;
    const passw = document.getElementById('passw').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    const userData = {
        firstName: document.getElementById('firstN').value,
        lastName: document.getElementById('lastN').value,
        email: document.getElementById('eml').value,
        password: document.getElementById('passw').value,
        city: document.getElementById('city').value,
        country: document.getElementById('country').value
  };


  let usersr = JSON.parse(localStorage.getItem('Users')) || [];

// -------------

    if (!firstName || !lastName || !email || !passw || !city || !country) {
        return alert("You need to fill up all the fields");
}
    if (passw.length < 8) {        
       return alert('Password must be longer than 7 characters');
}
// --------------------

  if(!usersr.some(user => user.email === userData.email)) {
   usersr.push(userData);
   localStorage.setItem('Users', JSON.stringify(usersr));
   alert('Account successfully created, Login now');
//    location.reload();
   moveLogin();
  }
  else {
    alert('Email already used, Login now')
    moveLogin();
    // location.reload();
  }
}

function logIn() {
    event.preventDefault();
    const loginEmail = document.getElementById('logInEmail').value;
    const loginPass = document.getElementById('logInPassword').value;

    if (localStorage.getItem('Users')) {
        const allStoredUsers = JSON.parse(localStorage.getItem('Users'));
        const matchedUser = allStoredUsers.filter(user => {
            return loginEmail === user.email && loginPass === user.password;
        })


        if (matchedUser.length) {

            alert('Login successfully done');

            // take current name for profile
// --------------------

            let current_user = allStoredUsers.filter((n)=>{
                return n.email==loginEmail && n.password==loginPass
            })[0];
            localStorage.setItem('name', current_user.lastName);


// --------------------

            window.location.href = 'home.html';


        } else {
            alert('Wrong credentials');
        }
    } else {
        alert('Not a registered member');
    }
}

// -------------------------------------------------------------


