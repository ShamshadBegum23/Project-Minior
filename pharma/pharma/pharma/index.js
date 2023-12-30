function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="enter username*";
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML=" username atleast six letters";
        return false;
        }
        else if(document.Formfill.Email.value==""){
            document.getElementById("result").innerHTML="enter your email";
            return false;
            }
            else if(document.Formfill.Password.value==""){
                document.getElementById("result").innerHTML="enter your password";
                return false;
                }
                else if(document.Formfill.Password.value.length<6){
                    document.getElementById("result").innerHTML="password must be 6 digits";
                    return false;

}
                    else if(document.Formfill.cPassword.value==""){
                        document.getElementById("result").innerHTML="enter confirm password";
                        return false;
                        }
                        else if(document.Formfill.Password.value!=document.Formfill.cPassword.value){
                            document.getElementById("result").innerHTML="confirm password doesn't match";
                            return false;
                        }
                        else if(document.Formfill.Password.value==document.Formfill.cPassword.value){
                            popup.classList.add("open-slide");
                            return false;
                        }

}
var popup=document.getElementById('popup');
function closeslide(){
    popup.classList.remove('open-slide');
}