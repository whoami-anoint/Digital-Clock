const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
      
},1000)

// 1000 Miliseconds = 1 second