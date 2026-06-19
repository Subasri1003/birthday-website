
function checkName(){
    let name = document.getElementById("nameInput").value.toLowerCase().trim();
    if(name === "mugesh" || name === "eruma"){

    localStorage.setItem("birthdayName",name);
    window.location.href = "welcome.html";
    }
    else{
        alert("oops....This is not for you");
    }
}