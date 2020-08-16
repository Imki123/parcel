console.log("hello world")

//states in app
const state = {
  toggle: false,
  number: 0,
  interval: null,
  interval2: null,
}

//DOM objects
const toggle = document.querySelector("#toggle")
const number = document.querySelector("#number")
const increase = document.querySelector("#increase")
const decrease = document.querySelector("#decrease")

const number2 = document.querySelector("#number2")
const increase2 = document.querySelector("#increase2")
const decrease2 = document.querySelector("#decrease2")

//toggle
function clickToggle() {
  state.toggle = !state.toggle
  if (state.toggle) {
    toggle.classList.add("active")
  } else {
    toggle.classList.remove("active")
  }
}

//Counter
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
function doInterval(num) {
  let time = 200
  state.interval = setInterval(function () {
    state.number = state.number + num
    number.value = state.number
    console.log(time)
  }, time)
  //faster interval *2 each 1.5s
  state.interval2 = setInterval(function () {
    clearInterval(state.interval)
    time = time * 0.5
    if (time <= 1) {
      num = num * 2
    }
    state.interval = setInterval(function () {
      state.number = state.number + num
      number.value = state.number
      console.log(time)
    }, time)
  }, 1500)
}

toggle.onclick = clickToggle
increase.onclick = addNum
increase.onmousedown = function () {
  doInterval(1)
}
increase.onmouseup = function () {
  clearInterval(state.interval)
  clearInterval(state.interval2)
}

decrease.onclick = subtNum
decrease.onmousedown = function () {
  doInterval(-1)
}
decrease.onmouseup = function () {
  clearInterval(state.interval)
  clearInterval(state.interval2)
}

//Counter2 using object method
const counter2 = {
  value: 0,
  increase2: function () {
    console.log("increase2!")
    this.value++
    number2.value = this.value
  },
  decrease2: function () {
    console.log("decrease2!")
    this.value--
    number2.value = this.value
  },
}

increase2.onclick = () => {
  //'this' is window
  counter2.increase2()
}

decrease2.onclick = function () {
  //'this' is button
  counter2.decrease2()
}

function Person() {
  this.name = "기영"
}
Person.prototype.hello = function () {
  alert(`hello, ${this.name}`)
}

const man = new Person()
const personDiv = document.querySelector('#person div')
const helloButton = document.querySelector('#helloButton')
const helloInput = document.querySelector('#helloInput')

personDiv.innerHTML = man.name
helloButton.onclick = () => {
    man.hello()
}

helloInput.onkeyup = function(){
    console.log('onkeyup')
    if(helloInput.value == ''){
        man.name = '기영'
        personDiv.innerHTML = man.name
    }else{
        man.name = helloInput.value
        personDiv.innerHTML = helloInput.value
    }
}




