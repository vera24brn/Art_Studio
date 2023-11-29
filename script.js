// cute alert message
alert("Welcome to our little corner of creativity! 🌈✨ Express yourself freely with our web paint! Don't forget to save your masterpieces. Happy painting! 🖌️🎨")

const canvas= document.getElementById("canvas")
const body = document.querySelector('body');

canvas.height = window.innerHeight
canvas.width = window.innerWidth


var lineW = 5;
let prevX = null
let prevY = null
let draw = false

body.style.backgroundColor = "#ffffff";

const ctx = canvas.getContext("2d")
ctx.lineWidth = lineW;

document.getElementById("ageInputId").oninput = function() {
    draw = null
    lineW = document.getElementById("ageInputId").value;
    document.getElementById("ageOutputId").innerHTML = lineW;
    ctx.lineWidth = lineW;
};  

let clrs = document.querySelectorAll(".clr")
clrs = Array.from(clrs)
clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr
    })
})

// clear the paper function
let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

//save function 

// save function with a predefined name "Sketch_ArtStudio.png"

let saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", () => {
let data = canvas.toDataURL("image/png")

 // Create a link and trigger the download
    let a = document.createElement("a")
    a.href = data
    a.download = "sketch_ArtStudio.png"
    a.click()


// Show an alert prompting the user to rate the app
const ratingPrompt = "Thanks for using our app! How would you rate your experience?";
const userRating = prompt(ratingPrompt, " ");


//delay between the alerts
    setTimeout(() => {
        alert(`You rated our app as ${userRating}. Thanks for your feedback!`);
        openRatingPopup();
    }, 1000);
})

// drawing function

window.addEventListener("mousedown", (e) =>
    draw = true);
window.addEventListener("mouseup", (e) =>
    draw = false);
window.addEventListener("mousemove", (e) => {
    if(prevX == null || prevY == null || !draw){
        prevX = e.clientX
        prevY = e.clientY
        return
    }

    let currentX = e.clientX
    let currentY = e.clientY

    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()

    prevX = currentX
    prevY = currentY

});



