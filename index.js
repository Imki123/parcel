console.log("hello world")

//states in app
const state = {
    toggle: false,
    number: 0,
    interval: null,
    interval2: null
}

//DOM objects
const toggle = document.querySelector("#toggle")
const number = document.querySelector("#number")
const increase = document.querySelector("#increase")
const decrease = document.querySelector("#decrease")

//toggle
function clickToggle(){
    state.toggle = !state.toggle
    if(state.toggle){
        toggle.classList.add('active')
    }else{
        toggle.classList.remove('active')
    }
}

//spinner
function addNum() {
  state.number = state.number + 1
  number.value = state.number
  console.log("add")
}

function subtNum() {
  state.number = state.number - 1
  number.value = state.number
  console.log("subtract")
}

//custom interval
function doInterval(num){
    let time = 200
    state.interval = setInterval(function(){
        state.number = state.number + num
        number.value = state.number
        console.log(time)
    }, time)
    //faster interval *2 each 1.5s
    state.interval2 = setInterval(function(){
        clearInterval(state.interval)
        time = time*0.5
        if(time <= 1){
            num = num*2
        }
        state.interval = setInterval(function(){
            state.number = state.number + num
            number.value = state.number
            console.log(time)
        }, time)
    },1500)
}

toggle.onclick = clickToggle
increase.onclick = addNum
increase.onmousedown = function(){
    doInterval(1)
}
increase.onmouseup = function(){
    clearInterval(state.interval)
    clearInterval(state.interval2)
}

decrease.onclick = subtNum
decrease.onmousedown = function(){
    doInterval(-1)
}
decrease.onmouseup = function(){
    clearInterval(state.interval)
    clearInterval(state.interval2)
}

