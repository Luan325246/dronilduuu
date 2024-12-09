var setadireita = window.document.getElementById("setadireita")
var Drone1 = window.document.getElementById("Drone1")
var Drone2 = window.document.getElementById("Drone2")
var Drone3 = window.document.getElementById("Drone3")
var setaesquerda = window.document.getElementById("setaesquerda")

function DeslizarParaDireita(){
    Drone1.style="display:none"
    Drone2.style="display:flex"
    Drone3.style="display:flex"
    setadireita.style="display:none"
    setaesquerda.style="display:flex; margin-top=50px"
}

function DeslizarParaEsquerda(){
    Drone1.style="display:flex"
    Drone2.style="display:none"
    Drone3.style="display:none"
    setaesquerda.style="display:none"
    setadireita.style="display:flex; margin-top=50px"
}
