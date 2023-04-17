var red = document.querySelector(".red");
var cyan = document.querySelector(".cyan");
var violet = document.querySelector(".violet");
var orange = document.querySelector(".orange");
var pink = document.querySelector(".pink");

var center = document.querySelector(".center");

var getBGColor = (colorName) => {
    return window.getComputedStyle(colorName).backgroundColor;
}

var magicColorChanger = (element, color) => {
    return element.addEventListener("click", () => {
        center.style.background = color'
    })
}

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(pink, getBGColor(pink));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(violet, getBGColor(violet));