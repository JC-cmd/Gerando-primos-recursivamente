/*



*/

function gerar_tabela(n,final){ // INICIO
var u = '<table>'; 
  
gerandoprimos(1,final); // gerando o vetor primes com os numeros primos
  
for(var i=0; i<primes.length; i++){ //percorrendo o vetor gerado
  
if(!i){ //essa condicao verifica se está no inicio do for
u+='<tr>';
for(var j=0; j<=n; j++) u+='<th>'+j+'</th>';
u+='</tr>';  
}
if(!(i%n)) {
u+='<tr><td>'+(parseInt(i/n)*n+1) /*parseInt(i/n) devolve o numero da linha na tabela*/+' | '+((parseInt(i/n)+1)*n)+'</td>';
} else if(i%n==(n-1)) u+='</tr>';

u+='<td>'+primes[i]+'</td>';
  
}
  
u+='</table>';
  
return u;
} // FINAL
