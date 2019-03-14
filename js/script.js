function createrow(){
    var row = document.getElementById("createrow");
 
    var tr = document.createElement("tr")
    
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    
    
    var register_name = document.getElementById("name").value;
    
    var register_email = document.getElementById("email").value;
    
    var register_password = document.getElementById("pass").value;
    
    var creation_row = document.getElementById("createrow");

    creation_row.appendChild(tr);
    
    var child1 = tr.childNodes[0].innerHTML = register_name;
    
    var child2 = tr.childNodes[1].innerHTML = register_email;
    
    var child3 = tr.childNodes[2].innerHTML = register_password;

    document.getElementById("name").value="";
     document.getElementById("email").value="";
     document.getElementById("pass").value="";
     document.getElementById("main-display").style.display = "block";
}
function removepopup(){
     document.getElementById("main-display").style.display = "none";
}