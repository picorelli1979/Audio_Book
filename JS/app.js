
const btn_play_pause = document.getElementById('play_pause');

const btn_anterior = document.getElementById('anterior');

const btn_proxima = document.getElementById('proxima');

const audio_capitulo = document.getElementById('audio_cap')// Variavel do audio

const nome_capitulo = document.getElementById('capitulo')

const numeroCapitulos = 10 ;
let taTocando = 0; // faixa esta parada ou seja começa em ZERO
let capitulo_Atual = 1;

// função para tocar as faixas; 
function tocar_faixa(){
     audio_capitulo.play();
     btn_play_pause.classList.remove('bi-play-circle-fill')
     btn_play_pause.classList.add('bi-pause-circle-fill')
}

// função para parar as faixas;
function pausar_faixa(){
     audio_capitulo.pause();
     btn_play_pause.classList.add('bi-play-circle-fill')
     btn_play_pause.classList.remove('bi-pause-circle-fill')
}

// função para tocar ou não
function tocar_ou_pausar(){

    if(taTocando === 0){
       tocar_faixa();
       taTocando = 1;
    } else {
       pausar_faixa();
       taTocando = 0;
    }

}

// função para trocar nome da faixa
function trocar_nome_faixa(){
     nome_capitulo.innerText = 'CAPITULO ' + capitulo_Atual
}

//função para passar pro proxima faixa  
function proxima_faixa(){

    if(capitulo_Atual === numeroCapitulos){
        capitulo_Atual = 1;
    } else{
        capitulo_Atual = capitulo_Atual + 1;
    }

    audio_capitulo.src = '../AUDIO/' + capitulo_Atual + '.mp3';
    tocar_faixa();
    taTocando = 1;
    trocar_nome_faixa();
}

//função para voltar  faixa  
function voltar_faixa(){

    if(capitulo_Atual === 1){
        capitulo_Atual = numeroCapitulos;
    } else{
        capitulo_Atual = capitulo_Atual - 1;
    }

    audio_capitulo.src = '../AUDIO/' + capitulo_Atual + '.mp3';
    tocar_faixa();
    taTocando = 1;
    trocar_nome_faixa();
}

btn_play_pause.addEventListener('click', tocar_ou_pausar);

btn_proxima.addEventListener('click', proxima_faixa);

btn_anterior.addEventListener('click', voltar_faixa);

