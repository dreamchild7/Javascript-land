// onclick event
let btnClick = document.querySelector(".btn-click")
btnClick.addEventListener('click', willChangeBtn)

function willChangeBtn() {
        console.log("Button is clicked");
        btnClick.innerHTML = "clicked"
}

// onchange event
let textBox = document.querySelector('.text-input')
textBox.addEventListener('change', handleChange)

function handleChange(){
     console.log("textbox has changed");;
}

//onmouseover event
let note = document.querySelector('.note');
note.addEventListener('mouseover', hover)

function hover() {
    console.log("mouse moved over the note");
    note.innerHTML = "mouse hovered over the text"
    note.style.transitionDelay = '1s'
}


// onkeydown event
let keyDown = document.querySelector('.keydown')
keyDown.addEventListener('keydown', keyDownEvent);

function keyDownEvent(e) {
    alert("You pressed a key on the keyboard")
}