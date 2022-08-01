function numberRandomizer() {
    let colorNum = Math.round(Math.floor(Math.random() * 3) + 1)
    return colorNum
}

function colorSelector(num) {
    switch (num) {
        case 1:
            return 'red'
            break;
        case 2:
            return 'blue'
            break;
        case 3:
            return 'green'
            break;
    }

}



let red = '#ff0000'
let blue = '#0000FF'
let green = '#00FF00'

document.querySelector('button').addEventListener("click", randomColor)

function randomColor() {
    const boxer = document.querySelector('section')
    boxer.classList.remove('colorBox')
    void boxer.offsetWidth
    boxer.classList.add('colorBox')

    console.log(colorSelector(numberRandomizer()))
    document.querySelector('section').style.backgroundColor = colorSelector(numberRandomizer())

}
