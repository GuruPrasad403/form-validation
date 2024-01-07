var btn = document.getElementById("submit");
var nae = document.querySelector("#Username");
var email = document.querySelector("#Email");
var pin = document.querySelector("#Password");
var conpin = document.querySelector("#ConPassword");
var tc = document.querySelector("#Checkbox");
const arr = [btn,nae,email,pin,conpin,tc];
nae.addEventListener("focus",()=>{
nae.addEventListener("keypress",(event)=>{
    if (!(/^[a-zA-Z ]+$/.test(event.key))) {
        nae.classList.add("err");
        nae.classList.remove("Nerr");
    } else {
        nae.classList.remove("err");
        nae.classList.add("Nerr");
    }
})
})
nae.addEventListener("blur",()=>{
    if(nae.value==""){
        nae.setAttribute('placeholder',"Name Compulsary")
       nae.classList.add("red")
        nae.classList.add("err");

    }
else if (!(/^[a-zA-Z ]+$/.test(nae.value))) {    
    nae.classList.add("err");
}
else{
    nae.classList.remove("err");
    nae.classList.remove("Nerr");
}
})

//email

email.addEventListener("focus",()=>{
    email.addEventListener("keypress",(event)=>{
        if (!(/^[a-zA-Z0-9._-]+@gmail\.com$/.test(event.key))) {
            email.classList.add("err");
            email.classList.remove("Nerr");
        } else {
            email.classList.remove("err");
            email.classList.add("Nerr");
        }
    })
    })
    email.addEventListener("blur",()=>{
        if(email.value==""){
            email.setAttribute('placeholder',"Email Compulsary")
           email.classList.add("red")
            email.classList.add("err");
    
        }
    else if (!(/^[a-zA-Z0-9._-]+@gmail\.com$/.test(email.value))) {    
        email.classList.add("err");
    }
    else{
        email.classList.remove("err");
        email.classList.remove("Nerr");
    }
    })
    //password

    pin.addEventListener("focus",()=>{
        pin.addEventListener("keypress",(event)=>{
            if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(event.key))) {
                pin.classList.add("err");
                pin.classList.remove("Nerr");
            } else {
                pin.classList.remove("err");
                pin.classList.add("Nerr");
            }
        })
        })
        pin.addEventListener("blur",()=>{
            if(pin.value==""){
                pin.setAttribute('placeholder',"Password Compulsary")
               pin.classList.add("red")
                pin.classList.add("err");
        
            }
        else if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pin.value))) {    
            pin.classList.add("err");
        }
        else{
            pin.classList.remove("err");
            pin.classList.remove("Nerr");
        }
        })

//conpin
conpin.addEventListener("focus",()=>{
    conpin.addEventListener("keypress",(event)=>{
        if (!(conpin.value===pin.value)) {
            conpin.classList.add("err");
            conpin.classList.remove("Nerr");
        } else {
            conpin.classList.remove("err");
            conpin.classList.add("Nerr");
        }
    })
    })
    conpin.addEventListener("blur",()=>{
        if(conpin.value==""){
            conpin.setAttribute('placeholder',"Password do not match")
           conpin.classList.add("red")
            conpin.classList.add("err");
    
        }
    else if (!(conpin.value===pin.value)){    
        conpin.classList.add("err");
    }
    else{
        conpin.classList.remove("err");
        conpin.classList.remove("Nerr");
    }
    })
//checked
if(!tc.checked){
    btn.disabled=!(tc.checked)
}
tc.addEventListener("change",()=>{
    btn.disabled=!(tc.checked)
})
btn.addEventListener("click",function (){

})