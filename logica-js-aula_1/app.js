alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute

//while = enquanto 
//enquanto o chute não for igual ao número secreto devemos continuar perguntando qual o número

while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
    //se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
    } else {
        if(chute> numeroSecreto) {
            alert(`Você errou! O número secreto é menor que " ${chute}`);
        } else {
            alert(`Você errou! O número secreto é maior que ${chute}`);
        }
    }
}

