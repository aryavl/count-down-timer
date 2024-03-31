(function () {  
    const hour = document.querySelector('.hour')
    const minute = document.querySelector('.minute')
    const second = document.querySelector('.second')

    const startBtn = document.querySelector('.start')
    const stopBtn = document.querySelector('.stop')
    const resetBtn = document.querySelector('.reset')

    let countdownTimer = null
    startBtn.addEventListener("click",()=>{
        if(parseInt(hour.value) === 0 && parseInt(minute.value) === 0 && parseInt(second.value) === 0) return


        function startInterval(){
            startBtn.style.display = "none"
            stopBtn.style.display = "initial"

           countdownTimer =setInterval(timer,1000)
        }
        startInterval()
    })
    function timer(){
        if(parseInt(second.value)>60){
            minute.value++;
            second.value = parseInt(second.value) - 59
        }
        if(parseInt(minute.value)>60){
            hour.value++;
            minute.value = parseInt(minute.value) - 60
        }
       if(parseInt(second.value)>0){
            second.value=`${parseInt(second.value) <=10 ? "0":''}${parseInt(second.value) - 1}`
        }else if(parseInt(minute.value) >0 ){
            second.value = 59
            minute.value=`${parseInt(minute.value) <=10 ?"0":""}${parseInt(minute.value )-1}`

        }else if(parseInt(hour.value) >0 ){
            minute.value=60
            hour.value=`${parseInt(hour.value) <=10 ?"0":""}${parseInt(hour.value) -1}`
        }else{
            clearInterval(countdownTimer)
        }
    }
    function stopIntervel(state){
        startBtn.innerHTML = state === "Pause" ? "Continue":"Start"
        startBtn.style.display="initial"
        stopBtn.style.display = "none"
        clearInterval(countdownTimer)
    }
    stopBtn.addEventListener("click",()=>{
        stopIntervel("Pause")
    })
    resetBtn.addEventListener("click",()=>{
        hour.value = ""
        minute.value = ""
        second.value = ""
        stopIntervel()
    })
})()