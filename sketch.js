// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;


// velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let colidiu = false

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  background(221,160,221);
  mostrarBolinha();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  movimentaBolinha();
  mudaTamanho();
  verificaColisaoBorda();
  verificaColisaoRaquete(xRaquete,yRaquete);
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente)
  incluiPlacar();
  marcaPonto();

}

function mostrarBolinha() { 
  fill ("Black")
  circle(xBolinha,yBolinha,diametro);

}

function movimentaBolinha(){
  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  
  if (xBolinha + raio > width || xBolinha - raio < 0) {
  velocidadeXBolinha *= - 1;
 
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
  velocidadeYBolinha *= - 1;
 } 
  
}
function mudaTamanho(){ 
  diametro = 28;
}

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteLargura = 10;
let raqueteAltura = 90;

function mostraRaquete(x,y){
  fill ("blue")
  rect(x,y,raqueteLargura,raqueteAltura)
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
  
}
 
function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle( x, y, raqueteLargura, raqueteAltura, xBolinha, yBolinha, raio);
  
  if (colidiu) {
    
    velocidadeXBolinha *= - 1;
    raquetada.play();
    
    }
   
}


let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente ;

function movimentaRaqueteOponente(){
  
  if(keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  
  if(keyIsDown(83)){
    yRaqueteOponente += 10;
  }
  
}

let meusPontos = 0;
let pontosOponente = 0;

function incluiPlacar(){
  stroke(255)
  textAlign(CENTER, BASELINE);
  textSize(16);
  fill ('white')
  
  //placar meusPontos
  fill('orange');
  rect(135,10,35,20);
  fill ('white');
  text(meusPontos,150,26);
  
  //placar pontosOponente
  fill('orange');
  rect(430,10,35,20);
  fill ('white');
  text(pontosOponente,450,26)
}

function marcaPonto(){
  if (xBolinha >590){
    meusPontos += 1;
    ponto.play();
  }
  
  if (xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
  
}

//sons do jogo 

let ponto;
let trilha;
let raquetada;




  