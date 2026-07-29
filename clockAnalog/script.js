let count =200.0


setInterval(()=>{
 
    let date = new Date()
    let second = date.getSeconds() + date.getMilliseconds()/1000
    let minute = date.getMinutes() + second / 60
    let hour = (date.getHours()%12)  + minute/60


    document.querySelector(".hour").style.transform = `rotate(${hour*30}deg)`
    document.querySelector(".minute").style.transform = `rotate(${(minute*6)}deg)`
    document.querySelector(".second").style.transform = `rotate(${second*6}deg)`
    
 

},100)