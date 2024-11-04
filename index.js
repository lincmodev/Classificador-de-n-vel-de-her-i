
let nome = "Player";
let xp = 7000;


if(xp<=1000&&xp>=0){
	let nivel="Ferro";
	console.log("O Herói de nome "+ nome + " e está no nível "+ nivel);
}else if(xp>=1001&&xp<2001){
	let nivel="Bronze";
	console.log("O Herói de nome "+ nome + " e está no nível "+ nivel);
}else if(xp>=2001&&xp<5001){
	let nivel="Prata";
	console.log("O Herói de nome "+ nome + " e está no nível "+ nivel);
}else if(xp>=5001&&xp<7001){
	let nivel="Ouro";
	console.log("O Herói de nome "+ nome + " e está no nível "+ nivel);
}else if(xp>=7001&&xp<8001){
	let nivel="Platina";
	console.log("O Herói de nome "+ nome + " e está no nível "+ nivel);
}else if(xp>=8001&&xp<9001){
	let nivel="Ascendente";
	console.log("O Herói de nome "+ nome + " e está no nível "+ nivel);
}else if(xp>=9001&&xp<10001){
	let nivel="Imortal";
	console.log("O Herói de nome "+ nome + " e está no nível "+ nivel);
}else if(xp>=10001){
	let nivel="Radiante";
	console.log("O Herói de nome "+ nome + " e está no nível "+ nivel);
}else{
	let nivel="Não Rankeado";
	console.log("O Herói de nome "+ nome + " e está no nível "+ nivel);
}

