let carros = [
    'Palio',
    'Uno',
    'Corolla',
    'Ferrari'
];



var carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '1t',
    ligado:false,
    ligar: function (){
        
        console.log('ligando o '+this.modelo);

        console.log('brbrbrbbr BRUM BRUUUM BRUUUUUUUUUM');
    },
    acelerar: function(){
        if(ligado = true){
        console.log('RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAN NAAAAAAAAAAAAAAAAAAAAAAA.... foi timbora')
        }
    }
};

ligado = false;

function chave(){

    
    if(ligado == false){
    ligado = true;
    carro.ligar();
    document.getElementById('text').innerHTML = 'tui tui tui tui rammmmm ramm... ai sim agora ligou';
    } else if(ligado == true){
        ligado = false;
        document.getElementById('text').innerHTML = 'rhmm desligo o carro mano, caramba... convenhamos ne';
    }
}

function acelerador(){
    if(ligado == true){
    carro.acelerar();
    document.getElementById('text').innerHTML = 'RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAN NAAAAAAAAAAAAAAAAAAAAAAA.... foi timbora';
    }else if(ligado == false){
        document.getElementById('text').innerHTML = 'liga o carro parsa... vc é jumento?';
    }

}