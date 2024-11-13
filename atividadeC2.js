//Codigo antigo 
function gerarNum(){
    console.time("TempoGasto (Algoritmo 1)");
    var vetor = []
    while(vetor.length<6){
        var aleatorio = Math.floor(Math.random()*60+1)
        if(!vetor.includes(aleatorio)){
        vetor.push(aleatorio)
        }
    }
    console.timeEnd("TempoGasto (Algoritmo 1)")
    return vetor
}


//Codigo Novo
function gerarNum2() {
    console.time("TempoGasto (Algoritmo 2)");
   
    var numeros = new Set();  
   
    while (numeros.size < 6) {
        var aleatorio = Math.floor(Math.random() * 60 + 1);
        numeros.add(aleatorio);
    }

    var vetor = Array.from(numeros);
   
    console.timeEnd("TempoGasto (Algoritmo 2)");
    return vetor;
}

function compararTempo(algoritmo1, algoritmo2) {

    const inicio1 = performance.now();
    algoritmo1();
    const fim1 = performance.now();
    const tempo1 = fim1 - inicio1;

    
    const inicio2 = performance.now();
    algoritmo2();
    const fim2 = performance.now();
    const tempo2 = fim2 - inicio2;

    const melhoriaPercen= ((tempo1 - tempo2) / tempo1) * 100;

    console.log(`Tempo Algoritmo 1: ${tempo1.toFixed(2)}ms`);
    console.log(`Tempo Algoritmo 2: ${tempo2.toFixed(2)}ms`);
    console.log(`Melhoria percentual: ${melhoriaPercen.toFixed(2)}%`);

    return melhoriaPercen;
}


compararTempo(gerarNum, gerarNum2);
