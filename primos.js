/*
Gerando numeros primos recursivamente
*/
var primes = [];


function gerandoprimos(start,end){
if(isprime(start,start)) primes.push(start); 
if(start==end) return;
return gerandoprimos(start+1,end);
}


function primeposition(n){ 
/*
devolve o numero primo que está na posicao n na lista de primos 
exemplo: primeposition(3)=5
*/ 
return primein(1,0,n);
}


function primein(start,position,end){ // usa iteracao para resolver o problema do primeposition
/* 
pra procurar o numero primo na posicao "end" basta percorrer todos os numeros naturais a partir de "start"
ao encontrar um numero primo "position" é incrementado e, se position==end, o numero primo foi encontrado
*/
 
if(isprime(start,start)) {
 
if((position+1)==end) return start;
else return primein(start+1,position+1,end);
 
}
return primein(start+1,position,end);
 
}

function isprime(n,m){ /* verifica se um numero eh primo recursivamente, retorna 1 se for primo e 0 se não for*/
 
if(m==1 && n!=1) return 1; // verifica se o processo recursivo chegou ao final com m=1 e retorna que n é primo
else if((!(n%m) && m!=n) || n==1) return 0; // verifica se n é divisivel por algum
return isprime(n,m-1); // insere a recursividade
   
}
