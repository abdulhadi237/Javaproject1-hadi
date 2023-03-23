function login (){
  var username = document.getElementById("username").value;
  localStorage.setItem("username", username);
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if(email=="admin@user.com" && password=="123456"){
  window.location.assign("home.html")
  alert("Login Successfully")  
}
else
Toastify({
text: "Invalid Information",
duration: 3000,
newWindow: true,
close: true,
gravity: "top", 
position: "center", 
stopOnFocus: true, 
style: {
    background: "linear-gradient(to right, #14C9CB, #08B3E5)",
},
}).showToast();
return;
}
function forgetpass (){
Toastify({
    text: "Use 'admin@user.com' as Email and '123456' as Password",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "center", 
    stopOnFocus: true, 
    style: {
        background: "linear-gradient(to right, #14C9CB, #08B3E5)",
    },
    }).showToast();    
}
let username = localStorage.getItem("username")
document.getElementById("uname").innerHTML = username
let cities = ['Faislabad', 'Lahore', 'Karachi', 'Islamabad', 'Gujranwala', 'Shiekhupura', 'Jhelum']
function printcities (){
    document.getElementById("output").innerHTML="";
    for (let i = 0; i < cities.length; i++){
        let num = i + 1;
        document.getElementById("output").innerHTML += num + ') ' + cities[i] + '<br>'
        console.log(cities)
    }
}
function addcity(){
    
    let city = document.getElementById("inputtext").value;
    
    if(city.length < 3){
        Toastify({
            text: "Please Enter Valid City Name in Input Field !",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #14C9CB, #08B3E5)",            
            },
          }).showToast();
        return;
    } 
    
    let cityFirstLetter = city.slice(0, 1).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase();
    let capitalized = cityFirstLetter + cityAllLetters;
    
    let cityFound = false;
    
    
    for( let i = 0; i < cities.length; i++){
        
        if (cities[i] === capitalized ) {
            cityFound = true;
            Toastify({
                text: capitalized + ' Already in your list !',
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #14C9CB, #08B3E5)",
                },
              }).showToast();
            return;
        }
        
    }
    
    if( cityFound === false){
        cities.push(capitalized);
        Toastify({
            text: capitalized + ' Added to your list !',
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #14C9CB, #08B3E5)",
            },
          }).showToast();
    }
    
}
document.getElementById("clearoutputbutton").onclick = function () {
      document.getElementById("output").innerHTML = " ";
}
  