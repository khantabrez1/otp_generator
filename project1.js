
function getOtp(){
   otp= String(Math.floor( 1000+ Math.random() *9000));
   alert( `OTP: ${otp}`);
   startCountdown()
}

function startCountdown(){
   clearInterval(timer);
   timeRemaining= 120;
   updateCountdown();

   timer= setInterval(()=>{
    timeRemaining--;
    updateCountdown();
    if(timeRemaining<=0){
        clearInterval(timer);
        alert("otp expired! Get new OTP");
        otp=null;
    }
   },1000)
}

function updateCountdown(){
    const minutes= Math.floor(timeRemaining/60);
    const seconds=timeRemaining % 60;
    let timer= document.getElementById("timer");
    timer.textContent=`Time remaining: ${minutes} : ${seconds}`
}



function checkOtp(){
    const inputOtp=document.getElementById('otp').value;
    if(inputOtp===otp){
        clearInterval(timer);
        alert("correct OTP");
        document.getElementById('display').textContent="Successful!";
        otp=null
    }
    else{
        alert("Failed! ,Please try again");
        document.getElementById('display').textContent="Failed";
    }

}

