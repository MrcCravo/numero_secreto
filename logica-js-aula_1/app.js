alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random()*100 +1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//while = enquanto 
//enquanto o chute não for igual ao número secreto devemos continuar perguntando qual o número

while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 100');
    //se o chute for igual ao número secreto
    if (chute == numeroSecreto) {              
        break;               
    } else {
        if (chute > numeroSecreto) {
            alert(`Você errou! O número secreto é menor que ${chute}`);
        //se o chute for menor que o número secreto    
        } else {
            alert(`Você errou! O número secreto é maior que ${chute}`);
        }
        //para incrementar 1 numa contagem basta utilizar ++
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    alert(`Isso aí! Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa} ...`);

