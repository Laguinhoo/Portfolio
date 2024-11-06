console.log('Oie hehe');



let usuario

document.getElementById("btnUsuario").onclick = function()
    {
        usuario = document.getElementById('txtUsuario').value
        document.getElementById("lorem1").textContent = `Olá ${usuario}`
    }

const PI = 3.14159
let radius
let circumference

document.getElementById("btnRaio").onclick = function()
    {
        radius = document.getElementById('txtRaio').value
        radius = Number(radius)
        circumference = 2*PI* radius
        document.getElementById('lblRaio').textContent = `A circunferencia é de: ${circumference}cm`
    }

const btnMenos = document.getElementById('btnMenos')
const btnReset = document.getElementById('btnReset')
const btnMais = document.getElementById('btnMais')
const lblContador = document.getElementById('lblContador')

let count = 0 

const max = 100000
const min = 0

let randomNum = Math.floor(Math.random() * max - min) + min

btnMais.onclick = function(){
    count++
    lblContador.textContent = count
}

btnMenos.onclick = function(){
    count--
    lblContador.textContent = count
}

btnReset.onclick = function(){
    count = 0
    lblContador.textContent = count
}

btnRandom.onclick = function(){

    lblContador.textContent = randomNum
}


const lblIdadeResult = document.getElementById('lblIdadeResult')
const txtIdade = document.getElementById('txtIdade')
const btnIdade = document.getElementById('btnIdade')

let idade = 0

btnIdade.onclick = function()
{
    idade = txtIdade.value
    idade = Number(idade)

    if(idade >=100){
        lblIdadeResult.textContent = "Você é definitivamente velho demais para estar usando esse site"
    }

    else if(idade == 0){
        lblIdadeResult.textContent = 'Você deve estar mentindo, tipo, n tem como alguem que nasceu agora estar mexendo em um navegador'
    }

    else if(idade >= 18){
        lblIdadeResult.textContent = 'Você é velho o suficiente para dirigir'
    }

    else if(idade < 0){
        lblIdadeResult.textContent = 'Não é assim que a banda toca dog'
    }

    else{
        lblIdadeResult.textContent = 'Receba'
    }
}
