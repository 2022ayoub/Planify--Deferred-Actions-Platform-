
// ***************************
const header=document.getElementById("header");
window.addEventListener('scroll', function() {
    if (( window.scrollY) >200) {
        header.classList.add("shadow");
    }
    else{
        header.classList.remove("shadow");
    }
});



// ********************* HELP HEADER DROPDOWN

const drop=document.getElementById("cont-item-head-drop");
const elementHover=document.getElementById("con-li-help-ul");
const helpcolor=document.getElementById("a-contact");
elementHover.addEventListener('mouseover',() =>{
    // drop.classList.add("show-dropdown");
    drop.style.display="block";
    helpcolor.style.color="#7452f3";
});
elementHover.addEventListener('mouseout',() =>{
    // drop.classList.remove("show-dropdown");
    drop.style.display="none";
    helpcolor.style.color="#ccc";
});

// **********************************************************************************************************************
// ****************************************** SLIDER ABOUT
const figureImg = document.querySelector('figure img');
const Imgs = document.querySelectorAll('.slide img');
Imgs.forEach(function(img) {
    img.addEventListener('click',function(e) {
        figureImg.src = e.target.src;
    })
});
// ***************************************** BUTTON PRICES 
const year=document.getElementById("btn-year");
const month=document.getElementById("btn-month");
const prix=document.getElementById("changable-prix");
const indice=document.getElementById("changable-indice");
year.addEventListener('click',() =>{
    year.classList.add("click");
    month.classList.remove("click");
    prix.textContent = "$9.99";
    indice.textContent="Annually";
});
month.addEventListener('click',() =>{
    month.classList.add("click");
    year.classList.remove("click");
    prix.textContent = "$2.99";
    indice.textContent="Per Month";
});
// ******************************************************************************************** FAQ ******************************
// **************** 1ere 
const conQ1 = document.getElementById("conQ1");
const img1 = document.getElementById("imgQ1");
const quest1 = document.getElementById("quest1");


conQ1.addEventListener('click',() =>{

    if (img1.classList.contains("rotation")) {
        img1.classList.remove("rotation");
        quest1.classList.remove("show-quest");
        
    } else {
        img1.classList.add("rotation");
        quest1.classList.add("show-quest");
    }   
});


// **************** 2eme 
const conQ2 = document.getElementById("conQ2");
const img2 = document.getElementById("imgQ2");
const quest2 = document.getElementById("quest2");


conQ2.addEventListener('click',() =>{

    if (img2.classList.contains("rotation")) {
        img2.classList.remove("rotation");
        quest2.classList.remove("show-quest");
        
    } else {
        img2.classList.add("rotation");
        quest2.classList.add("show-quest");
    }   
});

// ****** 3eme 
const conQ3 = document.getElementById("conQ3");
const img3 = document.getElementById("imgQ3");
const quest3 = document.getElementById("quest3");


conQ3.addEventListener('click',() =>{

    if (img3.classList.contains("rotation")) {
        img3.classList.remove("rotation");
        quest3.classList.remove("show-quest");
        
    } else {
        img3.classList.add("rotation");
        quest3.classList.add("show-quest");
    }   
});

// ********4eme
const conQ4 = document.getElementById("conQ4");
const img4 = document.getElementById("imgQ4");
const quest4 = document.getElementById("quest4");


conQ4.addEventListener('click',() =>{

    if (img4.classList.contains("rotation")) {
        img4.classList.remove("rotation");
        quest4.classList.remove("show-quest");
        
    } else {
        img4.classList.add("rotation");
        quest4.classList.add("show-quest");
    }   
});

// ********5eme
const conQ5 = document.getElementById("conQ5");
const img5 = document.getElementById("imgQ5");
const quest5 = document.getElementById("quest5");


conQ5.addEventListener('click',() =>{

    if (img5.classList.contains("rotation")) {
        img5.classList.remove("rotation");
        quest5.classList.remove("show-quest");
        
    } else {
        img5.classList.add("rotation");
        quest5.classList.add("show-quest");
    }   
});

// ************** 6eme

const conQ6 = document.getElementById("conQ6");
const img6 = document.getElementById("imgQ6");
const quest6 = document.getElementById("quest6");


conQ6.addEventListener('click',() =>{

    if (img6.classList.contains("rotation")) {
        img6.classList.remove("rotation");
        quest6.classList.remove("show-quest");
        
    } else {
        img6.classList.add("rotation");
        quest6.classList.add("show-quest");
    }   
});

// *************** 7eme

const conQ7 = document.getElementById("conQ7");
const img7 = document.getElementById("imgQ7");
const quest7 = document.getElementById("quest7");


conQ7.addEventListener('click',() =>{

    if (img7.classList.contains("rotation")) {
        img7.classList.remove("rotation");
        quest7.classList.remove("show-quest");
        
    } else {
        img7.classList.add("rotation");
        quest7.classList.add("show-quest");
    }   
});

// *************** 8eme

const conQ8 = document.getElementById("conQ8");
const img8 = document.getElementById("imgQ8");
const quest8 = document.getElementById("quest8");


conQ8.addEventListener('click',() =>{

    if (img8.classList.contains("rotation")) {
        img8.classList.remove("rotation");
        quest8.classList.remove("show-quest");
        
    } else {
        img8.classList.add("rotation");
        quest8.classList.add("show-quest");
    }   
});

// ********** 9eme

const conQ9 = document.getElementById("conQ9");
const img9 = document.getElementById("imgQ9");
const quest9 = document.getElementById("quest9");


conQ9.addEventListener('click',() =>{

    if (img9.classList.contains("rotation")) {
        img9.classList.remove("rotation");
        quest9.classList.remove("show-quest");
        
    } else {
        img9.classList.add("rotation");
        quest9.classList.add("show-quest");
    }   
});

// *********** 10eme

const conQ10 = document.getElementById("conQ10");
const img10 = document.getElementById("imgQ10");
const quest10 = document.getElementById("quest10");


conQ10.addEventListener('click',() =>{

    if (img10.classList.contains("rotation")) {
        img10.classList.remove("rotation");
        quest10.classList.remove("show-quest");
        
    } else {
        img10.classList.add("rotation");
        quest10.classList.add("show-quest");
    }   
});

// ********************** 11eme

const conQ11 = document.getElementById("conQ11");
const img11 = document.getElementById("imgQ11");
const quest11 = document.getElementById("quest11");


conQ11.addEventListener('click',() =>{

    if (img11.classList.contains("rotation")) {
        img11.classList.remove("rotation");
        quest11.classList.remove("show-quest");
        
    } else {
        img11.classList.add("rotation");
        quest11.classList.add("show-quest");
    }   
});

// ***************************** 12eme
const conQ12 = document.getElementById("conQ12");
const img12 = document.getElementById("imgQ12");
const quest12 = document.getElementById("quest12");


conQ12.addEventListener('click',() =>{

    if (img12.classList.contains("rotation")) {
        img12.classList.remove("rotation");
        quest12.classList.remove("show-quest");
        
    } else {
        img12.classList.add("rotation");
        quest12.classList.add("show-quest");
    }   
});

// *********************************************************************************************************************  FIN 





  