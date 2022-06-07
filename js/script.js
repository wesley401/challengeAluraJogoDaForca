function irInicio(){
   window.location.href="file:///C:/Users/wesle/OneDrive/Documentos/Cursos/jogoDaForca/index.html";
}
function comecaJogo(){
   window.location.href="file:///C:/Users/wesle/OneDrive/Documentos/Cursos/jogoDaForca/jogo.html";
}
const palavrasAleatorias = [
   "padaria", "camelo", "papagaio", "corrimao","alura", "tartaruga","caminhao"
]
const letrasErradas =[];
const letrasCertas =[];
const palavrasSecreta = palavrasAleatorias[Math.floor(Math.random() * palavrasAleatorias.length)];
document.addEventListener("keydown", (evento)=> {
   const codigo = evento.keyCode;
   if(isLetra(codigo)){
      const letra = evento.key;
      if(letrasErradas.includes(letra)){
         mostrarAvisoLetraRepetida();
      }else {
         if(palavrasSecreta.includes(letra)) {
            letrasCertas.push(letra);
         }else {
            letrasErradas.push(letra);
         }
      }
      atualizarJogo();
   }
});
function atualizarJogo(){
   mostrarLetrasErradas();
   mostrarLetrasCertas();
   desenhaForca();
   checaJogo();
}
function mostrarLetrasCertas(){
   const secreta = document.querySelector(".palavra-secreta");
   secreta.innerHTML = "";
   palavrasSecreta.split("").forEach(letra => {
      if(letrasCertas.includes(letra)) {
         secreta.innerHTML += `<span>${letra}</span>`;
      }else {
         secreta.innerHTML += `<span>_</span>`
      }
   })
}
function mostrarLetrasErradas(){
   const div = document.querySelector(".letras-erradas");
   div.innerHTML= "<h3> Letras erradas </h3>";
   letrasErradas.forEach(letra => {
      div.innerHTML += letra;
   })
}
function desenhaForca(){
   const parteCorpo = document.querySelectorAll(".parte-corpo");
   for(let i = 0; i<letrasErradas.length; i++){
      parteCorpo[i].style.display = "block";
   }
}
function checaJogo(){
   const secreta = document.querySelector(".palavra-secreta");
   const parteCorpo = document.querySelectorAll(".parte-corpo");
if(letrasErradas.length === parteCorpo.length){
      alert ("Fim de jogo você PERDEU !!")
     }
if(palavrasSecreta === secreta.innerText){
      alert("Parabéns você GANHOU !!")
      } 
}
function mostrarAvisoLetraRepetida(){
   const aviso = document.querySelector(".letra-repetida");
   aviso.classList.add("show");
}

function isLetra(codigo){
   return codigo >= 65 && codigo <= 90;
}