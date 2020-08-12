/*
Gerando numeros primos recursivamente
*/





function isprime(n,m){ /* verifica se um numero eh primo recursivamente, retorna 1 se for primo e 0 se não for*/
 
if(m==1 && n!=1) return 1; // verifica se o processo recursivo chegou ao final com m=1 e retorna que n é primo
else if((!(n%m) && m!=n) || n==1) return 0; // verifica se n é divisivel por algum
return isprime(n,m-1); // insere a recursividade
   
}
