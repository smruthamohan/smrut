function desplay(){
    var name=document.getElementById("name");
    var email=document.getElementById("emali");
    if(name.value==""){
        alert("must enter the name");
        return false;
    }
    if(name.value.length<3){
        alert("invalid name");
        return false;
    }
    if(name.value.length>20){
        alert("invalid name");
        return false;
    }
    if(name.value.match(correct_way))
    true;
    else{
        alert("invalid name");
        return false;
    }
    if(email.value==""){
        alert("must enter the email");
        return false;
    }
    if(email.value.indexOf ('@')<=0){
        alert("invalid email id");
        return false;

    }
    if(email.value.charAt (email.value.length-4)!="."){
        alert("invalid email id");
        return false;
    }


if(subject.value==""){
   alert("must include the subject");
   return false;
}
if(Message.value==""){
    alert("must include the message");
    return false;
}
return true;
}