localStorage.setItem('users', JSON.stringify([])); 
navigator.geolocation.getCurrentPosition(showLocation, rejectLocation)

///////////////////////////////////////////////////////////////////////////////////////////////////////
const body = document.querySelector("body");
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const fullName = document.querySelector("#fullName")
const email = document.querySelector("#email")
const button = document.querySelector(".form-button");
const form = document.querySelector(".form");
const closeWindowSpan = document.querySelector('.form span');
const singIn = document.querySelector('.headar-btn')

let havasarchi = false;
let currentLocation = null;
let isErrorWindow = false;
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const choosePasword = () => (
    password.value.length >= 8 && 
    password.value.includes('_') || 
    password.value.includes('.') || 
    password.value.includes('-') 
)   

const closeWindow = () => {
    const windowError = document.querySelector('.windowError')
    windowError.remove();
    isErrorWindow = false
    form.style.zIndex = 0
    form.style.opacity = 1
}

const createErrorWindow = () => {
    isErrorWindow = true;
    const windowError = `
      <div class='windowError'>
        <span onclick='closeWindow()'>X</span>
        <h1>hahahah :)</h1>
      </div>
	`;
    form.insertAdjacentHTML('beforeend', windowError);
}

const cleanInputs = () => {
    username.value = ''
    password.value = ''
    fullName.value = ''
    email.value = ''
}

// tan
singIn.addEventListener('click', () => {
    form.classList.add('form-anim');
})
closeWindowSpan.addEventListener('click', () => {
    isErrorWindow = false;
    form.classList.remove('form-anim');
})
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(!isErrorWindow){
        const userData = JSON.parse(localStorage.getItem('users'));
        
        if(!choosePasword()){
            createErrorWindow()
            cleanInputs();
            return 
        }
    
        if(!userData.length) {
            userData.push({
                id: uneqId(),
                location:currentLocation,
                fullName: fullName.value,
                email: email.value,
                username: username.value,
                password: password.value
            }) 
        }else{
    
            for(let i = 0; i < userData.length; i++){
                if(userData[i].password === password.value){
                    createErrorWindow()
                    return 
                }else {
                    havasarchi = true
                }
            }
    
            if(havasarchi){
                userData.push({
                    id: uneqId(),
                    location:currentLocation,
                    fullName: fullName.value,
                    email: email.value,
                    username: username.value,
                    password: password.value
                }) 
            }
        
        }
        localStorage.setItem("users", JSON.stringify(userData));
        cleanInputs()
    }
})
////////////////////////////////////////////////////////////////////////////
function showLocation (position) {
    currentLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
    }
}
function rejectLocation () {
    currentLocation = null;
}

//////////////////////////////////////////////////////////////////////
function uneqId () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

//////////////////////////////////// WORKING WITH COOKIES ///////////////////////////////////////////////////
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function set_cookie(cookiename, cookievalue, hours) {
    var date = new Date();
    date.setTime(date.getTime() + Number(hours) * 3600 * 1000);
    document.cookie = cookiename + "=" + cookievalue + "; path=/;expires = " + date.toGMTString();
}
