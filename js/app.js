
function getpin(){
    const pin  = Math.round(Math.random()*10000) 
    
    const pinString = pin + "" ;

    if (pinString.length == 4){
        return pin ;
    }

    else{
        console.log('got 3 digit and calling again',pin)
        return getpin() ; 

    }


}
function verifypin(){
      
    const pin = document.getElementById('display-pin').value
    const typedNumbers = document.getElementById('typed-numbers').value 
    const successNotification = document.getElementById('notify-success')
    const failError = document.getElementById('notify-fail')

    if(pin == typedNumbers){
        
       
        successNotification.style.display = 'block'
        failError.style.display = 'none'
    }
    else {
       
        failError.style.display='block'
        successNotification.style.display = 'none'
    }
}

function generatepin(){
   const pin = getpin()
   document.getElementById('display-pin').value= pin
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText 
    const calcInput = document.getElementById('typed-numbers')

    if(isNaN(number)) {

        if(number == 'C'){
            calcInput.value = ""
        }

    }
    else {
        const previousNumber =  calcInput.value ;
        const newNumber = previousNumber + number ;
        calcInput.value = newNumber ; 
    }


    

   
})