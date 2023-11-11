const buttonSortear = document.querySelector('.button-sortear')
console.log(buttonSortear)



function sortearNumeros(){

    let inputMin = Math.ceil(document.querySelector('.input-1').value)
    console.log(inputMin)
    let inputMax = Math.floor(document.querySelector('.input-2').value)
    console.log(inputMax)

    if(inputMin > inputMax){
        inputMin = inputMin + inputMax
        inputMax = inputMin - inputMax
        inputMin = inputMin - inputMax
        console.log(inputMin, inputMax)
    }
    const localDoResultado = document.querySelector('.local-do-resultado')
    

    const result = Math.floor(Math.random() * ((inputMax - inputMin) + 1) + inputMin)
    localDoResultado.innerHTML = result
    console.log(result)
}

buttonSortear.addEventListener('click', sortearNumeros)