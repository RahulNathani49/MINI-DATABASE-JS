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
    
    var child4 = tr.childNodes[3].innerHTML = '<button type="button" class="btn btn-success" onclick="update()" id="updatevalue"><i class="fas fa-edit" ></i></button>';
    
    var child5 = tr.childNodes[4].innerHTML = '<button type="button" class="btn btn-danger" id="delete" onclick="deleterow()"><i class="fas fa-trash-alt"></i></button>';
   

    document.getElementById("name").value="";
     document.getElementById("email").value="";
     document.getElementById("pass").value="";
     document.getElementById("main-display").style.display = "block";
}
function removepopup(){
     document.getElementById("main-display").style.display = "none";
}
function update(){
    document.getElementById("update-dialog").style.display = "block";
}
function removeupdate(){
     document.getElementById("update-dialog").style.display = "none";
}
function updatevalue(){
    
    var newchild1 = document.getElementById("newname").value;
    
    var newchild2 = document.getElementById("newemail").value;
    
    var newchild3 = document.getElementById("newpassword").value;
    
    var y = document.getElementById("updatevalue").parentNode.parentNode;
    
    var child1 = y.childNodes[0].innerHTML = newchild1;
    
    var child2 = y.childNodes[1].innerHTML = newchild2;
    
    var child3 = y.childNodes[2].innerHTML = newchild3;
    
    document.getElementById("update-dialog").style.display = "none";
    
document.getElementById("newname").value="";
    
document.getElementById("newemail").value="";
    
document.getElementById("newpassword").value="";
}

function deleterow(){
    document.getElementById("delete-dialog").style.display = "block"; 
}
function closedelete(){
     document.getElementById("delete-dialog").style.display = "none";
}

function deletevalue(){
   var x = document.getElementById("delete").parentNode.parentNode.parentNode; 
   x.removeChild(x.childNodes[1]);   document.getElementById("delete-dialog").style.display = "none";

}
function closeadmin(){
    document.getElementById("open-entry").style.display="none";
}
function openentry(){
    document.getElementById("open-entry").style.display="block";
}
function removeadmin(){
    document.getElementById("admin-welcome").style.display="none";
}
function noadmin(){
       document.getElementById("admin-wrong").style.display = "none";
}

function checkadmin(){
    var username = document.getElementById("username").value;
    var adminpass = document.getElementById("adminpass").value;
    
    if(username === "rahuladmin" && adminpass === "21062002"){
        document.getElementById("admin-welcome").style.display = "block";
         document.getElementById("maindatabase").style.display = "block";
        
        document.getElementById("register").style.display = "none";
         document.getElementById("adminlogin").style.display = "none";
        document.getElementById("adminlogout").style.display = "block";
    }
    else{
          document.getElementById("admin-wrong").style.display = "block";
        
    }
       var username = document.getElementById("username").value="";
    var adminpass = document.getElementById("adminpass").value="";
    
     document.getElementById("open-entry").style.display = "none";
}
function adminlogout(){
    document.getElementById("maindatabase").style.display="none";
     document.getElementById("register").style.display="block";
    
    document.getElementById("adminlogin").style.display="block";
    
    
}