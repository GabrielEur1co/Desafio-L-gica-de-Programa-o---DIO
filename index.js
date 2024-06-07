let heroName = "NotheRx"
let levelXP = 0
let rank = ""

for(levelXP = 0; levelXP < 8000; levelXP +=200){
    levelXP = levelXP
}



if (levelXP <= 1000){
    rank = "Ferro"
}else if(levelXP >= 1001 && levelXP <= 2000){
    rank = "Bronze"
}else if (levelXP >= 2001 && levelXP <= 5000){
    rank = "Prata"
}else if (levelXP >= 5001 && levelXP <= 7000){
    rank = "Ouro"
}else if (levelXP >= 7001 && levelXP <= 8000){
    rank = "Platina"
}else if (levelXP >= 8001 && levelXP <= 9000){
    rank = "Ascendente"
}else if (levelXP >= 9001 && levelXP<= 10000){
    rank ="Imortal"
}else if(levelXP>=10001){
    rank = "Radiante"
}



console.log("O herói de nome:", heroName , "está no nivel:", rank, "com", levelXP, "de XP.")
