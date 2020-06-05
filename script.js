var cssColor = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("linearGradient");
const wrap = document.getElementById("wrap");

var gradientType = "linear-gradient(to right,";

function selectGradient() {
    body.style.background = gradientType + " " + color1.value + ", " + color2.value + ")";

    cssColor.textContent = body.style.background + ";";

}


// const wrapper = document.getElementById('wrapper');

// wrapper.addEventListener('click', (event) => {
//     const isButton = event.target.nodeName === 'BUTTON';
//     if (!isButton) {
//         return;
//     }

//     console.dir(event.target.id);
//     console.log(event.target.id);
// })





function changeGrad(event) {
    var btnId = event.target.id;
    if (btnId === '1') {
        gradientType = "linear-gradient(to right,";
        selectGradient();
    } else if (btnId === '2') {
        gradientType = "linear-gradient(to left,";
        selectGradient();
        // } else if (btnId === '3') {
        //     gradientType = "linear-gradient(to bottom,";
        //     selectGradient();
        // }
    }
}



wrap.addEventListener('click', (event) => {
    const changeButton = event.target.nodeName === 'BUTTON';
    if (!changeButton) {
        return;
    }
    console.dir(event.target.id);
    changeGrad(event);
})
color2.addEventListener("input", selectGradient);
color1.addEventListener("input", selectGradient);