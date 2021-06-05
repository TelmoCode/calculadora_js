function insert(num){
    
    let numero = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = numero + num;

    
   
    
}


function back(){
       
    let resultado = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)

}


function limpar(){
    document.getElementById('resultado').innerHTML = '';
}

function calcular(){
    let calc = document.getElementById('resultado').innerHTML;

    if(calc){
        document.getElementById('resultado').innerHTML = eval(calc)
    }
}