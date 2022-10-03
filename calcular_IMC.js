

function preenche(){
const objeto = {
    nome: prompt(" Informe seu nome: "),
    idade: prompt(" Informe sua idade"),
    peso: prompt(" Informe seu peso: "),
    altura: prompt(" Informe sua altura: ")
}
return objeto;
}

function calculo(objeto){
const resultado = objeto.peso/(objeto.altura * objeto.altura);

if(resultado < 18.5){
    alert(objeto.nome+ " seu indice de maca corporal esta abaixo do normal"+ " -- "+ resultado.toFixed(2));

}else if(resultado >= 18.5 && resultado <= 24.9){
    alert(objeto.nome+ " seu indice de maca corporal esta normal"+ " -- "+ resultado.toFixed(2));

}else if(resultado >24.9 && resultado <= 29.9){
    alert(objeto.nome+ " seu indice de maca corporal esta em sobrepeso"+ " -- "+ resultado.toFixed(2));

}else if(resultado >29.9 && resultado <= 39.9){
    alert(objeto.nome+ " seu indice de maca corporal esta em obesidade"+ " -- "+ resultado.toFixed(2));

}else if(resultado >39.9){
    alert(objeto.nome+ " seu indice de maca corporal esta em obesidade grave"+ " -- "+ resultado.toFixed(2));
}
return resultado;
}

const lista=[];
do{
    const pessoa = preenche();
    pessoa.resultado = calculo(pessoa);
    lista.push(pessoa);
    let confirmacao = confirm("Deseja continuar ? ");
    
}while (confirmacao == true);

alert(" Abra seu console na para vizualizar a lista !");

console.log(lista);

