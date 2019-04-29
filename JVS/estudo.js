var alunos = document.querySelectorAll(".aluno");

for (var i = 0; i < alunos.length; i++) {
	var aluno = alunos[i];

var tdMat = aluno.querySelector(".mat");
var matematica = tdMat.textContent;

var tdFis = aluno.querySelector(".fis");
var fisica = tdFis.textContent;

var tdPort = aluno.querySelector(".port");
var portugues = tdPort.textContent;

var media = (Number(portugues) + Number(fisica) + Number(matematica)) / 3 ;

var tdCampoMedia = aluno.querySelector(".media");
tdCampoMedia.textContent = calcMedia(matematica,fisica,portugues);

var tdStatus = aluno.querySelector(".status");	

var mediaAzul = true; 

if (Number(media) < 6) {
	mediaAzul = false;
	tdStatus.textContent = "REPROVADO";
	tdStatus.classList.add("reprovado");
	tdCampoMedia.classList.add("reprovado-nota");
	

} else {
	tdStatus.textContent = "APROVADO";
	tdStatus.classList.add("aprovado");
	tdCampoMedia.style.fontWeight = "bold";
	}

}

function calcMedia(matematica,fisica,portugues){

	media = (Number(portugues) + Number(fisica) + Number(matematica)) / 3;

	return media.toFixed(1);
}


//FORMULARIO




var botaoAdicionar = document.querySelector("#adicionar-aluno");

botaoAdicionar.addEventListener("click", function (){

	event.preventDefault();

	var form = document.querySelector("#form-adiciona");

	var nome = form.nome.value;
	var matematica = form.matematica.value;
	var fisica = form.fisica.value;
	var portugues = form.portugues.value;

	var alunoTr = document.createElement("tr");

	var nomeTd = document.createElement("td");
	var matematicaTd = document.createElement("td");
	var fisicaTd = document.createElement("td");
	var portuguesTd = document.createElement("td");
	var mediaTd = document.createElement("td");
	var statusTd = document.createElement("td");

	nomeTd.textContent = nome; 
	matematicaTd.textContent = matematica;
	fisicaTd.textContent = fisica;
	portuguesTd.textContent = portugues;
	mediaTd.textContent = calcMedia(matematica,fisica,portugues);
	statusTd.textContent = 

	alunoTr.appendChild(nomeTd);
	alunoTr.appendChild(matematicaTd);
	alunoTr.appendChild(fisicaTd);
	alunoTr.appendChild(portuguesTd);
	alunoTr.appendChild(mediaTd);
	alunoTr.appendChild(statusTd);

	alunoTr.classList.add("aluno");

	var tabela = document.querySelector("#tabela-notas");
	console.log(tabela);

	tabela.appendChild(alunoTr);

});



























