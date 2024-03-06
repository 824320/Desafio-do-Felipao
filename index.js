let nomeHeroi = "super code"
let xpHeroi = "1000"

switch(xpHeroi){
case (xpHeroi < 1000):
    console.log("Ferro")
    break
    case(xpHeroi >= 1001 && xpHeroi<= 2000):
    console.log("Bronze")
    break
    case(xpHeroi >= 2001 && XpHeroi <= 5000):
    console.log("Prata")
    break
    case(xpHeroi >= 5001 && xpHeroi <= 7000):
    console.log("Ouro")
    break
    case(xpHeroi >=7001 && xpHeroi <= 8000):
    console.log("Platina")
    break
    case(xpHeroi >= 8001 && xpHeroi <= 9000):
    console.log("Ascendente")
    break
    case(xpHeroi>= 9001 && xpHeroi <= 10000):
    console.log("Imortal")
    break
    case(xpHeroi >= 10001):
    console.log("Radiante")
    break
    default:
        console.log("insira um xp valido")

}

console.log("O Heroi " + nomeHeroi +" Subiu para o nivel "+ xpHeroi)













console.log("O heroi "+ nomeHeroi +"subiu para o nivel"+xpHeroi)


