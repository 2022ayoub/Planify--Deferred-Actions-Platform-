
const arrP=document.querySelectorAll("p.error");
const arrInp=document.querySelectorAll(".test");
let [fname,lname,mail,tel,age]=arrInp;
let [errName,errlName,errMail,errTel,errAge,errCountry,errGender]=arrP;


function testName(test){
    if(fname.value.length<4 || fname.value.length>21 ){
        fname.style.border="1px solid red";
        errName.textContent = "Name must be between 4 and 20 characters long.";
        errName.style.display = "block";
        test.vName =true;
    }
    else if(!(/^[a-zA-Z]+(\s[a-zA-Z]+)?$/.test(fname.value.trim()))){
        fname.style.border="1px solid red";
        errName.textContent = "Name must be contain just one space or letters";
        errName.style.display = "block";
        test.vName=true;
    }
    else{
        fname.style.border="1px solid rgba(0,0,0,0.1)";
        errName.textContent = "";
        errName.style.display = "none";
        test.vName=false;
    }
}
//  ============================================
function testlName(test){
    if(lname.value.length<4 || lname.value.length>21 ){
        lname.style.border="1px solid red";
        errlName.textContent = "last name must be between 4 and 20 characters long.";
        errlName.style.display = "block";
        test.vlName =true;
    }
    else if(!(/^[a-zA-Z]+(\s[a-zA-Z]+)?$/.test(lname.value.trim()))){
        lname.style.border="1px solid red";
        errlName.textContent = "last Name must be contain just one space or letters";
        errlName.style.display = "block";
        test.vlName=true;
    }
    else{
        lname.style.border="1px solid rgba(0,0,0,0.1)";
        errlName.textContent = "";
        errlName.style.display = "none";
        test.vlName=false;
    }
}
// ===================================================
function testMail(test){
    if(!(/^([a-zA-Z0-9._%-]{4,20}@[a-zA-Z0-9.-]{2,20}\.[a-zA-Z]{2,6})*$/.test(mail.value))){
        mail.style.border="1px solid red";
        errMail.textContent = "Mail must be sous form : blabla@blabla.blabla ";
        errMail.style.display = "block";
        test.vMail =true;
    }
    else{
        mail.style.border="1px solid rgba(0,0,0,0.1)";
        errMail.textContent = "";
        errMail.style.display = "none";
        test.vMail=false;
    }
}
// ===================================================
function testTel(test){
    if((String(tel.value)).length >20 || (String(tel.value)).length<8){
        tel.style.border="1px solid red";
        errTel.textContent = "incorrect numero .";
        errTel.style.display = "block";
        test.vTel =true;
    }
    else{
        tel.style.border="1px solid rgba(0,0,0,0.1)";
        errTel.textContent = "";
        errTel.style.display = "none";
        test.vTel=false;
    }
}
// ===================================================
function testAge(test){
    if(age.value>100 || age.value<10){
        age.style.border="1px solid red";
        errAge.textContent = "Age must be between 10 and 100 .";
        errAge.style.display = "block";
        test.vAge =true;
    }
    else{
        age.style.border="1px solid rgba(0,0,0,0.1)";
        errAge.textContent = "";
        errAge.style.display = "none";
        test.vAge=false;
    }

}


// =======================================================

const gender=document.getElementById("gender");
const country=document.getElementById("country");

function testGender(test){
    if(gender.value==""){
        gender.style.border="1px solid red";
        errGender.textContent = "gender is required .";
        errGender.style.display = "block";
        test.vGender =true;
    }
    else{
        gender.style.border="1px solid rgba(0,0,0,0.1)";
        errGender.textContent = "";
        errGender.style.display = "none";
        test.vGender =false;
    }
}

function testCountry(test){
    if(country.value==""){
        country.style.border="1px solid red";
        errCountry.textContent = "country is required .";
        errCountry.style.display = "block";
        test.vCountry =true;
    }
    else{
        country.style.border="1px solid rgba(0,0,0,0.1)";
        errCountry.textContent = "";
        errCountry.style.display = "none";
        test.vCountry =false;
    }
}

export{testName,testlName,testMail,testAge,testTel,testCountry,testGender}