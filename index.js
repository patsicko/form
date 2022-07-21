let body=document.getElementsByTagName("body")[0];
console.log(body);


let form=document.createElement("form");
form.classList.add("form");
form.setAttribute("id","form");

let fnamef=document.createTextNode("First Name");
form.appendChild(fnamef);

let fName=document.createElement("input");
fName.setAttribute("type","text");
fName.setAttribute("id","fname");
fName.classList.add("fname");
fName.setAttribute("placeholder","Your First Nmae");
form.appendChild(fName);
let br1=document.createElement("br");
let br2=document.createElement("br");
form.appendChild(br1);
form.appendChild(br2);

let lnamef=document.createTextNode("Last Name");
form.appendChild(lnamef);
let lName=document.createElement("input");
lName.setAttribute("type","text");
lName.setAttribute("id","lname");
lName.classList.add("lname");
lName.setAttribute("placeholder","Your Last Name");
form.appendChild(lName);
br1=document.createElement("br");
br2=document.createElement("br");
form.appendChild(br1);
form.appendChild(br2);


let emailf=document.createTextNode("Your Email");
form.appendChild(emailf);
let email=document.createElement("input");
email.setAttribute("type","email");
email.classList.add("email");
email.setAttribute("id","email");
email.setAttribute("placeholder","email")
form.appendChild(email);
br1=document.createElement("br");
br2=document.createElement("br");
form.appendChild(br1);
form.appendChild(br2);

let passwordf=document.createTextNode("Password");
form.appendChild(passwordf);
let password=document.createElement("input");
password.setAttribute("type","password");
password.setAttribute("id","password");
password.setAttribute("placeholder","password");
password.classList.add("password");
form.appendChild(password);
br1=document.createElement("br");
br2=document.createElement("br");
form.appendChild(br1);
form.appendChild(br2);

let submit=document.createElement("input");
submit.classList.add("submit");
submit.setAttribute("id","submit");
submit.setAttribute("type","submit");
submit.setAttribute("value","submit");
form.appendChild(submit);
body.appendChild(form);
console.log(form);


function MyObject(fName,lName,email,password){

this.fName=fName;
this.lName=lName;
this.email=email;
this.password=password;
}




// let myObject={

// };

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    

    let address=new MyObject(fName.value,lName.value,email.value,password.value);
    fName.value="";
    lName.value="";
    email.value="";
    password.value="";

 for(id in address){
    console.log(`${id}:${address[id]}`);
 }
 
//  let addressB=new MyObject("John","Doe","john@gmail.com","jo123@2022");

//  for(id in addressB){
//     console.log(`${id}:${addressB[id]}`);
//  }



//    myObject.fname=fName.value;
//    fName.value="";
//    myObject.lname=lName.value;
//    lName.value="";
//    myObject.email=email.value;
//    email.value="";

//    myObject.password=password.value;
//    password.value="";

//    for(id in myObject){
//     console.log(`${id}:${myObject[id]}`);
//    }


})

if(window.localStorage){
   console.log("suported");
}
else{
   console.log("not suported");
}