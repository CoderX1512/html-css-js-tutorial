function checkPrime(n){
    let count =0;
for( let i=2; i<n; i++){
    if(n%i == 0){
        count+=1;
    }
}
if (count >= 1){
    return false;
}
return true;
}

console.log(checkPrime(9));