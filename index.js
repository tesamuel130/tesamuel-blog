var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contentes");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var work = document.querySelectorAll('.work');

function rotate(e){
    for(works of work){
        works.classList.remove('rotate')
    }
    e.target.classList.add('rotate');
}

// ----------------------------
