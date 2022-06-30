let body=document.getElementsByTagName("body")[0];
console.log(body);
let form=document.createElement("form");
form.classList.add("form");
form.setAttribute("id","form");
let fName=document.createElement("input");
fName.setAttribute("type","text");
fName.setAttribute("id","fname");
fName.classList.add("fname");
fName.setAttribute("placeholder","Your First Nmae");
let required=document.createTextNode("required");
fName.appendChild(required);
form.appendChild(fName);

let lName=document.createElement("input");
lName.setAttribute("type","text");
lName.setAttribute("id","lname");
lName.classList.add("lname");
lName.setAttribute("placeholder","Your Last Name");
form.appendChild(lName);

let email=document.createElement("input");
email.setAttribute("type","email");
email.classList.add("email");
email.setAttribute("id","email");
form.appendChild(email);

let password=document.createElement("input");
password.setAttribute("type","password");
password.setAttribute("id","password");
password.classList.add("password");
 let req=document.createTextNode("required");
 password.appendChild("required");
 






body.appendChild(form);
