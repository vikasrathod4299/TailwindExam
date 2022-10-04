function toggle(){    
    let toggleButton = document.querySelector("#toggleIcon")
    var nav = document.querySelector('nav')
    let ham = document.querySelector("#ham")
    
    toggleButton.querySelector("#logo").classList.toggle("invert")
    document.querySelector("#ulItems").classList.remove("hidden")
    
    if(ham.getAttribute("src")==="../assets/images/hamburger-menu.svg")
    {
        document.querySelector("#mainNav").classList.add("h-full")
        ham.setAttribute("src", "../assets/images/close-icon.svg")
        nav.classList.remove("bg-white")
        nav.classList.add("bg-slate-500")
    }
    else{
        document.querySelector("#mainNav").classList.remove("h-full")
        ham.setAttribute("src", "../assets/images/hamburger-menu.svg")
        document.querySelector("#ulItems").classList.add("hidden")
        nav.classList.add("bg-white")
        nav.classList.remove("bg-slate-500")
    }

}