const toggle = document.getElementById("themeToggle");

const body = document.body;


// Load saved theme

if(localStorage.getItem("theme") === "dark"){

    body.classList.add("dark");
    toggle.checked = true;

}



// Change theme

toggle.addEventListener("change",()=>{


    if(toggle.checked){

        body.classList.add("dark");

        localStorage.setItem("theme","dark");

    }
    else{

        body.classList.remove("dark");

        localStorage.setItem("theme","light");

    }


});