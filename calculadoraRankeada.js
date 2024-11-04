let vitorias=65;
let derrotas=4;

let saldo = calculateSaldo(vitorias,derrotas);
let ranked = calculateRanked(vitorias);

console.log("O Herói tem de saldo "+ saldo + " e está no nível "+ ranked);



function calculateSaldo(nVitorias, nDerrotas){

    let saldoVitorias= nVitorias-nDerrotas;
    return saldoVitorias;
   
}



function calculateRanked(nVitorias){
	

	if(nVitorias<10&&nVitorias>0){
        var nivel="Ferro";
        
    }else if(nVitorias>=11&&nVitorias<=20){
        var nivel="Bronze";
        
    }else if(nVitorias>=21&&nVitorias<50){
        var nivel="Prata";

    }else if(nVitorias>=51&&nVitorias<=80){
        var nivel="Ouro";

    }else if(nVitorias>=81&&nVitorias<90){
        var nivel="Diamante";

    }else if(nVitorias>=91&&nVitorias<=100){
        var nivel="Lendário";

    }else if(nVitorias>=101){
        var nivel="Imortal";

    }else{
        var nivel="Não rankeado!";
        
    }
    
    return nivel
}

